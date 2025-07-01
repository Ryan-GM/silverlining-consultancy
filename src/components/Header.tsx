import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Values',
    href: '#values'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/37d348c6-8409-42f0-ab8b-740d20ce6b50.png" alt="Silverlining Consulting Logo" className="h-12 w-auto" />
              <span className="font-serif font-bold text-xl text-primary hidden sm:block">Silverlining Consulting LTD</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => <a key={item.name} href={item.href} className="text-silver-700 hover:text-primary transition-colors duration-200 font-medium">
                {item.name}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-silver-700 hover:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-silver-200 bg-white">
            <nav className="flex flex-col space-y-3">
              {navigation.map(item => <a key={item.name} href={item.href} className="text-silver-700 hover:text-primary transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <Button className="mt-4 mx-2 bg-primary hover:bg-primary/90" onClick={() => {
            setIsMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
                Schedule Consultation
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;