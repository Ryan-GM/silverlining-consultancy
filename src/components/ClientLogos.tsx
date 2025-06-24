
import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "USAID",
      logo: "/client-logos/usaid-logo.png",
      color: "bg-blue-50"
    },
    {
      name: "OXFAM International",
      logo: "/client-logos/oxfam-logo.png",
      color: "bg-green-50"
    },
    {
      name: "IGAD",
      logo: "https://igad.int/wp-content/uploads/2020/07/IGAD-LOGO.png",
      color: "bg-blue-50"
    },
    {
      name: "ReosPartners",
      logo: "/client-logos/reos-logo.png",
      color: "bg-orange-50"
    },
    {
      name: "NOVEL Technologies",
      logo: "/client-logos/novel-logo.png",
      color: "bg-blue-50"
    },
    {
      name: "Arizona State University",
      logo: "/client-logos/asu-logo.png",
      color: "bg-red-50"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
        {clients.map((client, index) => (
          <div 
            key={client.name}
            className={`${client.color} rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full h-24 flex items-center justify-center border border-gray-100 animate-float hover:scale-105`}
            style={{ 
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${5 + index * 0.2}s`
            }}
          >
            {client.logo ? (
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="max-h-12 max-w-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-primary font-bold text-sm text-center">${client.name}</span>`;
                  }
                }}
              />
            ) : (
              <span className="text-primary font-bold text-sm text-center">{client.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
