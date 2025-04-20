
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const { language } = useLanguage();
  
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-secondary group">
                  {currentContent.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                  {currentContent.contact}
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Tokyo skyline" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/30"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent h-24"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
