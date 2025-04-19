
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    budget: '',
    location: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting Affarah. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        moveDate: '',
        budget: '',
        location: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Ready to find your perfect home in Japan? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    placeholder="+81 90 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Moving Date
                    <span className="text-xs text-gray-500 ml-1">(approximate date OK!)</span>
                  </label>
                  <input
                    type="date"
                    id="moveDate"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none"
                  >
                    <option value="">Select a range</option>
                    <option value="Under ¥70,000">Under ¥70,000</option>
                    <option value="¥70,000 - ¥100,000">¥70,000 - ¥100,000</option>
                    <option value="¥100,000 - ¥150,000">¥100,000 - ¥150,000</option>
                    <option value="¥150,000 - ¥200,000">¥150,000 - ¥200,000</option>
                    <option value="Above ¥200,000">Above ¥200,000</option>
                  </select>
                  <div className="flex items-center mt-1">
                    <HelpCircle className="w-4 h-4 text-navy mr-1" />
                    <span className="text-xs text-gray-500">
                      Helps us find options within your budget
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    placeholder="Tokyo, Chiba, etc."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                  placeholder="Tell us about your requirements, questions, or anything else we should know..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-navy rounded-2xl p-8 text-white shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">Address</h4>
                    <p className="text-white/80">Chiba City, Chiba Prefecture, Japan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">Email</h4>
                    <a href="mailto:contact@affarah.com" className="text-white/80 hover:text-white transition-colors">
                      contact@affarah.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">Phone</h4>
                    <a href="tel:+81-XX-XXXX-XXXX" className="text-white/80 hover:text-white transition-colors">
                      +81-XX-XXXX-XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">Hours</h4>
                    <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/80">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 rounded-2xl p-8 border border-gold/30">
              <h3 className="text-xl font-bold text-navy mb-4">Schedule a Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Not sure where to start? Book a free 30-minute consultation to discuss your housing needs.
              </p>
              <Button className="bg-gold text-navy hover:bg-gold-dark w-full">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
