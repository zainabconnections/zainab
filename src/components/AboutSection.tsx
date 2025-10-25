import { Activity } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Animated Visual */}
          <div className="relative animate-slide-in-left">
            <div className="relative bg-black rounded-2xl p-12 hover-glow">
              <div className="flex items-center justify-center">
                <Activity className="w-64 h-64 text-primary animate-pulse" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powering Everyday Connections
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Zainab Connection, we believe in connecting lives through speed,
              stability, and service excellence. From rural homes to modern businesses,
              our network fuels the digital lifestyle of tomorrow.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered infrastructure continuously optimizes your connection,
              ensuring you always get the fastest, most reliable internet experience
              possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
