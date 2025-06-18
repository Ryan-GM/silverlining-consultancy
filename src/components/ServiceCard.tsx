
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
}) => {
  return (
    <Card className="card-hover bg-white border border-silver-200 h-full">
      <CardContent className="p-8">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-silver-100 to-silver-200 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        <h3 className="font-serif font-semibold text-2xl text-center mb-4 text-primary">
          {title}
        </h3>
        
        <p className="text-silver-600 text-center mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-silver-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
