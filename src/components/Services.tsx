
import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  // Reference to measure and maintain consistent heights
  const sectionRef = React.useRef<HTMLElement>(null);
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
  
  // Back to Top button has been moved to App.tsx for better positioning

  // Function to handle smooth scrolling when the section is targeted by a hash link
  useEffect(() => {
    // Check if the URL hash is targeting this section
    if (window.location.hash === '#services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        // Add a small delay to ensure the section is properly rendered
        setTimeout(() => {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  // Effect to maintain consistent heights during language transitions
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // Store initial height
    const updateHeight = () => {
      const height = section.offsetHeight;
      section.style.setProperty('--section-min-height', `${height}px`);
    };
    
    // Update height on mount and window resize
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="pt-16 pb-0 md:pt-16 md:pb-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 scroll-mt-20 fixed-height-section"
    >
      {/* Back to Top button moved to App.tsx */}
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center">{language === 'en' ? 'Our Friendly Services' : 'フレンドリーなサービス'}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
            {language === 'en' 
              ? 'From searching for the perfect apartment to helping you settle in, we provide comprehensive support throughout your renting journey.' 
              : '理想的な物件探しから入居のお手伝いまで、賃貸の旅全体にわたって包括的なサポートを提供します。'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span className="dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full bg-navy text-white dark:bg-white dark:text-navy hover:bg-navy-light dark:hover:bg-gray-200 group-hover:bg-gold group-hover:text-navy transition-colors duration-300 mt-auto py-2 text-sm"
                  asChild
                >
                  <a
                    href={language === 'en' ? 'https://app.youform.com/forms/1taqrobw' : 'https://app.youform.com/forms/1taqrobw?lang=ja'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.cta}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="bg-navy dark:bg-navy-light rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{customSolution.title}</h3>
            <p className="text-white/80 mb-4 max-w-2xl mx-auto text-sm">
              {customSolution.description}
            </p>
            <Button 
              className="btn-secondary px-6 py-2 text-sm font-medium" 
              asChild
            >
              <a
                href={language === 'en' ? 'https://app.youform.com/forms/1taqrobw' : 'https://app.youform.com/forms/1taqrobw?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {customSolution.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services;
