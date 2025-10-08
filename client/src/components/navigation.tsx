import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 luxury-card backdrop-blur-xl border-b border-luxury-pink/20 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-luxury-pink to-luxury-rose rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-heading font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold luxury-text-gradient">Grace's Catering</h1>
              <p className="text-sm text-muted-foreground">Premium Catering Services</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-menu"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-testimonials"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-luxury"
              data-testid="nav-contact"
            >
              Contact Us
            </button>
          </div>
          
          <button 
            className="md:hidden p-2" 
            onClick={toggleMobileMenu}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn-luxury text-center"
                data-testid="mobile-nav-contact"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
