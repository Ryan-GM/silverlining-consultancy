
import React from 'react';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-serif font-bold text-xl">
                Silverlining Consulting LTD
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transforming visions into reality through innovative event management, 
              impactful facilitation, and empowering coaching across Eastern and Southern Africa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/silverliningconsulting" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/fearlesslivingtransitioncoach/" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#values" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Values</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">silverliningconsult@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">+254726784506</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Eastern & Southern Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Silverlining Consulting Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
