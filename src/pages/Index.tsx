
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Affarah",
            "image": "https://affarah.com/assets/logo.png",
            "url": "https://affarah.com/",
            // No telephone provided
            "address": {
              "@type": "PostalAddress",
              "streetAddress": lang === 'ja' ? "東京都千代田区サンプル123" : "Sample 123, Chiyoda, Tokyo",
              "addressLocality": lang === 'ja' ? "千代田区" : "Chiyoda",
              "addressRegion": "Tokyo",
              "postalCode": "100-0001",
              "addressCountry": "JP"
            },
            "description": lang === 'ja'
              ? "外国人向けのフレンドリーなバイリンガル賃貸コンサルティングサービス。日本での住まい探しをサポートします。"
              : "A friendly, bilingual rental consulting service for foreigners in Japan.",
            "priceRange": "$$",
            "areaServed": "Japan",
            "openingHours": ["Mo-Fr 10:00-18:00"],
            "sameAs": [
              "https://www.instagram.com/affarah_tomodachintai/"
            ],
            "serviceType": lang === 'ja' ? "賃貸コンサルティング" : "Rental Consulting",
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": lang === 'ja' ? "賃貸コンサルティング" : "Rental Consulting",
                "description": lang === 'ja'
                  ? "外国人のための日本の賃貸住宅探しを、バイリンガルでサポート。交渉や書類作成もお任せください。"
                  : "Personalized support for foreigners seeking rental housing in Japan, including bilingual guidance, negotiation, and paperwork assistance."
              }
            }
          })}
        </script>
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
