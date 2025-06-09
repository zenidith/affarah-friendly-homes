import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Language, TranslationKey } from '@/types/translations';
import { translations } from '@/data/translations';
import { useNavigate, useLocation } from 'react-router-dom';

// Define the context type
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  // setLanguageFromUrl: (lang: Language) => void; // We can simplify by handling this internally
  t: (key: TranslationKey) => string;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en', // Default language
  toggleLanguage: () => {},
  // setLanguageFromUrl: () => {},
  t: () => '',
});

// Create the provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialLanguage = (): Language => {
    // 1. Check URL parameter first
    const params = new URLSearchParams(location.search);
    const langFromUrl = params.get('lang');
    if (langFromUrl === 'ja' || langFromUrl === 'en') {
      try {
        localStorage.setItem('preferredLanguage', langFromUrl); // Update localStorage
      } catch (e) {
        console.warn('Error writing to localStorage from URL param', e);
      }
      return langFromUrl;
    }

    // 2. Check localStorage
    try {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage === 'ja' || savedLanguage === 'en') {
        return savedLanguage as Language;
      }
    } catch (e) {
      console.warn('Error reading from localStorage', e);
    }
    
    // 3. Default to English (or your preferred default)
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Function to set language and update persistence/URL
  const setLanguage = (newLang: Language) => {
    try {
      localStorage.setItem('preferredLanguage', newLang);
    } catch (e) {
      console.warn('Error writing to localStorage', e);
    }
    setLanguageState(newLang);

    // Update URL path based on current location
    const currentPath = location.pathname;
    const currentSearch = location.search;
    let newPath = '';

    if (currentPath.startsWith('/en/') || currentPath.startsWith('/ja/')) {
      newPath = `/${newLang}${currentPath.substring(3)}`;
    } else if (currentPath === '/') { // Handle root path
      newPath = `/${newLang}`;
    } else { // For other paths, prepend language if not already there
      newPath = `/${newLang}${currentPath}`;
    }
    
    // Remove 'lang' param from search if it exists, as path now reflects language
    const params = new URLSearchParams(currentSearch);
    if (params.has('lang')) {
      params.delete('lang');
      const newSearch = params.toString();
      navigate(`${newPath}${newSearch ? `?${newSearch}` : ''}`, { replace: true });
    } else {
      navigate(newPath, { replace: true });
    }
  };
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ja' : 'en';
    setLanguage(newLang);
  };

  // Effect to handle initial URL parameter and update context if needed
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langFromUrl = params.get('lang');
    if ((langFromUrl === 'ja' || langFromUrl === 'en') && langFromUrl !== language) {
      setLanguage(langFromUrl); // This will also update localStorage and path
    }
  }, [location.search, language]); // Rerun if search params or context language changes

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  // Set HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.body.setAttribute('data-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
