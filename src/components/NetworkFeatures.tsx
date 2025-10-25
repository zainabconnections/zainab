import phoneImg from "@/assets/phone.png";
import routerImg from "@/assets/fiber-optic.png";

const NetworkFeatures = () => {
  const tags = [
    { label: "Fiber Speed", position: "top-[8%] left-[2%]", color: "from-cyan-400 to-blue-500" },
    { label: "Reliable", position: "top-[20%] right-[5%]", color: "from-teal-400 to-cyan-500" },
    // Move '24/7 Support' to the top center of the circle
    { label: "24/7 Support", position: "top-[-32px] left-1/2 -translate-x-1/2", color: "from-blue-400 to-cyan-500" },
    { label: "Secure", position: "top-[45%] right-[2%]", color: "from-cyan-500 to-teal-400" },
    { label: "Fast Setup", position: "bottom-[18%] right-[8%]", color: "from-blue-500 to-cyan-400" },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Circular Design with Tags */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] animate-slide-in-left">
            {/* Central Circle with Gradient - Responsive Sizes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl sm:blur-2xl animate-pulse"></div>
              
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 animate-gradient">
                {/* Inner dark background */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  {/* Image container with subtle gradient */}
                  <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-purple-400/30 to-blue-500/30 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-500">
                    <img 
                      src={routerImg} 
                      alt="Network Router" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tags - Hide on Mobile, Show on Tablet+ */}
            {tags.map((tag, index) => (
              <div
                key={tag.label}
                className={`absolute ${tag.position} animate-float hidden sm:block`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${tag.color} text-white text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap backdrop-blur-sm hover:scale-110 transition-transform duration-300`}>
                  {tag.label}
                </div>
              </div>
            ))}

            {/* Phone mockup - Responsive Positioning and Sizing */}
            <div className="absolute top-8 sm:top-12 lg:top-16 -left-8 sm:-left-12 lg:-left-16 h-[300px] sm:h-[400px] lg:h-[500px] w-auto animate-slide-up z-10 flex items-start" style={{ animationDelay: "0.3s" }}>
              <img 
                src={phoneImg} 
                alt="Mobile App" 
                className="h-full w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right - Content - Responsive Text */}
          <div className="animate-slide-in-right space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="block text-white">Network Coverage</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Measure the effectiveness of your internet connection by understanding network coverage in your area and how it performs over time.
              </p>
              <a href="tel:+18882749152" className="text-primary font-semibold hover:underline hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2">
                Call: +1 (888) 274-9152 →
              </a>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-lg sm:text-xl font-bold text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">Speed Optimization</div>
              <div className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Network Reliability</div>
              <div className="text-lg sm:text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Global Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkFeatures;
