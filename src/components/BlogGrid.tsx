import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogGrid = () => {
  const posts = [
    {
      title: "How Fiber Internet Is Changing Homes",
      excerpt: "Discover how fiber-optic technology is revolutionizing home connectivity...",
      category: "Technology",
      slug: "fiber-internet-homes",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    },
    {
      title: "Tips for Faster Wi-Fi",
      excerpt: "Learn practical tips to optimize your Wi-Fi network for better speed...",
      category: "Tips & Tricks",
      slug: "faster-wifi-tips",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80",
    },
    {
      title: "The Future of Broadband in India",
      excerpt: "Explore what's next for internet infrastructure across India...",
      category: "Industry Insights",
      slug: "future-broadband-india",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      title: "How to Choose the Right Plan",
      excerpt: "A comprehensive guide to selecting the perfect internet plan...",
      category: "Guide",
      slug: "choose-right-plan",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Importance of Reliable ISP for Business",
      excerpt: "Why your business needs a dependable internet service provider...",
      category: "Business",
      slug: "reliable-isp-business",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      title: "Why Upload Speed Matters",
      excerpt: "Understanding the importance of upload speeds in modern connectivity...",
      category: "Education",
      slug: "upload-speed-matters",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore the World of Connectivity
          </h2>
          <p className="text-xl text-muted-foreground">
            Insights, tips, and updates from our experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-black rounded-2xl overflow-hidden hover-lift hover-glow border border-gray-800">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
