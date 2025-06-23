
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CalendarIcon, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        description: "Both date and time are required to book a consultation.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save booking to database
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          consultation_date: selectedDate.toISOString().split('T')[0],
          consultation_time: selectedTime,
          status: 'pending'
        }]);

      if (error) throw error;

      // Send email notification
      const emailBody = `
New Consultation Booking:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Date: ${format(selectedDate, 'PPP')}
Time: ${selectedTime}
Message: ${formData.message}
      `;

      const mailtoLink = `mailto:ryanmunge88@gmail.com?subject=New Consultation Booking - ${format(selectedDate, 'PPP')} at ${selectedTime}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink, '_blank');

      toast({
        title: "Consultation booked successfully!",
        description: "We'll contact you shortly to confirm your appointment.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setSelectedDate(undefined);
      setSelectedTime('');
      setIsOpen(false);

    } catch (error: any) {
      console.error('Error booking consultation:', error);
      toast({
        title: "Error booking consultation",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
          <CalendarIcon className="mr-2 w-5 h-5" />
          Schedule Free Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">
            Schedule Your Free Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calendar Section */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Select Date</Label>
              <Card>
                <CardContent className="p-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              
              {selectedDate && (
                <div className="mt-4">
                  <Label className="text-lg font-semibold mb-4 block">Select Time</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="text-sm"
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form Section */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="booking-name">Full Name *</Label>
                  <Input
                    id="booking-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="booking-email">Email *</Label>
                  <Input
                    id="booking-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="booking-phone">Phone Number</Label>
                  <Input
                    id="booking-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+254 xxx xxx xxx"
                  />
                </div>
                
                <div>
                  <Label htmlFor="booking-company">Company/Organization</Label>
                  <Input
                    id="booking-company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your organization"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="booking-message">Tell us about your needs</Label>
                <Textarea
                  id="booking-message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Briefly describe what you'd like to discuss..."
                  rows={4}
                />
              </div>

              {selectedDate && selectedTime && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">Consultation Summary</h4>
                    <p className="text-sm text-silver-700">
                      <CalendarIcon className="w-4 h-4 inline mr-1" />
                      {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedTime}
                    </p>
                  </CardContent>
                </Card>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting || !selectedDate || !selectedTime}
              >
                {isSubmitting ? 'Booking...' : 'Book Consultation'}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationBooking;
