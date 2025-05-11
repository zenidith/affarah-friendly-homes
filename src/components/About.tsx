
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title mt-8 text-3xl md:text-4xl font-bold text-center">{t('aboutAffarah')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutDescription1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutDescription2')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('aboutDescription3')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">{t('ourStory')}</Button>
              <Button variant="outline" className="border-navy text-navy dark:border-white dark:text-white hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy">
                {t('meetTheTeam')}
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative mt-8">
            <div className="relative z-10">
              <div className="polaroid -rotate-3 max-w-md mx-auto">
                <img
                  src="/about-affarah.png"
                  alt="Ibuki helping a client"
                  className="w-full rounded-sm"
                />
                <div className="p-4 text-center">
                  <p className="text-lg font-medium dark:text-gray-800">{t('helpingYou')}</p>
                </div>
              </div>
            </div>
            <div 
              className="absolute top-[-10%] right-[-5%] w-48 h-48 bg-gold/20 rounded-full blur-3xl -z-0"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">5+</h3>
            <p className="text-navy dark:text-white">{t('yearsExperience')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">100%</h3>
            <p className="text-navy dark:text-white">{t('englishSupport')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">200+</h3>
            <p className="text-navy dark:text-white">{t('happyClients')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">24/7</h3>
            <p className="text-navy dark:text-white">{t('clientSupport')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
