
import { useState } from 'react';
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

  return (
    <nav className="bg-background/80 backdrop-blur-sm py-4 shadow-sm sticky top-0 z-50">
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
          <a href="#services" className="text-foreground hover:text-primary/80 font-medium transition-colors">
            {t('services')}
          </a>
          <a href="#about" className="text-foreground hover:text-primary/80 font-medium transition-colors">
            {t('about')}
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary/80 font-medium transition-colors">
            {t('testimonials')}
          </a>
          <a href="#contact" className="text-foreground hover:text-primary/80 font-medium transition-colors">
            {t('contact')}
          </a>
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
          <Button className="bg-navy hover:bg-navy-light text-white">{t('getStarted')}</Button>
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
            <a 
              href="#services" 
              className="text-foreground hover:text-primary/80 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('services')}
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary/80 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary/80 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('testimonials')}
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary/80 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </a>
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
              <Button className="bg-navy hover:bg-navy-light text-white w-full">{t('getStarted')}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
