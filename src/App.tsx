import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/context/LanguageContext';
import BackToTopButton from './components/BackToTopButton';
import ThemeInitializer from './components/ThemeInitializer';
import AppRouter from '@/router';
import ErrorBoundary from './components/ErrorBoundary';

const queryClient = new QueryClient();

const App = () => {
  // Back to Top functionality moved to BackToTopButton component

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeInitializer />
        <QueryClientProvider client={queryClient}>
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
                <LanguageProvider>
                  <ErrorBoundary>
                    <AppRouter />
                  </ErrorBoundary>
                </LanguageProvider>
              </BrowserRouter>
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
