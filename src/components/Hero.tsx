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
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden py-10 md:py-12 min-h-screen">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
      </div> {/* CLOSE the grid here */}

    </section>
  );
};

export default Hero;
