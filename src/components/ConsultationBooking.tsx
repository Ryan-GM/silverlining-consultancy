
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

const ConsultationBooking = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/mercy-githanji', '_blank');
  };

  return (
    <Button 
      size="lg" 
      className="text-lg px-8 py-3 bg-primary hover:bg-primary/90"
      onClick={handleCalendlyClick}
    >
      <CalendarIcon className="mr-2 w-5 h-5" />
      Schedule Free Consultation
    </Button>
  );
};

export default ConsultationBooking;
