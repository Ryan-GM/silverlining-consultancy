
-- Create consultation_bookings table
CREATE TABLE public.consultation_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  consultation_date DATE NOT NULL,
  consultation_time TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on consultation_bookings table
ALTER TABLE public.consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation bookings (for the booking form)
CREATE POLICY "Anyone can create consultation bookings" 
  ON public.consultation_bookings 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Allow admins to view all consultation bookings
CREATE POLICY "Admins can view all consultation bookings" 
  ON public.consultation_bookings 
  FOR SELECT 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Allow admins to update consultation bookings
CREATE POLICY "Admins can update consultation bookings" 
  ON public.consultation_bookings 
  FOR UPDATE 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );
