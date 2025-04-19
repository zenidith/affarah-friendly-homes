
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/lovable-uploads/b3393a11-aa38-494e-a899-dcbc95e48f45.png" 
              alt="Affarah Logo" 
              className="h-16 mb-4 invert" 
            />
            <p className="text-white/80 mb-4">
              Your friendly guide to renting a home in Japan. We make the process simple and stress-free for English speakers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/affarah_tomodachintai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Property Search</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Application Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Move-in Assistance</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Rental Consultations</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Neighborhood Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/60 mb-2 md:mb-0">
            &copy; {currentYear} Affarah. All rights reserved.
          </p>
          <p className="text-white/60">
            A Friend who is Familiar About Renting A House
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
