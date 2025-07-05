import React, { Suspense, lazy, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/context/LanguageContext';
import BackToTopButton from './components/BackToTopButton';
import ThemeInitializer from './components/ThemeInitializer';
import PageLoader from './components/PageLoader';

// Lazy load pages for code splitting
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));

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
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      {/* Redirect root to preferred language */}
                      <Route path="/" element={<Navigate to="/en" replace />} />
                      
                      {/* Language-specific routes - handle both with and without trailing slash */}
                      <Route path="/en" element={<Index lang="en" />} />
                      <Route path="/en/" element={<Index lang="en" />} />
                      <Route path="/ja" element={<Index lang="ja" />} />
                      <Route path="/ja/" element={<Index lang="ja" />} />
                      
                      {/* Language-specific terms and privacy routes */}
                      <Route path="/en/terms" element={<Terms lang="en" />} />
                      <Route path="/ja/terms" element={<Terms lang="ja" />} />
                      <Route path="/en/privacy" element={<Privacy lang="en" />} />
                      <Route path="/ja/privacy" element={<Privacy lang="ja" />} />
                      
                      {/* Legacy routes for backward compatibility */}
                      <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
                      <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />

                      {/* Fallback for any other route */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
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
