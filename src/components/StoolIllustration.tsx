
import React from 'react';

const StoolIllustration = () => {
  return (
    <div className="flex items-center justify-center p-8 animate-float">
      <img
        src="/lovable-uploads/Copilot-removebg-preview.png"
        alt="Silverlining Consulting Ltd - Three-legged stool representing our core services: Project and Event Management, Meetings, Workshops and Conferences, and Coaching & Mercy's fireplace"
        width="400"
        height="400"
        loading="lazy"
        className="max-w-full h-auto"
        style={{
          filter: 'brightness(1.1) contrast(1.1)',
          mixBlendMode: 'multiply',
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default StoolIllustration;
