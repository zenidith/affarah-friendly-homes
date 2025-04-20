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
  | 'nextHome'
  | 'aboutAffarah'
  | 'aboutDescription1'
  | 'aboutDescription2'
  | 'aboutDescription3'
  | 'ourStory'
  | 'meetTheTeam'
  | 'helpingYou'
  | 'yearsExperience'
  | 'englishSupport'
  | 'happyClients'
  | 'clientSupport'
  | 'testimonialsTitle'
  | 'testimonialsDescription'
  | 'readyToFind'
  | 'letsStart'
  | 'getInTouch'
  | 'yourName'
  | 'emailAddress'
  | 'phoneNumber'
  | 'movingDate'
  | 'approxDate'
  | 'monthlyBudget'
  | 'selectRange'
  | 'preferredLocation'
  | 'helpsBudget'
  | 'yourMessage'
  | 'sendMessage'
  | 'contactInfo'
  | 'addressText'
  | 'emailText'
  | 'phoneText'
  | 'hoursText'
  | 'mondayFriday'
  | 'saturday'
  | 'scheduleConsultation'
  | 'notSureStart'
  | 'bookConsultation'
  | 'footerDescription'
  | 'propertySearch'
  | 'applicationSupport'
  | 'moveInAssistance'
  | 'rentalConsultations'
  | 'neighborhoodGuides'
  | 'aboutUs'
  | 'ourTeam'
  | 'testimonials'
  | 'blog'
  | 'careers'
  | 'termsService'
  | 'privacyPolicy'
  | 'cookiePolicy'
  | 'allRightsReserved'
  | 'affarahMeaning'
  | 'chibaAddress'
  | 'legal';

// Define translations
const translations: Partial<Record<TranslationKey, { en: string; ja: string }>> = {
  // ... keep existing translations
  legal: {
    en: 'Legal',
    ja: '法律'
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
