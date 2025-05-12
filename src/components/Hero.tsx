import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Declare YouFormWidget on window for TypeScript
declare global {
  interface Window {
    YouFormWidget?: { init: () => void };
  }
}

const heroImages = [
  '/hero-images/1.jpg',
  '/hero-images/2.jpg',
  '/hero-images/3.jpg',
  '/hero-images/4.jpg',
  '/hero-images/5.jpg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);
  const { t, language } = useLanguage();
  
  React.useEffect(() => {
    // Dynamically load the YouForm script if not already loaded
    const scriptId = 'youform-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://app.youform.com/widgets/widget.js';
      script.async = true;
      script.onload = () => {
        if (window.YouFormWidget && typeof window.YouFormWidget.init === 'function') {
          window.YouFormWidget.init();
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.YouFormWidget && typeof window.YouFormWidget.init === 'function') {
        window.YouFormWidget.init();
      }
    }
  }, []);
  
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden py-16 md:py-24">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 max-w-xl">
          {language === 'ja' ? (
  <>
    {/* Brand Name */}
    <h1 className="font-bold font-sans text-[48px] leading-tight text-navy dark:text-white">
      Affarah
    </h1>
    {/* Subtext (very small) */}
    <div className="text-xs md:text-sm font-sans text-navy dark:text-white opacity-70 tracking-wide mb-2 mt-1">
      「A Friend Familiar About Renting a House」の頭文字
    </div>
    {/* Headline */}
    <h2 className="font-bold font-sans text-2xl md:text-3xl text-navy dark:text-white mb-2 mt-4">
      住まい探しの、心強いパートナー
    </h2>
    {/* Subheadline */}
    <div className="font-normal font-sans text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
      あなたの次の「家」を見つけ、愛するをサポート
    </div>
    {/* Paragraph */}
    <div className="font-normal font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2">
      住まいの選択は、人生、お金、そして人間関係を変えます。180人以上のお客様をサポートした経験から、日本の賃貸の複雑なルールを、わかりやすくフレンドリーなアドバイスに変換。どんな質問も安心して聞いてください。自信を持って、理想の住まいを見つけましょう。
    </div>
  </>
) : (
  <>
    {/* Brand Name */}
    <h1 className="font-bold font-sans text-[48px] leading-tight text-navy dark:text-white">
      Affarah
    </h1>
    {/* Subtext (very small) */}
    <div className="text-xs md:text-sm font-sans text-navy dark:text-white opacity-70 tracking-wide mb-2 mt-1">
      「A Friend Familiar About Renting a House」
    </div>
    {/* Headline */}
    <h2 className="font-bold font-sans text-2xl md:text-3xl text-navy dark:text-white mb-2 mt-4">
      Your trusted partner in your housing search
    </h2>
    {/* Subheadline */}
    <div className="font-normal font-sans text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
      Your knowledgeable friend for finding—and loving—your next home in Japan.
    </div>
    {/* Paragraph */}
    <div className="font-normal font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2">
      Housing choices shape your life, finances and friendships. With experience guiding <em>180+ renters</em>, we translate Japan’s rental rules into <em>friendly advice</em>—so you can ask <em>anything</em> and sign with <em>confidence</em>.
    </div>
  </>
)}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
  asChild
  className="bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90 group font-medium text-base px-6 py-6"
>
  <a
    href="https://app.youform.com/forms/1taqrobw"
    target="_blank"
    rel="noopener noreferrer"
  >
    Find My Next Home
  </a>
</Button>
  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy dark:border-navy dark:text-navy dark:hover:bg-navy dark:hover:text-white font-medium text-base px-6 py-6">
  <a href="#services" style={{scrollBehavior: 'smooth'}}>How Affarah Helps</a>
</Button>
</div>
        </div>
        <div className="relative">
          <div className="relative z-10 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={heroImages[currentImage]}
              alt="Traditional Japanese apartment interior with shoji screens and tatami mats"
              className="w-full h-full object-cover transition-all duration-700"
              key={heroImages[currentImage]}
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
