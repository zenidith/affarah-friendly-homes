import { useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * A component that detects system theme preferences and initializes theme accordingly.
 * This should be rendered inside the ThemeProvider.
 */
const ThemeInitializer = () => {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Only run this effect on first mount
    const userThemePreference = localStorage.getItem('theme');

    if (!userThemePreference) {
      // Check if system prefers dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set theme based on system preference
      setTheme(prefersDark ? 'dark' : 'light');
      
      // Log the detected system preference for debugging
      console.log(`System prefers ${prefersDark ? 'dark' : 'light'} mode, setting theme accordingly`);
    } else {
      console.log(`Using saved theme preference: ${userThemePreference}`);
    }

    // Add event listener to detect changes in system theme preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = (e: MediaQueryListEvent) => {
      // Only update automatically if user hasn't explicitly set a preference
      // (resolvedTheme is the actual theme being used, which could be from system preference)
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme || savedTheme === 'system') {
        setTheme(e.matches ? 'dark' : 'light');
        console.log(`System theme changed to ${e.matches ? 'dark' : 'light'} mode`);
      }
    };
    
    darkModeMediaQuery.addEventListener('change', handleThemeChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [setTheme, resolvedTheme]);

  // This component doesn't render anything
  return null;
};

export default ThemeInitializer;
