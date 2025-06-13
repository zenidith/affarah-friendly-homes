
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: {
    en: string;
    ja: string;
  };
  image: string;
}

const Testimonials = () => {
  const { t, language } = useLanguage();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: language === 'ja' ? "リナ" : "Rina",
      location: language === 'en' ? "Saitama, Japan" : "埼玉",
      quote: {
        en: "Rina is thrilled with her new home and praises the agent's integrity and helpfulness, which made her first home search a happy and reassuring experience. She would definitely use their services again.",
        ja: "リナさんは新しい家に大満足で、担当者の誠実さと親切さを称賛しています。初めての家探しも安心して楽しい経験となり、また利用したいと述べています。"
      },
      image: "/testimonials/maya_cyclist.png"
    },
    {
      id: 2,
      name: language === 'ja' ? "カーソン＆ホノミ" : "Carson & Honomi",
      location: language === 'en' ? "Tokyo, Japan" : "東京",
      quote: {
        en: "Carson and Honomi, as foreigners, found renting in Tokyo challenging but had a perfect experience with Ibuki. They highlight her attentiveness to their needs, lack of pressure, and help with paperwork, calling her a lifesaver.",
        ja: "外国人であるカーソンさんとホノミさんは、東京での賃貸物件探しに苦労しましたが、イブキさんのおかげで完璧な経験ができました。彼らのニーズへの配慮、プレッシャーのなさ、書類手続きのサポートを特筆し、命の恩人と呼んでいます。"
      },
      image: "/testimonials/emi_music.png"
    },
    {
      id: 3,
      name: language === 'ja' ? "ケイン" : "Kayne",
      location: language === 'en' ? "Chiba, Japan" : "千葉",
      quote: {
        en: "Kayne was highly impressed with Ibuki's service, noting her efficiency in vetting options, understanding his needs to suggest even better places, and providing flawless support from viewing to after-service, including negotiating a discount.",
        ja: "ケインさんはイブキさんのサービスに非常に感銘を受け、物件の選定の効率性、ニーズを理解してより良い物件を提案する能力、内見からアフターサービスまでの完璧なサポート、さらに値引き交渉までしてくれた点を挙げています。"
      },
      image: "/testimonials/takashi_home.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoplay]);

  return (
    <section id="testimonials" className="py-16 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center">{t('testimonialsTitle')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('testimonialsDescription')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center min-h-[400px] md:h-[340px] gap-8 md:gap-12 transition-all duration-300 py-4 md:py-0">
                    <div className="polaroid rotate-1 w-[85%] max-w-[280px] md:w-1/3 mx-auto md:mx-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full aspect-square object-cover rounded-sm"
                        loading="lazy"
                        width="280" // TODO: Replace with actual intrinsic width of testimonial images
                        height="280" // TODO: Replace with actual intrinsic height of testimonial images
                      />
                      <div className="p-2 text-center">
                        <p className="font-bold text-navy dark:text-gold">{language === 'ja' ? `${testimonial.name}さん` : testimonial.name}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-center h-full">
                      <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic mb-2">
                        "{testimonial.quote[language]}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <p className="font-bold text-navy dark:text-gold">{testimonial.name}</p>
                          <p className="text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow hover:bg-navy hover:text-white dark:hover:bg-navy-light transition-colors"
              aria-label="Previous testimonial"
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gold' : 'bg-gray-300 dark:bg-gray-600'} transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
                onMouseEnter={() => setIsAutoplay(false)}
                onMouseLeave={() => setIsAutoplay(true)}
              />
            ))}
            <button
              onClick={nextSlide}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow hover:bg-navy hover:text-white dark:hover:bg-navy-light transition-colors"
              aria-label="Next testimonial"
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
