
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
      name: language === 'ja' ? "田中真也" : "Maya Tanaka",
      location: language === 'en' ? "Saitama, Japan" : "埼玉",
      quote: {
        en: "Finding a home close to the best cycling routes has made every weekend an adventure. I love how easy it is to get outdoors!",
        ja: "最高のサイクリングコースの近くに住めて、毎週末が冒険になりました。外に出るのがとても楽しいです！"
      },
      image: "/testimonials/maya_cyclist.png"
    },
    {
      id: 2,
      name: language === 'ja' ? "佐藤恵美" : "Emi Sato",
      location: language === 'en' ? "Tokyo, Japan" : "東京",
      quote: {
        en: "My new place is perfect for relaxing and listening to music. The peaceful atmosphere inspires my creativity.",
        ja: "新しい家は音楽を聴きながらリラックスするのにぴったり。静かな雰囲気が創造力を引き出してくれます。"
      },
      image: "/testimonials/emi_music.png"
    },
    {
      id: 3,
      name: language === 'ja' ? "山田孝志" : "Takashi Yamada",
      location: language === 'en' ? "Chiba, Japan" : "千葉",
      quote: {
        en: "I wanted a cozy, welcoming home, and that's exactly what I found. It's my favorite place to unwind after a long day.",
        ja: "居心地の良い家を探していて、まさに理想の場所が見つかりました。毎日帰るのが楽しみです。"
      },
      image: "/testimonials/takashi_home.png"
    },
    {
      id: 4,
      name: language === 'ja' ? "小林由紀" : "Yuki Kobayashi",
      location: language === 'en' ? "Tokyo, Japan" : "東京",
      quote: {
        en: "Hosting friends and sharing good times has never been easier. My home is now the go-to spot for gatherings!",
        ja: "友達を招いて楽しい時間を過ごすのがもっと簡単になりました。今では私の家が集まりの定番です！"
      },
      image: "/testimonials/yuki_social.png"
    },
    {
      id: 5,
      name: language === 'ja' ? "藤本早苗" : "Sanae Fujimoto",
      location: language === 'en' ? "Kanagawa, Japan" : "神奈川",
      quote: {
        en: "Living surrounded by greenery brings me peace every day. I feel refreshed and connected to nature.",
        ja: "緑に囲まれた生活は毎日心を癒してくれます。自然とつながっている実感があります。"
      },
      image: "/testimonials/sanae_nature.png"
    }
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
