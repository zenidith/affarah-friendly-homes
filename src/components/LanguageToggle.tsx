
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  // Simple toggle handler with no complex DOM manipulation
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleLanguage();
  };

  return (
    <div className="flex items-center text-sm">
      <span className={`mr-2 ${language === 'en' ? 'font-semibold text-navy' : 'text-gray-400'}`}>EN</span>
      <div
        className="language-toggle"
        data-state={language}
        onClick={handleToggle}
        role="switch"
        aria-checked={language === 'ja'}
      >
        <div className="language-toggle-slider"></div>
      </div>
      <span className={`ml-2 ${language === 'ja' ? 'font-semibold text-navy' : 'text-gray-400'}`}>日本語</span>
    </div>
  );
};

export default LanguageToggle;
