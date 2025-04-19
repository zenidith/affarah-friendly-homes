
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">About Affarah</h2>
            <p className="text-lg text-gray-600 mb-6">
              Affarah stands for "A Friend who is Familiar About Renting A House" because that's exactly what we are - your friendly guide to finding a home in Japan.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded by Ibuki, a bilingual real estate agent who understands the challenges that non-Japanese speakers face in the Tokyo and Chiba rental markets, we bridge the gap between foreign renters and Japanese property owners.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is simple: make the rental process transparent, stress-free, and even enjoyable for English speakers in Japan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Our Story</Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Meet the Team
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <div className="polaroid -rotate-3 max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ibuki helping a client"
                  className="w-full rounded-sm"
                />
                <div className="p-4 text-center">
                  <p className="text-lg font-medium">Helping you find your new home</p>
                </div>
              </div>
            </div>
            <div 
              className="absolute top-[-10%] right-[-5%] w-48 h-48 bg-gold/20 rounded-full blur-3xl -z-0"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">5+</h3>
            <p className="text-navy">Years of Experience</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">100%</h3>
            <p className="text-navy">English Support</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">200+</h3>
            <p className="text-navy">Happy Clients</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-bold text-gold mb-2">24/7</h3>
            <p className="text-navy">Client Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
