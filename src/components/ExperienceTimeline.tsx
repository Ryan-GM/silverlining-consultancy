
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceTimeline = () => {
  const experiences = [
    {
      date: "Jan - Mar 2025",
      title: "MSSP-SoCHA-DRC",
      description: "Support USAID/DRC Mission's co-creation with local partners. Focus capacity building, facilitation tools to enhance USAID's co-creation process.",
      location: "DRC"
    },
    {
      date: "Dec 2024",
      title: "USAID-Sudan",
      description: "Organized and led agenda co-creation, facilitating a 2-day hybrid Annual Portfolio Review for the USAID Sudan Mission with 50 participants in-house and 10 online.",
      location: "Sudan"
    },
    {
      date: "Oct 2024 - Jan 2025",
      title: "Coaching.com (CDC-USA)",
      description: "Co-trainer for Navigating Transitions Coach Certification online course with 300+ participants over 3 months. Included 8 module delivery, 3 Q&A sessions, and 1 integration session.",
      location: "USA"
    },
    {
      date: "Jul - Nov 2024",
      title: "Oxfam International",
      description: "Planned and coordinated travel logistics, including a gala dinner and dance, for Oxfam's Global Gathering of 70+ senior leaders from over 20 countries.",
      location: "Kenya"
    },
    {
      date: "Feb - Apr 2024",
      title: "Reos Partners, SA",
      description: "Event planning and travel logistics for 50 delegates from the diaspora, Horn of Africa, and South Africa regions.",
      location: "South Africa"
    },
    {
      date: "Dec 2023 - Jan 2024",
      title: "Arizona State University (ASU), USA",
      description: "Designed, coordinated suppliers, and facilitated an Africa-wide team learning event for YALI Legacy & Localization with 60 participants from Eastern and Western Africa.",
      location: "Rwanda"
    },
    {
      date: "Nov - Dec 2023",
      title: "Young African Leaders Initiative Legacy & Localization (YALI LL)",
      description: "Co-facilitated a human-centered strategy and design work plan co-creation workshop with over 100 global stakeholders.",
      location: "Global"
    },
    {
      date: "Aug 2023",
      title: "USAID K.L.C",
      description: "Coordinated production for the Bi-annual Devolution 2023 Report. Managed note-taking in plenary sessions and over five breakout groups daily for 5000+ delegates in Eldoret, Kenya.",
      location: "Kenya"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary"></div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <Card className="bg-white border-silver-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{experience.date}</span>
                    </div>
                    
                    <h3 className="font-serif font-bold text-xl text-primary mb-3">
                      {experience.title}
                    </h3>
                    
                    <p className="text-silver-600 leading-relaxed mb-3">
                      {experience.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-gold-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{experience.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
