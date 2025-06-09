import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="pt-0 pb-16 md:pt-0 md:pb-16 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px] py-4">
          <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
            <h2 className="section-title mb-8 text-3xl md:text-4xl font-bold text-left">{t('aboutAffarah')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {t('aboutDescription1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {t('aboutDescription2')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutDescription3')}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button 
                asChild 
                className="bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90 font-medium text-lg px-8 py-4"
              >
                <a href={`/${language}#team`}>
                  {t('meetTheTeam')}
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center items-center mt-8 lg:mt-0 relative h-full w-full">
            <div className="polaroid -rotate-2 w-[85%] max-w-[350px] aspect-square mx-auto shadow-lg overflow-hidden flex flex-col">
              <div className="flex-grow overflow-hidden">
                <img
                  src="/about-affarah.png"
                  alt="Ibuki helping a client"
                  className="w-full h-full rounded-sm object-cover"
                  loading="lazy"
                  width="350" // TODO: Replace with actual intrinsic width of /about-affarah.png
                  height="350" // TODO: Replace with actual intrinsic height of /about-affarah.png
                />
              </div>
              <div className="p-2 text-center bg-white dark:bg-gray-800">
                <p className="text-sm font-medium text-navy dark:text-gold">
                  {language === 'en' ? 'Your trusted guide in Japan' : '日本での信頼できるガイド'}
                </p>
              </div>
            </div>

            <div 
              className="absolute top-[-10%] right-[-5%] w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-0"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 min-w-0">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-2xl font-bold text-gold mb-0">4+</h3>
            <p className="text-navy dark:text-white text-sm">{t('yearsExperience')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-2xl font-bold text-gold mb-0">100%</h3>
            <p className="text-navy dark:text-white text-sm">{t('englishSupport')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-2xl font-bold text-gold mb-0">180+</h3>
            <p className="text-navy dark:text-white text-sm">{t('happyClients')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-2xl font-bold text-gold mb-0">24/7</h3>
            <p className="text-navy dark:text-white text-sm">{t('clientSupport')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
