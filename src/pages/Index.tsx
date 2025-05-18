
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
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
  );
};

export default Index;
