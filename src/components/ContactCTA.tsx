import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Make Your First Connection the Right One
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Reach out to learn how Zainab Connection can upgrade your online experience.
          </p>
          <a href="tel:+18882749152">
            <Button size="lg" className="gradient-primary hover-glow text-lg px-12 py-6">
              Call Now: +1 (888) 274-9152
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
