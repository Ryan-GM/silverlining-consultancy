
import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "IGAD",
      logo: "/client-logos/IGAD-Communique-1030x535.jpg",
      color: "bg-white"
    },
    {
      name: "USAID",
      logo: "/client-logos/usaid.png",
      color: "bg-white"
    },
    {
      name: "Oxfam_International",
      logo: "/client-logos/oxfam_international_logo.jpeg",
      color: "bg-white"
    },
    {
      name: "Arizona",
      logo: "/client-logos/arizona.jpeg",
      color: "bg-white"
    },
    {
      name: "Novel Technologies E.A LTD",
      logo: "/client-logos/novel.jpeg",
      color: "bg-white"
    },
    {
      name: "Reos Partners",
      logo: "/client-logos/reos.png",
      color: "bg-white"
    },
    {
      name: "AFIDEP",
      logo: "/client-logos/afidep.png",
      color: "bg-white"
    },
    {
      name: "TechChange",
      logo: "/client-logos/TechChange_.png",
      color: "bg-white"
    },
    {
      name: "SoCha",
      logo: "/client-logos/SoCha-Logo.png",
      color: "bg-white"
    },
    {
      name: "Council of Governors Kenya",
      logo: "/client-logos/COG.png",
      color: "bg-white"
    },
    {
      name: "UNODC",
      logo: "/client-logos/UNODC-logo.png",
      color: "bg-white"
    },
    {
      name: "IREX",
      logo: "/client-logos/IREX_.png",
      color: "bg-white"
    },
    {
      name: "DAI",
      logo: "/client-logos/DAI.png",
      color: "bg-white"
    },
    {
      name: "Winrock International",
      logo: "/client-logos/Winrock-logo.png",
      color: "bg-white"
    },
    {
      name: "Village Reach",
      logo: "/client-logos/VillageReach_.jpg",
      color: "bg-white"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-6xl mx-auto">
        {clients.map((client, index) => (
          <div 
            key={client.name}
            className={`${client.color} rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 w-full h-32 flex items-center justify-center border border-silver-200 animate-float hover:scale-105 group`}
            style={{ 
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${5 + index * 0.2}s`
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                loading="lazy"
                className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
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
