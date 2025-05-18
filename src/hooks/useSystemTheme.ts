import { useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * A custom hook that detects system theme preference and initializes
 * the theme accordingly on first visit.
 */
export const useSystemTheme = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Only run this effect on first mount when no theme has been explicitly set by user
    const savedTheme = localStorage.getItem('theme');
    
    // If user hasn't explicitly chosen a theme, use system preference
    if (!savedTheme) {
      // Check if system prefers dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set theme based on system preference
      setTheme(prefersDark ? 'dark' : 'light');
      
      // Log the detected system preference for debugging
      console.log(`System prefers ${prefersDark ? 'dark' : 'light'} mode, setting theme accordingly`);
    } else {
      console.log(`Using previously saved theme preference: ${savedTheme}`);
    }
    
    // Listen for changes in system color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only update theme automatically if user hasn't explicitly set a preference
      if (theme === 'system') {
        setTheme(e.matches ? 'dark' : 'light');
        console.log(`System theme changed to ${e.matches ? 'dark' : 'light'} mode`);
      }
    };
    
    // Add listener for system theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme, setTheme]);
  
  return { theme };
};
