
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ja';

// Define translation types
type TranslationKey = 
  | 'services' 
  | 'about' 
  | 'testimonials' 
  | 'contact'
  | 'getStarted'
  | 'startYourSearch'
  | 'learnMore'
  | 'languageSupport'
  | 'noHiddenFees'
  | 'realPersonGuidance'
  | 'fullEnglishSupport'
  | 'transparentPricing'
  | 'dedicatedAgent'
  | 'findHome'
  | 'nextHome';

type Translations = {
  [key in TranslationKey]: {
    en: string;
    ja: string;
  }
};

// Define translations
const translations: Translations = {
  services: {
    en: 'Services',
    ja: 'サービス'
  },
  about: {
    en: 'About',
    ja: '会社概要'
  },
  testimonials: {
    en: 'Testimonials',
    ja: 'お客様の声'
  },
  contact: {
    en: 'Contact',
    ja: 'お問い合わせ'
  },
  getStarted: {
    en: 'Get Started',
    ja: '始めましょう'
  },
  startYourSearch: {
    en: 'Start Your Search',
    ja: '検索を開始'
  },
  learnMore: {
    en: 'Learn More',
    ja: '詳細を見る'
  },
  languageSupport: {
    en: 'Language Support',
    ja: '言語サポート'
  },
  noHiddenFees: {
    en: 'No Hidden Fees',
    ja: '追加料金なし'
  },
  realPersonGuidance: {
    en: 'Real-Person Guidance',
    ja: '専任サポート'
  },
  fullEnglishSupport: {
    en: 'Full English and Japanese support throughout the entire rental process.',
    ja: '賃貸プロセス全体を通して、英語と日本語の完全サポートを提供します。'
  },
  transparentPricing: {
    en: 'Transparent pricing with no surprises or additional charges.',
    ja: '透明な料金設定で、予想外の追加料金はありません。'
  },
  dedicatedAgent: {
    en: 'A dedicated agent guiding you through every step of the process.',
    ja: 'プロセスの各ステップをサポートする専任エージェント。'
  },
  findHome: {
    en: "Let's find your next home in Japan",
    ja: '日本であなたの次の家を見つけましょう'
  },
  nextHome: {
    en: 'Affarah is your friendly guide to renting in Tokyo and Chiba. We speak your language and make finding a home in Japan simple and stress-free.',
    ja: 'アファラーは東京と千葉での賃貸のフレンドリーなガイドです。あなたの言語を話し、日本での家探しをシンプルでストレスフリーにします。'
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check for stored preference
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage === 'ja' || savedLanguage === 'en') ? savedLanguage : 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'en' ? 'ja' : 'en';
      localStorage.setItem('preferredLanguage', newLang);
      return newLang;
    });
  };

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  // Update document language attribute when language changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    
    // Force a re-render by updating a data attribute on the body
    document.body.setAttribute('data-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
