import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, Building2, Wifi, Shield, Zap, Headphones, Server, CloudCog, Radio, Settings } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero with Animated Background */}
        <div className="container mx-auto px-6 mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl"></div>
          <div className="relative text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Premium Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Solutions Built for</span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Every Connection Need
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From homes to enterprises, we deliver tailored connectivity solutions 
              that power your digital lifestyle and business operations.
            </p>
          </div>
        </div>

        {/* Main Services - Asymmetric Grid */}
        <div className="container mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Large Featured Card - Residential */}
            <div className="lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/30 p-10 hover-lift animate-slide-in-left">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-8 shadow-lg shadow-purple-500/50">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">Residential Internet</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Transform your home into a digital powerhouse. Stream 4K content, game 
                  without lag, and work remotely with confidence. Our fiber-optic network 
                  delivers consistent speeds that the whole family can enjoy simultaneously.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Up to 1 Gbps Speed</div>
                      <div className="text-sm text-gray-400">Lightning-fast downloads and uploads</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Unlimited Data</div>
                      <div className="text-sm text-gray-400">No caps, no throttling, ever</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Wifi className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Free Premium Router</div>
                      <div className="text-sm text-gray-400">WiFi 6 enabled for better coverage</div>
                    </div>
                  </div>
                </div>

                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  Explore Plans →
                </button>
              </div>
            </div>

            {/* Business Solutions */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/30 p-8 hover-lift animate-slide-in-right">
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Business Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Enterprise-grade connectivity with dedicated bandwidth, static IPs, and 99.9% uptime SLA. 
                  Keep your operations running smoothly 24/7.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">Dedicated Line</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">Static IP</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">Priority Support</span>
                </div>
              </div>
            </div>

            {/* WiFi Installation */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 border border-cyan-500/30 p-8 hover-lift animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">WiFi Optimization</h3>
                <p className="text-gray-300 mb-6">
                  Professional network setup and coverage optimization. We ensure every corner 
                  of your space gets strong, secure WiFi signal.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Mesh Networks</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Site Survey</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Security Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services - Icon Grid */}
        <div className="container mx-auto px-6 mb-32">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Connectivity Suite</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need for seamless internet experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 hover-lift animate-slide-up">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                <Server className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Cloud Backup</h4>
              <p className="text-gray-400 text-sm">Secure cloud storage for your important data</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 hover-lift animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <Headphones className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">24/7 Support</h4>
              <p className="text-gray-400 text-sm">Round-the-clock technical assistance</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 hover-lift animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
                <CloudCog className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Smart Management</h4>
              <p className="text-gray-400 text-sm">AI-powered network optimization</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 hover-lift animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                <Settings className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Custom Solutions</h4>
              <p className="text-gray-400 text-sm">Tailored packages for unique needs</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Split Design */}
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-500/20 overflow-hidden animate-slide-up">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Businesses Trust Us
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">99.9% Uptime Guarantee</h4>
                      <p className="text-gray-400">Redundant infrastructure ensures your business never goes offline</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Instant Provisioning</h4>
                      <p className="text-gray-400">Get connected within 24-48 hours of approval</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Dedicated Support Team</h4>
                      <p className="text-gray-400">Priority response with a dedicated account manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-12 lg:p-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">5000+</div>
                  <div className="text-2xl font-semibold text-white mb-2">Happy Businesses</div>
                  <div className="text-gray-400">Trust our enterprise solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
