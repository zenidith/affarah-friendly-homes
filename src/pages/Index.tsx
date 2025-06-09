
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface IndexProps {
  lang: "en" | "ja";
}

const Index = ({ lang }: IndexProps) => {
  const { setLanguageFromUrl } = useLanguage();
  
  // Set language based on URL when component mounts or updates
  useEffect(() => {
    // Add a small delay to ensure routing is complete
    const timer = setTimeout(() => {
      setLanguageFromUrl(lang);
      console.log(`Language set from URL: ${lang}`);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [lang, setLanguageFromUrl]);
  // Canonical URL (no query params)
  const canonicalUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/${lang}`
    : `https://affarah.com/${lang}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl.replace(/\/$/, '') + '/'} />
      </Helmet>
      <div className="min-h-screen flex flex-col aurora-bg">
        <NavBar />
      <main>
        <Hero />
        <div className="services-about-wrapper" style={{ marginBottom: '-80px' }}>
          <Services />
          <About />
        </div>
        <div className="about-testimonials-wrapper" style={{ marginTop: '-40px' }}>
          <Testimonials />
        </div>
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Index;
