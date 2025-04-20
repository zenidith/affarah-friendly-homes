
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Language, TranslationKey } from '@/types/translations';
import { translations } from '@/data/translations';

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

  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.body.setAttribute('data-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

