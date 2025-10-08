import chefImg from "@assets/graces-catering-about.jpg";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 luxury-gradient-bg relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in w-full">
            <img 
              src={chefImg} 
              alt="Professional chef at Grace's Catering" 
              className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          <div className="fade-in w-full">
            <div className="section-divider mb-8"></div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold luxury-text-gradient mb-8">
              About Grace's Catering
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With years of experience in premium catering services, Grace's Catering has established itself as Warrenton's premier choice for exceptional culinary experiences. We pride ourselves on attention to detail, quality ingredients, and impeccable presentation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced professionals is dedicated to making your event memorable through outstanding food, elegant presentation, and seamless service. From intimate gatherings to large corporate events, we bring the same level of excellence to every occasion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal mb-1">Professional Excellence</h4>
                  <p className="text-muted-foreground text-sm">Years of experience delivering exceptional catering services</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal mb-1">Quality Ingredients</h4>
                  <p className="text-muted-foreground text-sm">Only the finest, freshest ingredients in every dish</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal mb-1">Custom Solutions</h4>
                  <p className="text-muted-foreground text-sm">Tailored menus and services for every event type</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal mb-1">Full Service</h4>
                  <p className="text-muted-foreground text-sm">Complete event planning and execution services</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-luxury"
              data-testid="button-start-planning"
            >
              Start Planning Your Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
