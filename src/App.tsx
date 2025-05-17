
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from '@/context/LanguageContext';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
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
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen prevent-layout-shift">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
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

