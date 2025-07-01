
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
      logo: "https://www.afidep.org/wp-content/uploads/2019/06/AFIDEP-Logo.png",
      color: "bg-white"
    },
    {
      name: "TechChange",
      logo: "https://www.techchange.org/wp-content/uploads/2020/01/techchange-logo-horizontal.png",
      color: "bg-white"
    },
    {
      name: "SoCha",
      logo: "https://www.socha.net/wp-content/uploads/2020/01/socha-logo.png",
      color: "bg-white"
    },
    {
      name: "Council of Governors Kenya",
      logo: "https://cog.go.ke/images/logo.png",
      color: "bg-white"
    },
    {
      name: "UNODC",
      logo: "https://www.unodc.org/images/unodc-logo.png",
      color: "bg-white"
    },
    {
      name: "IREX",
      logo: "https://www.irex.org/sites/default/files/IREX-logo-horizontal.png",
      color: "bg-white"
    },
    {
      name: "DAI",
      logo: "https://www.dai.com/uploads/DAI-logo-2018.png",
      color: "bg-white"
    },
    {
      name: "Winrock International",
      logo: "https://winrock.org/wp-content/uploads/2020/01/winrock-logo.png",
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
