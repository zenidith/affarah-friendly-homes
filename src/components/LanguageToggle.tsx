
import { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState<'en' | 'ja'>('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ja' : 'en');
  };

  return (
    <div className="flex items-center text-sm">
      <span className={`mr-2 ${language === 'en' ? 'font-semibold text-navy' : 'text-gray-400'}`}>EN</span>
      <div
        className="language-toggle"
        data-state={language}
        onClick={toggleLanguage}
        role="switch"
        aria-checked={language === 'ja'}
      >
        <div className="language-toggle-slider"></div>
      </div>
      <span className={`ml-2 ${language === 'ja' ? 'font-semibold text-navy' : 'text-gray-400'}`}>JA</span>
    </div>
  );
};

export default LanguageToggle;
