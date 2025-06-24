
import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "USAID",
      logo: "/lovable-uploads/0a443dd0-121d-4a21-b598-aaf651ee7278.png",
      color: "bg-blue-50"
    },
    {
      name: "OXFAM International",
      logo: "/lovable-uploads/37d348c6-8409-42f0-ab8b-740d20ce6b50.png",
      color: "bg-green-50"
    },
    {
      name: "IGAD",
      logo: "/client-logos/IGAD-Communique-1030x535.jpg",
      color: "bg-blue-50"
    },
    {
      name: "ReosPartners",
      logo: "/client-logos/reos.png",
      color: "bg-orange-50"
    },
    {
      name: "NOVEL Technologies",
      logo: "/client-logos/novel.jpeg",
      color: "bg-blue-50"
    },
    {
      name: "Arizona State University",
      logo: "/client-logos/arizona.jpeg",
      color: "bg-red-50"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
        {clients.map((client, index) => (
          <div 
            key={client.name}
            className={`${client.color} rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 w-full h-32 flex items-center justify-center border border-gray-100 animate-float hover:scale-105`}
            style={{ 
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${5 + index * 0.2}s`
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="max-h-20 max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-primary font-bold text-sm text-center">${client.name}</span>`;
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
