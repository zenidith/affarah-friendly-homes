
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden py-16 md:py-24">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-navy dark:text-white leading-tight">
            {t('findHome')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {t('nextHome')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90 group font-medium text-base px-6 py-6">
              {t('startYourSearch')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy dark:border-navy dark:text-navy dark:hover:bg-navy dark:hover:text-white font-medium text-base px-6 py-6">
              {t('learnMore')}
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/84cd8625-1cde-4450-a144-9c4f21bc4222.png"
              alt="Sunset landscape view of Japan"
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-gold/20 rounded-full blur-3xl -z-0"
            aria-hidden="true"
          />
          <div 
            className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-navy/20 rounded-full blur-3xl -z-0"
            aria-hidden="true"
          />
        </div>
      </div>
      
      <div className="container-custom mt-16 md:mt-24">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div className="text-center">
            <div className="bg-navy/10 dark:bg-navy/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-navy dark:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{t('languageSupport')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('fullEnglishSupport')}</p>
          </div>
          
          <div className="text-center">
            <div className="bg-navy/10 dark:bg-navy/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-navy dark:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{t('noHiddenFees')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('transparentPricing')}</p>
          </div>
          
          <div className="text-center">
            <div className="bg-navy/10 dark:bg-navy/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-navy dark:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{t('realPersonGuidance')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('dedicatedAgent')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
