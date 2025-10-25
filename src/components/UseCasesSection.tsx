import familyInternet from "@/assets/family-internet.png";
import remoteWork from "@/assets/remote-work.png";
import gaming from "@/assets/gaming.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const UseCasesSection = () => {
  const useCases = [
    {
      image: familyInternet,
      category: "Home Entertainment",
      title: "Stream Without Limits",
      description:
        "Enjoy 4K streaming on multiple devices simultaneously. Perfect for movie nights and binge-watching your favorite shows with the whole family.",
      color: "from-blue-500 to-purple-500",
    },
    {
      image: remoteWork,
      category: "Remote Work",
      title: "Work From Anywhere",
      description:
        "Crystal-clear video calls and instant file uploads make working from home seamless. Stay productive with our reliable business-grade connection.",
      color: "from-purple-500 to-pink-500",
    },
    {
      image: gaming,
      category: "Gaming",
      title: "Zero Lag Gaming",
      description:
        "Dominate online games with ultra-low latency. Our fiber connection ensures you're always ahead of the competition with instant response times.",
      color: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built For{" "}
            <span className="text-white">Every Lifestyle</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Whatever you do online, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group bg-black rounded-2xl overflow-hidden hover-lift hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  {useCase.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <a
                  href="tel:+18882749152"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                >
                  Call: +1 (888) 274-9152 <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
