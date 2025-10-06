-- Step 1: Create app_role enum type
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Step 2: Create user_roles table with proper structure
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Step 3: Create security definer function to check roles (prevents recursive RLS issues)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Step 4: Create helper function for checking admin status
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin')
$$;

-- Step 5: Migrate existing admin users from profiles to user_roles
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM public.profiles
WHERE role = 'admin'
ON CONFLICT (user_id, role) DO NOTHING;

-- Step 6: Add default 'user' role for all existing users who aren't admins
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'user'::public.app_role
FROM public.profiles
WHERE role != 'admin' OR role IS NULL
ON CONFLICT (user_id, role) DO NOTHING;

-- Step 7: Update consultation_bookings RLS policies
DROP POLICY IF EXISTS "Admins can view all consultation bookings" ON public.consultation_bookings;
DROP POLICY IF EXISTS "Admins can update consultation bookings" ON public.consultation_bookings;

CREATE POLICY "Admins can view all consultation bookings"
ON public.consultation_bookings
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update consultation bookings"
ON public.consultation_bookings
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()));

-- Step 8: Update contact_submissions RLS policies
DROP POLICY IF EXISTS "Admins can view all contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admins can update contact submissions" ON public.contact_submissions;

CREATE POLICY "Admins can view all contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()));

-- Step 9: Update brands RLS policies
DROP POLICY IF EXISTS "Admins can manage brands" ON public.brands;

CREATE POLICY "Admins can manage brands"
ON public.brands
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()));

-- Step 10: Update categories RLS policies
DROP POLICY IF EXISTS "Admins can manage categories" ON public.categories;

CREATE POLICY "Admins can manage categories"
ON public.categories
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()));

-- Step 11: Update products RLS policies
DROP POLICY IF EXISTS "Admins can manage products" ON public.products;

CREATE POLICY "Admins can manage products"
ON public.products
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()));

-- Step 12: Update order_tracking RLS policies
DROP POLICY IF EXISTS "Admins can update order tracking" ON public.order_tracking;

CREATE POLICY "Admins can update order tracking"
ON public.order_tracking
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()));

-- Step 13: Create RLS policy for user_roles table (only admins can manage roles)
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Users can view their own role"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Step 14: Create trigger to automatically assign 'user' role to new profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (user_id, role) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_profile_created
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();