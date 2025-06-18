
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-silver-300 to-silver-500 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SLC</span>
              </div>
              <span className="font-serif font-bold text-xl">
                Silverlining Consulting
              </span>
            </div>
            <p className="text-silver-200 mb-6 max-w-md">
              Your ideas crystallized. Empowering organizations through expert event management, 
              facilitation, and coaching services. Like the African three-legged stool, we provide 
              stability, balance, and strength to your business endeavors.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-silver-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-silver-300 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-silver-200">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Event Planning & Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Training & Workshop Facilitation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Leadership & Team Coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-silver-200">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>silverliningconsult@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+254726784506</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe size={16} />
                <span>silverlining-consultancy.web.app</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-silver-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver-300 text-sm">
              © 2024 Silverlining Consulting Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-silver-300 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-silver-300 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
