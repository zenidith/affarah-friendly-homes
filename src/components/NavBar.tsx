
import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b3393a11-aa38-494e-a899-dcbc95e48f45.png" 
              alt="Affarah Logo" 
              className="h-12 md:h-16 mr-2"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-navy hover:text-navy-light font-medium transition-colors">
            Services
          </a>
          <a href="#about" className="text-navy hover:text-navy-light font-medium transition-colors">
            About
          </a>
          <a href="#testimonials" className="text-navy hover:text-navy-light font-medium transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-navy hover:text-navy-light font-medium transition-colors">
            Contact
          </a>
          <a 
            href="https://www.instagram.com/affarah_tomodachintai/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-gold transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <LanguageToggle />
          <Button className="btn-primary">Get Started</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageToggle />
          <button
            className="text-navy p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-navy hover:text-navy-light font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-navy hover:text-navy-light font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-navy hover:text-navy-light font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-navy hover:text-navy-light font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/affarah_tomodachintai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <Button className="btn-primary w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
