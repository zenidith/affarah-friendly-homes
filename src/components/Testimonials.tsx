
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Thompson",
      location: "Tokyo, from Australia",
      quote: "Affarah made finding an apartment in Tokyo so easy! Their English support was invaluable, and I felt like I had a friend helping me through every step.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Chiba, from Canada",
      quote: "I was nervous about renting in Japan with the language barrier, but Ibuki from Affarah made the process smooth and stress-free. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Funabashi, from Spain",
      quote: "The personalized service from Affarah was amazing. They found me a perfect apartment that matched all my requirements and my budget.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Alex Johnson",
      location: "Tokyo, from UK",
      quote: "What sets Affarah apart is their dedication to helping you even after you've moved in. They're truly a friend in the rental process.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoplay]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Hear from expats who found their perfect home with Affarah's help.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="polaroid rotate-1 md:w-1/3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full aspect-square object-cover rounded-sm"
                      />
                      <div className="p-2 text-center">
                        <p className="font-medium">{testimonial.name}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <p className="font-bold text-navy">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-white rounded-full shadow hover:bg-navy hover:text-white transition-colors"
              aria-label="Previous testimonial"
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gold' : 'bg-gray-300'} transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
                onMouseEnter={() => setIsAutoplay(false)}
                onMouseLeave={() => setIsAutoplay(true)}
              />
            ))}
            <button
              onClick={nextSlide}
              className="p-2 bg-white rounded-full shadow hover:bg-navy hover:text-white transition-colors"
              aria-label="Next testimonial"
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
