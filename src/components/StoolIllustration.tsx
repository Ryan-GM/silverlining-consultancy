
import React from 'react';

const StoolIllustration = () => {
  return (
    <div className="flex items-center justify-center p-8 animate-float">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stool top */}
        <ellipse
          cx="100"
          cy="60"
          rx="60"
          ry="15"
          fill="currentColor"
          opacity="0.9"
        />
        
        {/* Leg 1 */}
        <line
          x1="70"
          y1="75"
          x2="50"
          y2="160"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Leg 2 */}
        <line
          x1="130"
          y1="75"
          x2="150"
          y2="160"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Leg 3 */}
        <line
          x1="100"
          y1="75"
          x2="100"
          y2="160"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Cross supports */}
        <line
          x1="75"
          y1="120"
          x2="125"
          y2="120"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.6"
        />
        <line
          x1="60"
          y1="135"
          x2="100"
          y2="115"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.6"
        />
        <line
          x1="140"
          y1="135"
          x2="100"
          y2="115"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.6"
        />
        
        {/* Decorative elements */}
        <circle cx="100" cy="45" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="85" cy="50" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="115" cy="50" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
};

export default StoolIllustration;
