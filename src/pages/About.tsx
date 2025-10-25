import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Rocket, Heart, TrendingUp, Globe, Users2 } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2020", event: "Founded", desc: "Started with a vision to connect India" },
    { year: "2021", event: "1K Users", desc: "Reached our first thousand happy customers" },
    { year: "2023", event: "50 Cities", desc: "Expanded across major Indian cities" },
    { year: "2025", event: "100K+", desc: "Serving over 100,000 connections nationwide" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero with Diagonal Split Design */}
        <div className="container mx-auto px-6 mb-32">
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text Content */}
              <div className="animate-slide-in-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-300">About Our Journey</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block text-white">Connecting</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Dreams to Reality
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  We're not just an ISP—we're your gateway to unlimited possibilities. 
                  Every connection we make is a bridge to opportunity, education, and growth.
                </p>
              </div>

              {/* Right - Stats Cards Floating */}
              <div className="relative h-[400px] animate-slide-in-right">
                <div className="absolute top-0 right-0 w-64 p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 animate-float">
                  <div className="text-5xl font-bold text-white mb-2">100K+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
                <div className="absolute top-32 right-20 w-56 p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime SLA</div>
                </div>
                <div className="absolute bottom-0 right-12 w-60 p-6 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Cities Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Cards - Bento Grid Style */}
        <div className="container mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Large Card */}
            <div className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-10 border border-purple-500/20 hover-lift animate-slide-up">
              <Rocket className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize high-speed internet across India, ensuring that every home, 
                business, and individual has access to world-class connectivity. We believe 
                the internet is not a luxury—it's a fundamental right that opens doors to 
                education, opportunities, and global connections.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Through cutting-edge fiber-optic technology and AI-powered network management, 
                we're building the infrastructure of tomorrow, today.
              </p>
            </div>

            {/* Small Card 1 */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-3xl p-8 border border-blue-500/20 hover-lift animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Heart className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Customer Love</h3>
              <p className="text-gray-400">
                Every decision starts with asking: "How does this benefit our customers?"
              </p>
            </div>

            {/* Small Card 2 */}
            <div className="md:col-span-2 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-3xl p-8 border border-cyan-500/20 hover-lift animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <TrendingUp className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-400">
                Constantly pushing boundaries with AI and next-gen infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline - Horizontal Scroll */}
        <div className="container mx-auto px-6 mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-slide-up">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 -translate-y-1/2 opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover-lift">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/50">
                      {index + 1}
                    </div>
                    <div className="mt-6 text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-xl font-semibold text-white mb-2">{milestone.event}</div>
                      <div className="text-sm text-gray-400">{milestone.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Values - Circular Layout */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powered by <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/10 to-purple-600/5 border border-purple-500/20 p-8 hover-lift animate-slide-up">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
              <Globe className="w-12 h-12 text-purple-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Accessibility</h3>
              <p className="text-gray-400 relative z-10">Making premium internet accessible to every corner of India</p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-500/20 p-8 hover-lift animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
              <Sparkles className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Excellence</h3>
              <p className="text-gray-400 relative z-10">Never compromising on quality, from installation to support</p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600/10 to-cyan-600/5 border border-cyan-500/20 p-8 hover-lift animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
              <Users2 className="w-12 h-12 text-cyan-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Community</h3>
              <p className="text-gray-400 relative z-10">Building connections that bring people and possibilities together</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
