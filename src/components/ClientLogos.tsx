
import React from 'react';

const ClientLogos = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
          <span className="text-primary font-bold text-lg">USAID</span>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
          <span className="text-green-600 font-bold text-lg">OXFAM International</span>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
          <span className="text-green-700 font-bold text-lg">IGAD</span>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
          <span className="text-orange-600 font-bold text-lg">ReosPartners</span>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
          <span className="text-blue-800 font-bold text-lg">NOVEL Technologies</span>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
          <span className="text-red-700 font-bold text-lg">Arizona State University</span>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
