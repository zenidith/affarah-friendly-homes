
import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Handle smooth scrolling with correct offset
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Find the Contact heading text
      const heading = contactSection.querySelector('h2.section-title');
      
      if (heading) {
        // Position to show the heading right below the navbar
        const navbarHeight = 100; // Navbar height plus some padding
        const yOffset = -navbarHeight;
        const y = heading.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Fallback if heading not found
        const navbarHeight = 100;
        const yOffset = -navbarHeight;
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md py-4 shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b3393a11-aa38-494e-a899-dcbc95e48f45.png" 
                alt="Affarah Logo" 
                className="h-12 md:h-16 mr-2 border-2 border-navy dark:border-gold rounded-full"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="https://www.instagram.com/affarah_tomodachintai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contact"
              onClick={handleContactClick}
              className="bg-navy hover:bg-navy-light text-white dark:bg-white dark:text-navy dark:hover:bg-gray-200 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              {t('getStarted')}
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md py-4 px-6 z-50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/affarah_tomodachintai/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <Button 
                  className="bg-navy hover:bg-navy-light text-white dark:bg-white dark:text-navy dark:hover:bg-gray-200 w-full"
                  onClick={handleContactClick}
                >
                  {t('getStarted')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[72px]"></div>
    </>
  );
};

export default NavBar;
