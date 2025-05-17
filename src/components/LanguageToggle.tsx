
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  // Add a global event listener to prevent scroll position changes
  useEffect(() => {
    const handleLanguageChange = (e: Event) => {
      // Mark all sections with a consistent height class before language change
      const sections = ['services', 'about', 'testimonials', 'contact'];
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          // Store the current height before language change
          const height = section.offsetHeight;
          section.style.setProperty('--prev-height', `${height}px`);
          section.setAttribute('data-prev-height', '');
          section.classList.add('fixed-height-section');
          
          // Also store the scroll position relative to this section
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            // This section is in view
            document.documentElement.style.setProperty('--active-section', `"${sectionId}"`);
            document.documentElement.style.setProperty('--section-scroll-top', `${rect.top}px`);
          }
        }
      });
      
      // Store the window scroll position
      document.documentElement.style.setProperty('--window-scroll-y', `${window.scrollY}px`);
    };
    
    // Listen for our custom event
    window.addEventListener('beforeLanguageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('beforeLanguageChange', handleLanguageChange);
    };
  }, []);
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Record the current scroll position
    const scrollPosition = window.scrollY;
    
    // Find the active section by checking which one is in the viewport
    const sections = ['services', 'about', 'testimonials', 'contact'];
    let activeSection = null;
    
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 0) {
          activeSection = section;
          break;
        }
      }
    }
    
    // Add a class to the body to prevent scroll jumps during transition
    document.body.classList.add('language-transition');
    document.documentElement.classList.add('language-changing');
    
    // Dispatch a custom event before changing the language
    window.dispatchEvent(new Event('beforeLanguageChange'));
    
    // Toggle the language
    toggleLanguage();
    
    // After the language change, restore scroll position
    setTimeout(() => {
      // First restore the scroll position
      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto'
      });
      
      // Then remove the transition classes
      document.body.classList.remove('language-transition');
      
      // After a bit more time, remove all fixed height constraints
      setTimeout(() => {
        document.querySelectorAll('[data-prev-height]').forEach(section => {
          section.removeAttribute('data-prev-height');
          section.classList.remove('fixed-height-section');
        });
        document.documentElement.classList.remove('language-changing');
      }, 100);
    }, 50);
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
