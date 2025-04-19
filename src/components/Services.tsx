
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Rental Property Search",
      description: "We'll help you find the perfect home that matches your needs and budget in Tokyo or Chiba.",
      features: [
        "Personalized property recommendations", 
        "Virtual property tours", 
        "Neighborhood guides",
        "Budget-friendly options"
      ],
      cta: "Find Your Home"
    },
    {
      title: "Application Support",
      description: "Navigate the paperwork and approval process with our bilingual assistance.",
      features: [
        "Document translation", 
        "Application filing", 
        "Guarantor arrangements",
        "Contract explanation"
      ],
      cta: "Get Support"
    },
    {
      title: "Move-in Assistance",
      description: "We'll be with you on moving day and help you settle into your new home.",
      features: [
        "Utility setup", 
        "Local area orientation", 
        "Initial apartment inspection",
        "Moving day coordination"
      ],
      cta: "Plan Your Move"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Friendly Services</h2>
          <p className="text-lg text-gray-600">
            From searching for the perfect apartment to helping you settle in, we provide comprehensive support throughout your renting journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card bg-white hover:shadow-xl group"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-gold" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-navy text-white hover:bg-navy-light group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-navy rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a custom solution?</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We understand that everyone's situation is unique. Contact us for personalized assistance tailored to your specific needs.
            </p>
            <Button className="btn-secondary">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
