import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Import images directly
import heroImage640 from '@/../public/hero-images/4-640.jpg';
import heroImage800 from '@/../public/hero-images/4-800.jpg';
import heroImage1280 from '@/../public/hero-images/4-1280.jpg';
import heroImage1920 from '@/../public/hero-images/4-1920.jpg';

// Declare YouFormWidget on window for TypeScript
declare global {
  interface Window {
    YouFormWidget?: { init: () => void };
  }
}

// Define the single hero image to use (image #4: Tokyo Tower at dusk)
const staticHeroImageId = 4;

const Hero = () => {
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
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden py-16 md:py-32 w-full min-h-[90vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
          <div className="pt-4 w-full">
            <Button
              asChild
              className="bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90 group font-medium text-lg px-8 py-7 transform transition-transform hover:scale-105 w-full md:w-auto"
            >
              <a
                href={language === 'en' ? 'https://app.youform.com/forms/1taqrobw' : 'https://app.youform.com/forms/z5fhozwc'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 w-full"
              >
                {t('findMyNextHome')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          {/* Decorative photo pile effect */}
          <div className="absolute top-4 left-4 w-[90%] h-[90%] bg-white dark:bg-gray-800 rounded-2xl shadow-lg rotate-[-4deg] z-0"></div>
          <div className="absolute top-2 left-2 w-[95%] h-[95%] bg-white dark:bg-gray-800 rounded-2xl shadow-lg rotate-[-2deg] z-0"></div>
          
          
          {/* Decorative corner elements */}
          <div className="absolute top-[-5px] left-[-5px] w-[40px] h-[40px] border-t-4 border-l-4 border-gold z-20 rounded-tl-lg"></div>
          <div className="absolute bottom-[-5px] right-[-5px] w-[40px] h-[40px] border-b-4 border-r-4 border-gold z-20 rounded-br-lg"></div>
          
          {/* Watery, shimmering border effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-5 animate-shimmer">
            <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-300/30 via-cyan-200/40 to-blue-300/30 rounded-2xl blur-md"></div>
          </div>
          
          {/* No floating icons as requested */}

          <div className="relative z-10 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
            <img
              src="/hero-images/4-1280.jpg" // Default src
              srcSet="
                /hero-images/4-640.jpg 640w,
                /hero-images/4-800.jpg 800w,
                /hero-images/4-1280.jpg 1280w,
                /hero-images/4-1920.jpg 1920w
              "
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
              alt="Hero image for Affarah: A view of Tokyo Tower at dusk, showcasing Japanese housing and lifestyle"
              className="w-full h-full object-cover"
              loading="eager" // Eager load as it's the primary hero image
              width="1920" // Intrinsic width of the largest image
              height="1080" // Intrinsic height of the largest image
              fetchPriority="high" // Hint to the browser to prioritize this image
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
      </div> {/* CLOSE the grid here */}

    </section>
  );
};

export default Hero;
