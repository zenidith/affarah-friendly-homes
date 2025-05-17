
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
    // Get the current scroll position and visible section
    const scrollPosition = window.scrollY;
    
    // Find the currently visible section
    const sections = ['services', 'about', 'testimonials', 'contact'];
    let currentSection: HTMLElement | null = null;
    let currentSectionTop = 0;
    let currentSectionId = '';
    
    // Store the heights of all sections before language change
    const sectionHeights: Record<string, number> = {};
    
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        // Store the current height
        sectionHeights[sectionId] = section.offsetHeight;
        
        const rect = section.getBoundingClientRect();
        // If the section is in view
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
          currentSectionTop = rect.top;
          currentSectionId = sectionId;
        }
      }
    }
    
    // Create a marker element at the current position in the viewport
    const marker = document.createElement('div');
    marker.style.position = 'absolute';
    marker.style.height = '1px';
    marker.style.width = '1px';
    marker.style.top = `${scrollPosition}px`;
    marker.style.zIndex = '-1';
    marker.id = 'scroll-position-marker';
    marker.setAttribute('data-section', currentSectionId);
    marker.setAttribute('data-section-top', `${currentSectionTop}`);
    document.body.appendChild(marker);
    
    // Add a class to the body to freeze the layout during transition
    document.body.classList.add('language-transition');
    
    // Apply fixed heights to all sections to prevent layout shifts
    for (const [sectionId, height] of Object.entries(sectionHeights)) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.style.setProperty('--prev-height', `${height}px`);
        section.setAttribute('data-prev-height', '');
      }
    }
    
    // Change the language
    setLanguage(prevLang => {
      const newLang = prevLang === 'en' ? 'ja' : 'en';
      localStorage.setItem('preferredLanguage', newLang);
      
      // After React re-renders, restore scroll position
      setTimeout(() => {
        // First try to scroll to the marker
        const markerElement = document.getElementById('scroll-position-marker');
        if (markerElement) {
          window.scrollTo({
            top: scrollPosition,
            behavior: 'auto'
          });
          
          // Get the section that was in view
          const sectionId = markerElement.getAttribute('data-section');
          const sectionTop = parseFloat(markerElement.getAttribute('data-section-top') || '0');
          
          if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
              // Fine-tune the scroll position to keep the section in the same relative position
              const newRect = section.getBoundingClientRect();
              const adjustment = newRect.top - sectionTop;
              
              if (Math.abs(adjustment) > 5) { // Only adjust if the difference is significant
                window.scrollBy({
                  top: adjustment,
                  behavior: 'auto'
                });
              }
            }
          }
          
          document.body.removeChild(markerElement);
        }
        
        // Remove fixed heights after a delay to allow the page to settle
        setTimeout(() => {
          document.body.classList.remove('language-transition');
          
          // Remove fixed heights from all sections
          for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
              section.removeAttribute('data-prev-height');
            }
          }
        }, 100);
      }, 0);
      
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

