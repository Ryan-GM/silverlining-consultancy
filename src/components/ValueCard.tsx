
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group text-center animate-fade-in">
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
        <Icon className="w-10 h-10 text-gold-600" />
      </div>
      
      <h3 className="font-serif font-semibold text-xl mb-4 text-primary">
        {title}
      </h3>
      
      <p className="text-silver-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
