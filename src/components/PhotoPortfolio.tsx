
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Eye } from 'lucide-react';

const PhotoPortfolio = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      alt: "Corporate Workshop Session",
      title: "Leadership Workshop - Kenya",
      description: "Executive team building session for multinational corporation"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      alt: "Conference Planning",
      description: "Strategic planning conference setup and coordination"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      alt: "Virtual Training Session",
      title: "Digital Training Platform",
      description: "Online facilitation and digital workshop management"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      alt: "Evening Networking Event",
      title: "Gala Dinner Event",
      description: "Corporate networking dinner and awards ceremony"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      alt: "Retreat Location",
      title: "Leadership Retreat - Rwanda",
      description: "Scenic mountain retreat for executive leadership program"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Work in Action
          </h2>
          <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse into our successful events, workshops, and coaching sessions across Eastern and Southern Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className="animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-silver-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white mb-2">
                        <Camera className="w-4 h-4" />
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  {image.title && (
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      {image.title}
                    </h3>
                  )}
                  <p className="text-silver-600 text-sm leading-relaxed">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoPortfolio;
