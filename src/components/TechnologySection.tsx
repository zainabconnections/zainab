import fiberOptic from "@/assets/fiber-optic.png";
import dataCenter from "@/assets/data-center.png";
import { Server, Cpu, Globe, Lock } from "lucide-react";

const TechnologySection = () => {
  const stats = [
    { icon: Server, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Cpu, value: "1 Gbps", label: "Max Speed" },
    { icon: Globe, value: "24/7", label: "Support Available" },
    { icon: Lock, value: "256-bit", label: "Encryption" },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by{" "}
            <span className="text-white">Next-Gen Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our state-of-the-art infrastructure combines cutting-edge fiber-optic
            technology with AI-powered network management to deliver the fastest,
            most reliable internet experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-black rounded-2xl p-6 text-center hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4 glow-blue">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative group animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden hover-lift">
              <img
                src={fiberOptic}
                alt="Fiber Optic Technology"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Fiber-Optic Network</h3>
                <p className="text-muted-foreground">
                  Light-speed data transmission for unmatched performance
                </p>
              </div>
            </div>
          </div>

          <div className="relative group animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden hover-lift">
              <img
                src={dataCenter}
                alt="Data Center Infrastructure"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">AI-Powered Infrastructure</h3>
                <p className="text-muted-foreground">
                  Smart network optimization for consistent reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
