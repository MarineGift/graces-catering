import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-luxury-charcoal via-luxury-brown to-luxury-charcoal text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-luxury-pink to-luxury-rose rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-heading font-bold">G</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold bg-gradient-to-r from-luxury-pink to-luxury-rose bg-clip-text text-transparent">Grace's Catering</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Creating exceptional culinary experiences for every occasion. Professional catering services in Warrenton, VA and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:graceswlim@gmail.com" 
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="footer-email-link"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:540-270-8044" 
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="footer-phone-link"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-home-link"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-services-link"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-menu-link"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-about-link"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-testimonials-link"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-contact-link"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(540) 270-8044</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>graceswlim@gmail.com</span>
              </p>
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>81 Broadview Ave<br/>Warrenton, VA 20186</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Grace's Catering. All rights reserved. | Premium catering services in Warrenton, VA
          </p>
        </div>
      </div>
    </footer>
  );
}
