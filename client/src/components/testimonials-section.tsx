import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Corporate Event Manager",
      content: "Grace's Catering exceeded our expectations for our annual company retreat. The presentation was stunning and the flavors were incredible. Our employees are still talking about it!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael & Jennifer Davis",
      title: "Wedding Couple",
      content: "Our wedding day was perfect, and Grace's Catering played a huge part in that. From the tasting to the final cleanup, everything was handled with such professionalism and care.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Dr. Patricia Williams",
      title: "Private Party Host",
      content: "I've used Grace's Catering for multiple family celebrations. The attention to detail and quality of ingredients is consistently exceptional. They truly understand elegant dining.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their Grace's Catering experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="luxury-card rounded-3xl p-10 shadow-lg fade-in hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-luxury-charcoal mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center fade-in">
          <div className="luxury-card rounded-3xl p-10 max-w-4xl mx-auto border-2 border-luxury-pink/20">
            <h3 className="font-heading text-2xl font-semibold mb-4 text-luxury-charcoal">
              Ready to Create Your Perfect Event?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join our satisfied clients and experience the Grace's Catering difference. Let us make your next event unforgettable.
            </p>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-luxury"
              data-testid="button-get-started"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}