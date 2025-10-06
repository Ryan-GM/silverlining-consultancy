
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Eye } from 'lucide-react';

const PhotoPortfolio = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "/portfolio/IMG_0859.JPG",
      alt: "Professional Event"
    },
    {
      id: 2,
      src: "/portfolio/IMG_0997.JPG",
      alt: "Conference Session"
    },
    {
      id: 3,
      src: "/portfolio/USAID-feed-the-future.jpg",
      alt: "Workshop Training"
    },
    {
      id: 4,
      src: "/portfolio/CAADP-climate-Oct-2011.jpg",
      alt: "Team Meeting"
    },
    {
      id: 5,
      src: "/portfolio/Uganda-members.jpg",
      alt: "Leadership Session"
    },
    {
      id: 6,
      src: "/portfolio/jointIGAD-April-2021.jpg",
      alt: "Group Discussion"
    },
    {
      id: 7,
      src: "/portfolio/Non-stateActors(NSA)-Kigali,Rwanda.png",
      alt: "Networking Event"
    },
    {
      id: 8,
      src: "/portfolio/Non-stateActors(NSA).jpg",
      alt: "Coaching Session"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Work in Pictures
          </h2>
          <p className="text-xl text-silver-600 max-w-3xl mx-auto leading-relaxed">
            Real moments from our successful events, workshops, and coaching sessions across Eastern and Southern Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className="animate-scale-in animate-float group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${6 + index * 0.5}s`
              }}
            >
              <Card className="overflow-hidden border-silver-200 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white/90 mb-2">
                        <Camera className="w-4 h-4" />
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-silver-600 italic">
            Every picture tells a story of collaboration, growth, and success across Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoPortfolio;
