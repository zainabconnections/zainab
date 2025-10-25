import { Building2, Briefcase, Home, Store, Factory, Hospital, Wifi, Globe } from "lucide-react";

const TrustedBy = () => {
  const logos = [
    { name: "Tech Solutions", icon: Building2 },
    { name: "CloudNet Systems", icon: Globe },
    { name: "Digital Enterprises", icon: Briefcase },
    { name: "Smart Homes", icon: Home },
    { name: "Retail Connect", icon: Store },
    { name: "Manufacturing Hub", icon: Factory },
    { name: "Healthcare Network", icon: Hospital },
    { name: "Fiber Works", icon: Wifi },
  ];

  return (
    <section className="py-2 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
		<div className="text-left mb-8 animate-slide-up">
		  <p className="text-2xl md:text-3xl font-bold text-white">
			Trusted by hundreds of happy users and growing businesses
		  </p>
		</div>

        <div className="relative">
          <div className="flex animate-infinite-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center opacity-70 hover:opacity-100 transition-all duration-300 mx-8 whitespace-nowrap"
              >
                <logo.icon className="w-7 h-7 text-white mr-3 flex-shrink-0" />
                <span className="text-lg text-white font-medium">{logo.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center opacity-70 hover:opacity-100 transition-all duration-300 mx-8 whitespace-nowrap"
              >
                <logo.icon className="w-7 h-7 text-white mr-3 flex-shrink-0" />
                <span className="text-lg text-white font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
