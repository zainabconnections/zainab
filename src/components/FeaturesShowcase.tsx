import { Wifi, Download, Upload, Clock, Award, Users } from "lucide-react";

const FeaturesShowcase = () => {
  const features = [
    {
      icon: Wifi,
      title: "Unlimited Data",
      description: "No caps, no throttling. Use as much as you need.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Download,
      title: "Lightning Downloads",
      description: "Download movies in seconds, not hours.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Upload,
      title: "Fast Uploads",
      description: "Share large files and backup data effortlessly.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Get connected in 24-48 hours from order.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in customer service.",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Family Plans",
      description: "Perfect packages for households of all sizes.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need,{" "}
            <span className="text-white">Nothing You Don't</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Premium features included in every plan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-black rounded-2xl p-8 hover-lift hover-glow h-full">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
