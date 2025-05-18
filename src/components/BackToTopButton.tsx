import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 300px
      setShowButton(window.scrollY > 300);
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] flex items-center px-3 py-2 rounded-full bg-gold text-navy font-bold shadow-xl hover:bg-navy hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold dark:bg-navy dark:text-gold dark:hover:bg-gold dark:hover:text-navy text-xs md:text-sm"
      style={{ minWidth: 40, fontWeight: 700, letterSpacing: 0.5 }}
      aria-label={language === 'ja' ? 'トップへ戻る' : 'Back to Top'}
    >
      <span style={{fontSize: '1.2em', marginRight: 4}}>↑</span> 
      <span className="align-middle">{language === 'ja' ? 'トップ' : 'Top'}</span>
    </button>
  );
};

export default BackToTopButton;
