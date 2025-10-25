import Hero from "@/components/Hero";
import NetworkFeatures from "@/components/NetworkFeatures";
import ServiceHighlights from "@/components/ServiceHighlights";
import MobileAppSection from "@/components/MobileAppSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BlogGrid from "@/components/BlogGrid";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <NetworkFeatures />
      <ServiceHighlights />
      <MobileAppSection />
      <UseCasesSection />
      <TechnologySection />
      <FeaturesShowcase />
      <AboutSection />
      <Testimonials />
      <Pricing />
      <BlogGrid />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
