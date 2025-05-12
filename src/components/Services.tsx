
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();
  
  const services = {
    en: [
      {
        title: "Rental Property Search",
        description: "We'll help you find the perfect home that matches your needs and budget in Tokyo or Chiba.",
        features: [
          "Personalized property recommendations", 
          "Virtual property tours", 
          "Neighborhood guides",
          "Budget-friendly options"
        ],
        cta: "Find Your Home"
      },
      {
        title: "Application Support",
        description: "Navigate the paperwork and approval process with our bilingual assistance.",
        features: [
          "Document translation", 
          "Application filing", 
          "Guarantor arrangements",
          "Contract explanation"
        ],
        cta: "Get Support"
      },
      {
        title: "Move-in Assistance",
        description: "We'll be with you on moving day and help you settle into your new home.",
        features: [
          "Utility setup", 
          "Local area orientation", 
          "Initial apartment inspection",
          "Moving day coordination"
        ],
        cta: "Plan Your Move"
      }
    ],
    ja: [
      {
        title: "物件検索サービス",
        description: "東京または千葉で、あなたのニーズと予算に合った理想的な家を見つけるお手伝いをします。",
        features: [
          "パーソナライズされた物件の推薦", 
          "バーチャルな物件ツアー", 
          "近隣ガイド",
          "予算に優しいオプション"
        ],
        cta: "物件を探す"
      },
      {
        title: "申込サポート",
        description: "バイリンガルによるサポートで、書類手続きと審査プロセスをスムーズに進めます。",
        features: [
          "書類の翻訳", 
          "申込書の提出", 
          "保証人の手配",
          "契約内容の説明"
        ],
        cta: "サポートを受ける"
      },
      {
        title: "入居サポート",
        description: "引越し当日もあなたと一緒に、新しい家への入居をサポートします。",
        features: [
          "公共料金の設定", 
          "近隣エリアの案内", 
          "入居時の部屋チェック",
          "引越し日の調整"
        ],
        cta: "引越しを計画する"
      }
    ]
  };

  const currentServices = language === 'en' ? services.en : services.ja;
  
  const customSolutionContent = {
    en: {
      title: "Need a custom solution?",
      description: "We understand that everyone's situation is unique. Contact us for personalized assistance tailored to your specific needs.",
      cta: "Contact Us"
    },
    ja: {
      title: "カスタムソリューションが必要ですか？",
      description: "私たちは、それぞれの状況がユニークであることを理解しています。あなたの特定のニーズに合わせたパーソナライズされたサポートについて、お問い合わせください。",
      cta: "お問い合わせ"
    }
  };

  const customSolution = language === 'en' ? customSolutionContent.en : customSolutionContent.ja;
  
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mt-8 text-3xl md:text-4xl font-bold text-center">{language === 'en' ? 'Our Friendly Services' : 'フレンドリーなサービス'}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {language === 'en' 
              ? 'From searching for the perfect apartment to helping you settle in, we provide comprehensive support throughout your renting journey.' 
              : '理想的な物件探しから入居のお手伝いまで、賃貸の旅全体にわたって包括的なサポートを提供します。'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <div 
              key={index} 
              className="card bg-white dark:bg-gray-800 hover:shadow-xl group"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-gold" />
                      </div>
                      <span className="dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-navy text-white dark:bg-white dark:text-navy hover:bg-navy-light dark:hover:bg-gray-200 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-navy dark:bg-navy-light rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{customSolution.title}</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {customSolution.description}
            </p>
            <Button className="btn-secondary">{customSolution.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services;
