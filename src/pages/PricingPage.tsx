import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Zap, Crown, Rocket, Shield, Wifi, Download, Upload, Users, Phone } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for light users",
      price: "₹599",
      speed: "50 Mbps",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      features: [
        "50 Mbps download speed",
        "Unlimited data",
        "Free installation",
        "Basic WiFi router",
        "Email support",
        "1 device connection",
      ],
      popular: false,
    },
    {
      name: "Pro",
      tagline: "Best for families",
      price: "₹999",
      speed: "200 Mbps",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      features: [
        "200 Mbps download speed",
        "Unlimited data",
        "Free installation",
        "Premium WiFi 6 router",
        "24/7 priority support",
        "Up to 10 devices",
        "Free OTT subscription",
        "Static IP (optional)",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      tagline: "Power for businesses",
      price: "₹2,499",
      speed: "1 Gbps",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      features: [
        "1 Gbps dedicated line",
        "Unlimited data",
        "Professional installation",
        "Enterprise mesh system",
        "Dedicated account manager",
        "Unlimited devices",
        "99.9% uptime SLA",
        "Static IP included",
        "Network monitoring",
      ],
      popular: false,
    },
  ];

  const addons = [
    { name: "Static IP Address", price: "₹199/month", icon: Shield },
    { name: "Additional WiFi Router", price: "₹499 one-time", icon: Wifi },
    { name: "Priority Support Upgrade", price: "₹299/month", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <div className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Choose Your</span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              No hidden charges. No contracts. Switch or cancel anytime.
            </p>
          </div>
        </div>

        {/* Pricing Cards - Modern Comparison */}
        <div className="container mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-gradient-to-b from-purple-900/30 to-black scale-105 lg:-mt-8 lg:mb-8' 
                    : 'border-gray-800 bg-gradient-to-b from-gray-900 to-black'
                } p-8 hover-lift animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold shadow-lg shadow-purple-500/50">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${plan.color} bg-opacity-10 border border-purple-500/20`}>
                    <Download className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-white">{plan.speed}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href="tel:+18882749152">
                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                        : 'bg-white/5 text-white border border-gray-700 hover:bg-white/10'
                    }`}
                  >
                    Call: +1 (888) 274-9152
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Speed Comparison Visualization */}
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-12 animate-slide-up">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Speed <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Comparison</span>
            </h3>
            <div className="space-y-6">
              {plans.map((plan) => (
                <div key={plan.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{plan.name}</span>
                    <span className="text-gray-400">{plan.speed}</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${plan.color} rounded-full transition-all duration-1000`}
                      style={{
                        width: plan.name === "Starter" ? "25%" : plan.name === "Pro" ? "60%" : "100%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="container mx-auto px-6 mb-32">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Optional <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Add-ons</span>
            </h2>
            <p className="text-xl text-gray-400">Enhance your connection with these extras</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <div
                key={addon.name}
                className="rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{addon.name}</h4>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {addon.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12 animate-slide-up">
              Questions? <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">We've Got Answers</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 hover-lift animate-slide-up">
                <h3 className="text-xl font-bold text-white mb-3">Is installation really free?</h3>
                <p className="text-gray-400">
                  Yes! We provide completely free installation for all plans. Our expert technicians 
                  handle everything from cable laying to router setup.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 hover-lift animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-bold text-white mb-3">Can I upgrade anytime?</h3>
                <p className="text-gray-400">
                  Absolutely! Upgrade or downgrade your plan anytime without any penalties. 
                  Changes take effect from the next billing cycle.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 hover-lift animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-bold text-white mb-3">What's the contract length?</h3>
                <p className="text-gray-400">
                  No long-term contracts! All our plans are month-to-month. Stay as long as 
                  you love our service, leave whenever you want.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 hover-lift animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-xl font-bold text-white mb-3">Is there a data cap?</h3>
                <p className="text-gray-400">
                  Never! All our plans come with truly unlimited data. Stream, game, and 
                  download as much as you want without any throttling.
                </p>
              </div>
            </div>

            {/* Money-back Guarantee Badge */}
            <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-500/30 animate-slide-up">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">30-Day Money-Back Guarantee</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Try our service risk-free! If you're not completely satisfied within the first 30 days, 
                we'll refund your money—no questions asked.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
