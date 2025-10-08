import graceFood1 from "@assets/KakaoTalk_20250830_010930703_1756536902231.jpg";
import graceFood5 from "@assets/KakaoTalk_20250830_010930703_05_1756536902233.jpg";
import graceFood7 from "@assets/KakaoTalk_20250830_010930703_07_1756536902233.jpg";
import graceFood9 from "@assets/KakaoTalk_20250830_010930703_09_1756536902234.jpg";
import graceFood10 from "@assets/KakaoTalk_20250830_010930703_10_1756536902234.jpg";
import graceFood11 from "@assets/KakaoTalk_20250830_010930703_11_1756536902234.jpg";

export default function GallerySection() {
  const galleryImages = [
    {
      src: graceFood1,
      alt: "Grace's Catering signature sushi presentation"
    },
    {
      src: graceFood5,
      alt: "Elegant buffet arrangement with multiple platters"
    },
    {
      src: graceFood7,
      alt: "Gourmet appetizer selection"
    },
    {
      src: graceFood9,
      alt: "Fresh vegetable and fruit display"
    },
    {
      src: graceFood10,
      alt: "Artisanal egg salad canapés"
    },
    {
      src: graceFood11,
      alt: "Premium shrimp platter presentation"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-in">
          <div className="section-divider mb-8"></div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold luxury-text-gradient mb-8">
            Our Culinary Artistry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the visual feast of our premium catering services through our portfolio of memorable events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item rounded-3xl overflow-hidden shadow-lg fade-in">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover" 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn-luxury"
            data-testid="button-view-more"
          >
            View More & Get Quote
          </button>
        </div>
      </div>
    </section>
  );
}
