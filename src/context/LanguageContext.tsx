import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language, TranslationKey } from '@/types/translations';
import { translations } from '@/data/translations';
import { useNavigate, useLocation } from 'react-router-dom';

// Define the context type
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguageFromUrl: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  setLanguageFromUrl: () => {},
  t: () => '',
});

// Create the provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Simple function to get initial language
  const getInitialLanguage = (): Language => {
    try {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage === 'ja' || savedLanguage === 'en') {
        return savedLanguage as Language;
      }
    } catch (e) {
      console.warn('Error reading from localStorage', e);
    }
    
    // Default to English
    return 'en';
  };

  // State for current language
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Function to toggle between languages
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ja' : 'en';
    
    try {
      localStorage.setItem('preferredLanguage', newLang);
    } catch (e) {
      console.warn('Error writing to localStorage', e);
    }
    
    // Update URL path based on current location
    const currentPath = location.pathname;
    let newPath = '';
    
    if (currentPath.startsWith('/en/') || currentPath.startsWith('/ja/')) {
      newPath = `/${newLang}${currentPath.substring(3)}`;
    } else {
      newPath = `/${newLang}`;
    }
    
    // Update language state
    setLanguage(newLang);
    
    // Navigate to new URL path
    navigate(newPath);
  };

  // Function to update language from URL
  const setLanguageFromUrl = (lang: Language) => {
    if (lang !== language) {
      try {
        localStorage.setItem('preferredLanguage', lang);
      } catch (e) {
        console.warn('Error writing to localStorage', e);
      }
      
      setLanguage(lang);
    }
  };

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  // Set HTML lang attribute when language changes
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.body.setAttribute('data-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      setLanguageFromUrl, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
