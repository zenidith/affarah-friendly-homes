
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className={`${language === 'ja' ? 'pt-44' : 'pt-28'} pb-16 md:pt-32 md:pb-24 bg-white dark:bg-gray-900`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px] py-4">
          <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
            <h2 className={`section-title mb-8 text-3xl md:text-4xl font-bold text-left ${language === 'ja' ? 'mt-20' : ''}`}>{t('aboutAffarah')}</h2>
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
              <Button className="btn-primary">{t('ourStory')}</Button>
              <Button variant="outline" className="border-navy text-navy dark:border-white dark:text-white hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy">
                {t('meetTheTeam')}
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center items-center mt-8 lg:mt-0 relative h-full">
            <div className="polaroid -rotate-2 w-56 h-56 md:w-64 md:h-64 mx-auto shadow-lg overflow-hidden flex items-center justify-center">
              <img
                src="/about-affarah.png"
                alt="Ibuki helping a client"
                className="w-full h-full rounded-sm object-cover"
              />
            </div>

            <div 
              className="absolute top-[-10%] right-[-5%] w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-0"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className={`${language === 'ja' ? 'mt-10' : 'mt-10'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0`}>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-3xl font-bold text-gold mb-1">4+</h3>
            <p className="text-navy dark:text-white">{t('yearsExperience')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-3xl font-bold text-gold mb-1">100%</h3>
            <p className="text-navy dark:text-white">{t('englishSupport')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-3xl font-bold text-gold mb-1">180+</h3>
            <p className="text-navy dark:text-white">{t('happyClients')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-3 text-center hover:shadow-md transition-shadow min-w-0">
            <h3 className="text-3xl font-bold text-gold mb-1">24/7</h3>
            <p className="text-navy dark:text-white">{t('clientSupport')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
