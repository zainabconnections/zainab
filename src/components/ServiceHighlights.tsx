import { Settings, Zap, Headphones } from "lucide-react";

const ServiceHighlights = () => {
  const services = [
    {
      icon: Settings,
      title: "Customizable Plans",
      description:
        "Choose from flexible home and business packages tailored to your speed needs.",
    },
    {
      icon: Zap,
      title: "Reliable Connectivity",
      description:
        "Experience uninterrupted performance backed by 24/7 network monitoring.",
    },
    {
      icon: Headphones,
      title: "Advanced Support",
      description: "Get instant help from our technical experts anytime.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Smarter Tools. Better Internet.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-black rounded-2xl p-8 hover-lift hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 glow-blue">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
