export default function ServicesSection() {
  const services = [
    {
      title: "Corporate Events",
      description: "Professional catering for business meetings, conferences, and corporate celebrations. Impress your clients and colleagues with our sophisticated menu options.",
      features: [
        "Executive lunch meetings",
        "Conference catering",
        "Corporate celebrations",
        "Business receptions"
      ]
    },
    {
      title: "Wedding Celebrations",
      description: "Make your special day unforgettable with our exquisite wedding catering services. From intimate ceremonies to grand receptions.",
      features: [
        "Cocktail hour appetizers",
        "Plated dinner service",
        "Buffet presentations",
        "Wedding cake service"
      ]
    },
    {
      title: "Private Events",
      description: "Intimate gatherings and private celebrations deserve special attention. We create personalized dining experiences for your guests.",
      features: [
        "Birthday celebrations",
        "Anniversary dinners",
        "Holiday parties",
        "Family reunions"
      ]
    },
    {
      title: "Specialty Cuisine",
      description: "Diverse culinary offerings including Asian specialties, sushi platters, and international cuisine to satisfy every palate.",
      features: [
        "Fresh sushi and sashimi",
        "Asian fusion dishes",
        "International appetizers",
        "Custom menu creation"
      ]
    },
    {
      title: "Event Planning",
      description: "Full-service event planning and coordination to ensure every detail is perfectly executed for your special occasion.",
      features: [
        "Menu consultation",
        "Event coordination",
        "Staff management",
        "Setup and cleanup"
      ]
    },
    {
      title: "Delivery & Setup",
      description: "Professional delivery and setup services ensuring your food arrives fresh and beautifully presented at your venue.",
      features: [
        "Timely delivery",
        "Professional setup",
        "Serving equipment",
        "Pickup coordination"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 luxury-gradient-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-in">
          <div className="section-divider mb-8"></div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold luxury-text-gradient mb-8">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in creating extraordinary culinary experiences tailored to your unique vision and requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card luxury-card rounded-3xl p-10 shadow-lg fade-in">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-luxury-charcoal">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="luxury-pink mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
