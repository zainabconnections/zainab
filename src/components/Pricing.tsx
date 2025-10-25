import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹499",
      speed: "50 Mbps",
      features: [
        "Ideal for browsing & email",
        "2-3 connected devices",
        "Standard support",
        "Free installation",
      ],
    },
    {
      name: "Pro Plan",
      price: "₹799",
      speed: "100 Mbps",
      features: [
        "Perfect for HD streaming",
        "5-7 connected devices",
        "Priority support",
        "Free installation",
        "1 month free trial",
      ],
      popular: true,
    },
    {
      name: "Elite Plan",
      price: "₹1,199",
      speed: "200 Mbps",
      features: [
        "Ultra-fast for gaming & 4K",
        "Unlimited devices",
        "24/7 premium support",
        "Free installation",
        "3 months free trial",
        "Static IP option",
      ],
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible pricing for homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-black rounded-2xl p-8 hover-lift animate-slide-up relative ${
                plan.popular
                  ? "shadow-lg shadow-primary/20 scale-105"
                  : "hover-glow"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-primary font-semibold text-lg">{plan.speed}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="tel:+18882749152">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "gradient-primary hover-glow"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                  size="lg"
                >
                  Call: +1 (888) 274-9152
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
