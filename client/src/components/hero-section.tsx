import ImageCarousel from "./image-carousel";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImages = [
    {
      src: "/assets/images/menu/korean-specialties/galbi.jpg",
      alt: "Galbi - Premium Korean BBQ"
    },
    {
      src: "/assets/images/menu/appetizers/cocktail-shrimp.jpg",
      alt: "Cocktail Shrimp - Fresh Seafood"
    },
    {
      src: "/assets/images/menu/vegetable/mushrooms.jpg",
      alt: "Stir Fried Mushrooms - Fresh Vegetables"
    },
    {
      src: "/assets/images/menu/salad/garden-salad.webp",
      alt: "Garden Salad - Fresh Greens"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <ImageCarousel images={heroImages} autoPlay={true} showDots={true} showArrows={true} interval={4000} />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="luxury-text-gradient">Exceptional Catering</span><br/>
            <span className="text-white drop-shadow-lg">Unforgettable Experiences</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-luxury"
              data-testid="button-plan-event"
            >
              Plan Your Event
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-luxury-charcoal transition-all duration-300 font-semibold"
              data-testid="button-view-menu"
            >
              View Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
