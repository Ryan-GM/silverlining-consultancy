
import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "USAID",
      logo: "https://www.usaid.gov/sites/default/files/2022-05/USAID_Identity_Logo_Lockup_2color_Blue_RGB.png",
      color: "bg-blue-50"
    },
    {
      name: "OXFAM International",
      logo: "https://www.oxfam.org/sites/www.oxfam.org/files/file_attachments/oxfam-logo-rgb-white_0.png",
      color: "bg-green-50"
    },
    {
      name: "IGAD",
      logo: "https://igad.int/wp-content/uploads/2020/07/IGAD-LOGO.png",
      color: "bg-blue-50"
    },
    {
      name: "ReosPartners",
      logo: null,
      color: "bg-orange-50"
    },
    {
      name: "NOVEL Technologies",
      logo: null,
      color: "bg-blue-50"
    },
    {
      name: "Arizona State University",
      logo: "https://www.asu.edu/asuthemes/4.0/assets/arizona-state-university-logo.png",
      color: "bg-red-50"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
        {clients.map((client, index) => (
          <div 
            key={client.name}
            className={`${client.color} rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center border border-gray-100`}
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
