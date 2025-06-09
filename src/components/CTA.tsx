import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const { t, language } = useLanguage();
  
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
                  src="/hero-images/3-1280.jpg"
                  alt="Featured Home"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width="1920" // TODO: Replace with actual intrinsic width of /hero-images/3.jpg
                  height="1080" // TODO: Replace with actual intrinsic height of /hero-images/3.jpg
                />
                <div className="absolute inset-0 bg-navy/10"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent h-24"></div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 flex justify-center">
            <Button className="btn-secondary group text-lg px-8 py-5 md:text-xl md:px-12 md:py-7 w-full md:w-auto" asChild>
              <a
                href={language === 'en' ? 'https://app.youform.com/forms/1taqrobw' : 'https://app.youform.com/forms/z5fhozwc'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentContent.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
