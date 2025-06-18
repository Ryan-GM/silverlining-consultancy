
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // For now, just log the data - in a real app, you'd send this to your backend
    console.log('Contact form submitted:', data);
    
    // Create mailto link with form data
    const subject = `Inquiry about ${data.service} - ${data.company}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nService: ${data.service}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:silverliningconsult@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    reset();
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-silver-200">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="Your full name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="your.email@company.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                {...register('company')}
                placeholder="Your organization"
              />
            </div>
            
            <div>
              <Label htmlFor="service">Service of Interest</Label>
              <select
                id="service"
                {...register('service', { required: 'Please select a service' })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a service</option>
                <option value="Event Planning & Management">Event Planning & Management</option>
                <option value="Training & Workshop Facilitation">Training & Workshop Facilitation</option>
                <option value="Leadership & Team Coaching">Leadership & Team Coaching</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              placeholder="Tell us about your project or inquiry..."
              rows={5}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
