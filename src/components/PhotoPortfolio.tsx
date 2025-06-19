
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Eye } from 'lucide-react';

const PhotoPortfolio = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      alt: "Oxfam International Global Gathering",
      title: "Oxfam International Global Gathering",
      description: "Planned and coordinated travel logistics, including a gala dinner and dance, for Oxfam's Global Gathering of 70+ senior leaders from over 20 countries in Kenya."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      alt: "USAID Sudan Annual Portfolio Review",
      title: "USAID Sudan Annual Portfolio Review",
      description: "Organized and led agenda co-creation, facilitating a 2-day hybrid Annual Portfolio Review for the USAID Sudan Mission with 50 participants in-house and 10 online."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      alt: "Workshop in Tanzania",
      title: "East African Leadership Summit - Tanzania",
      description: "Facilitated cross-border leadership development program for 200+ participants from Kenya, Uganda, Tanzania, and Rwanda focusing on regional collaboration."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=300&fit=crop",
      alt: "Training Session in Uganda",
      title: "NGO Capacity Building Initiative - Uganda",
      description: "Led comprehensive capacity building program for 15 local NGOs focusing on project management, fundraising, and organizational development."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      alt: "Leadership Retreat Rwanda",
      title: "ASU YALI Program - Rwanda",
      description: "Designed, coordinated suppliers, and facilitated an Africa-wide team learning event for YALI Legacy & Localization with 60 participants from Eastern and Western Africa."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      alt: "Corporate Training Session Kenya",
      title: "USAID K.L.C Devolution Conference - Kenya",
      description: "Coordinated production for the Bi-annual Devolution 2023 Report. Managed note-taking in plenary sessions and over five breakout groups daily for 5000+ delegates in Eldoret, Kenya."
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
            Real moments from our successful events, workshops, and coaching sessions across Eastern and Southern Africa - delivering transformative experiences that make a lasting impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className="animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-silver-200 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
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
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg text-primary mb-3 leading-tight">
                    {image.title}
                  </h3>
                  <p className="text-silver-600 text-sm leading-relaxed">
                    {image.description}
                  </p>
                </CardContent>
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
