import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Wifi, Building2, Briefcase, Home, Store, Factory, Hospital, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import laptopImg from "@/assets/laptop3.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const logos = [
    { name: "Tech Solutions", icon: Building2 },
    { name: "CloudNet Systems", icon: Globe },
    { name: "Digital Enterprises", icon: Briefcase },
    { name: "Smart Homes", icon: Home },
    { name: "Retail Connect", icon: Store },
    { name: "Manufacturing Hub", icon: Factory },
    { name: "Healthcare Network", icon: Hospital },
    { name: "Fiber Works", icon: Wifi },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-lg shadow-lg shadow-purple-500/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-blue-500/50 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">Zainab Connection</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+18882749152">
                <Button className="gradient-primary hover-glow">+1 (888) 274-9152</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+18882749152" className="block">
                <Button className="w-full gradient-primary">+1 (888) 274-9152</Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-4 pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="animate-slide-in-left pt-20 lg:pt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block">Lightning-Fast</span>
              <span className="block">Internet For Home</span>
              <span className="block text-white">& Business</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              <span className="block">Experience blazing speeds and unmatched reliability.</span>
              <span className="block">Powered by next-gen fiber technology,</span>
              <span className="block">we keep you connected 24/7.</span>
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a href="tel:+18882749152" className="w-full sm:w-auto">
                <Button size="lg" className="gradient-primary hover-glow text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  Call Now: +1 (888) 274-9152
                </Button>
              </a>
              <a href="tel:+18882749152" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 border-2 border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                >
                  Get Connected
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Single Laptop Image */}
          <div className="animate-slide-in-right flex justify-center items-center relative order-first lg:order-last">
            {/* Multiple Gradient Layers - Responsive Sizes */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-blue-200 to-pink-300 opacity-95 blur-2xl sm:blur-3xl" />
            <div className="absolute top-0 left-1/4 w-3/4 h-3/4 bg-purple-400 opacity-80 blur-2xl sm:blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-3/4 h-3/4 bg-blue-300 opacity-75 blur-2xl sm:blur-3xl rounded-full" />
            <div className="absolute top-1/3 right-0 w-1/2 h-2/3 bg-pink-400 opacity-70 blur-2xl sm:blur-3xl rounded-full" />
            
            <img
              src={laptopImg}
              alt="Laptop"
              className="relative w-full max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto scale-100 sm:scale-110 lg:scale-120 z-10"
            />
          </div>
        </div>

        {/* Trusted Partners Section - Responsive */}
        <div className="-mt-16 sm:-mt-20 lg:-mt-24 overflow-hidden relative py-8 sm:py-12">
          <div className="absolute left-0 top-0 w-32 sm:w-64 h-full bg-gradient-to-r from-purple-600/20 to-transparent blur-xl sm:blur-2xl" />
          <div className="relative z-10">
            <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-left px-2 sm:px-0">
              Trusted by hundreds of happy users and growing businesses
            </p>
          <div className="relative">
            <div className="flex animate-infinite-scroll">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`hero-logo-1-${index}`}
                  className="flex items-center opacity-70 hover:opacity-100 transition-all duration-300 mx-4 sm:mx-6 whitespace-nowrap"
                >
                  <logo.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-medium">{logo.name}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`hero-logo-2-${index}`}
                  className="flex items-center opacity-70 hover:opacity-100 transition-all duration-300 mx-4 sm:mx-6 whitespace-nowrap"
                >
                  <logo.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-medium">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
