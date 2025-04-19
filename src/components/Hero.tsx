
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden py-16 md:py-24">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-navy leading-tight">
            Let's find your next home in Japan
          </h1>
          <p className="text-lg text-gray-600">
            Affarah is your friendly guide to renting in Tokyo and Chiba. We speak your language and make finding a home in Japan simple and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary group">
              Start Your Search
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Tokyo apartments"
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-gold/20 rounded-full blur-3xl -z-0"
            aria-hidden="true"
          />
          <div 
            className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-navy/20 rounded-full blur-3xl -z-0"
            aria-hidden="true"
          />
        </div>
      </div>
      
      <div className="container-custom mt-16 md:mt-24">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div className="text-center">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Language Support</h3>
            <p className="text-gray-600">Full English and Japanese support throughout the entire rental process.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">No Hidden Fees</h3>
            <p className="text-gray-600">Transparent pricing with no surprises or additional charges.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Real-Person Guidance</h3>
            <p className="text-gray-600">A dedicated agent guiding you through every step of the process.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
