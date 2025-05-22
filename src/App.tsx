
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from '@/context/LanguageContext';
import BackToTopButton from './components/BackToTopButton';
import ThemeInitializer from './components/ThemeInitializer';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => {
  // Back to Top functionality moved to BackToTopButton component

  useEffect(() => {
    // Prevent duplicate script injection
    const youformScriptSrc = 'https://app.youform.com/widgets/widget.js';
    const existingScript = document.querySelector(`script[src="${youformScriptSrc}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = youformScriptSrc;
      script.async = true;
      script.onload = () => {
        // After script loads, trigger a DOM event to re-initialize Youform widget
        document.dispatchEvent(new Event('youform:widgets:init'));
      };
      document.head.appendChild(script);
    } else {
      // If script already present, trigger the event anyway
      document.dispatchEvent(new Event('youform:widgets:init'));
    }
  }, []);

  return (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <ThemeInitializer />
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen prevent-layout-shift transition-colors duration-500 relative overflow-hidden">
            {/* Wave background */}
            <div className="wave-background" />
            {/* Wave pattern overlay */}
            <div className="wave-pattern" />
            {/* Green wave pattern */}
            <div className="wave-green" />
            {/* Decorative dots pattern */}
            <div className="wave-dots" />
            {/* Content overlay to ensure readability */}
            <div className="absolute inset-0 bg-white/10 pointer-events-none" />
            
            {/* Back to Top button component */}
            <BackToTopButton />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ThemeProvider>
  );
};

export default App;

