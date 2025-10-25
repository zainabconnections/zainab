import phoneMockup from "@/assets/phone-mockup.png";
import { Smartphone, Zap, Shield } from "lucide-react";

const MobileAppSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Speed Monitor",
      description: "Track your connection speed in real-time with our mobile app",
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Get notified about network status and service updates instantly",
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Manage your account securely from anywhere, anytime",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative animate-slide-in-left">
            <div className="relative flex justify-center">
              <img
                src={phoneMockup}
                alt="Mobile App Interface"
                className="w-80 hover-lift drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-slide-in-right space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Connected{" "}
                <span className="text-white">On the Go</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Download our mobile app to monitor your connection, manage your account,
                and get instant support—all from your smartphone.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 bg-black rounded-xl p-6 hover-glow animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0 glow-blue">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
