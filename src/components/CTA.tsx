import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const { t, language } = useLanguage();

  // Handle smooth scrolling to the contact form
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 100; // Approximate height of the fixed navbar
      const yOffset = -navbarHeight; 
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  const content = {
    en: {
      title: "Ready to find your perfect home in Japan?",
      description: "Let Affarah be your friendly guide through the Japanese rental process. We're here to help every step of the way.",
      cta: "Start Your Search",
      contact: "Contact Us"
    },
    ja: {
      title: "日本で理想の住まいを見つける準備はできていますか？",
      description: "アファラーが日本の賃貸プロセスを通じてあなたのフレンドリーなガイドになります。あらゆるステップでサポートします。",
      cta: "検索を開始",
      contact: "お問い合わせ"
    }
  };

  const currentContent = language === 'en' ? content.en : content.ja;

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-navy to-navy-light rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {currentContent.title}
              </h2>
              <p className="text-white/80 text-lg mb-8">
                {currentContent.description}
              </p>
            </div>
            <div className="relative p-4 md:p-6">
              <div className="relative h-64 lg:h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src="/hero-images/3-640.jpg"
                  srcSet="/hero-images/3-640.jpg 640w, /hero-images/3-800.jpg 800w, /hero-images/3-1280.jpg 1280w, /hero-images/3-1920.jpg 1920w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Featured Home"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width="1920"
                  height="1080"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent h-24"></div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 flex justify-center">
            <Button
              onClick={handleContactClick}
              className="btn-secondary group text-lg px-8 py-5 md:text-xl md:px-12 md:py-7 w-full md:w-auto flex items-center justify-center"
            >
              {currentContent.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
