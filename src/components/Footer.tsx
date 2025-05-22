
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="inline-block">  {/* Wrapper div for better positioning control */}
              <img 
                src="/lovable-uploads/b3393a11-aa38-494e-a899-dcbc95e48f45.png" 
                alt="Affarah Logo" 
                className="h-16 mb-4 invert border-2 border-gold rounded-full p-1" 
              />
            </div>
            <p className="text-white/80 mb-4">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/affarah_tomodachintai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">{t('services')}</h3>
            <ul className="space-y-2">
              <li><Link to="/#services" className="text-white/80 hover:text-white transition-colors">{t('propertySearch')}</Link></li>
              <li><Link to="/#services" className="text-white/80 hover:text-white transition-colors">{t('applicationSupport')}</Link></li>
              <li><Link to="/#services" className="text-white/80 hover:text-white transition-colors">{t('moveInAssistance')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">{t('about')}</h3>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-white/80 hover:text-white transition-colors">{t('aboutUs')}</Link></li>
              <li><Link to="/#team" className="text-white/80 hover:text-white transition-colors">{t('ourTeam')}</Link></li>
              <li><Link to="/#testimonials" className="text-white/80 hover:text-white transition-colors">{t('testimonials')}</Link></li>
              <li>
                <span className="text-white/80 flex items-center">
                  {t('blog')}
                  <span className="ml-2 text-xs text-gold/80 whitespace-nowrap">
                    {language === 'ja' ? '(近日公開)' : '(Coming Soon)'}
                  </span>
                </span>
              </li>
              <li>
                <span className="text-white/80 flex items-center">
                  {t('careers')}
                  <span className="ml-2 text-xs text-gold/80 whitespace-nowrap">
                    {language === 'ja' ? '(近日公開)' : '(Coming Soon)'}
                  </span>
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                  {t('termsService')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                  {t('privacyPolicy')}
                </Link>
              </li>

            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/60 mb-2 md:mb-0">
            &copy; {currentYear} Affarah. {t('allRightsReserved')}
          </p>
          <p className="text-white/60">
            {t('affarahMeaning')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
