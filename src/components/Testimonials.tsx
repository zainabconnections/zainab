import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha",
      location: "Mumbai",
      quote:
        "Zainab Connection changed the way we work from home. The connection never drops!",
      rating: 5,
    },
    {
      name: "Rohit",
      location: "Delhi",
      quote: "Seamless streaming, zero buffering. Highly recommend!",
      rating: 5,
    },
    {
      name: "Fatima",
      location: "Pune",
      quote: "Fast installation and amazing support team!",
      rating: 5,
    },
    {
      name: "Arjun",
      location: "Bangalore",
      quote: "Best internet service I've ever had. Worth every rupee!",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hear From Our Customers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
