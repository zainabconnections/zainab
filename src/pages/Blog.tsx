import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "How Fiber Internet Is Changing Homes",
      excerpt:
        "Discover how fiber-optic technology is revolutionizing home connectivity and enabling new possibilities for remote work, entertainment, and smart home technology.",
      category: "Technology",
      slug: "fiber-internet-homes",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      featured: true,
    },
    {
      title: "Tips for Faster Wi-Fi",
      excerpt:
        "Learn practical tips to optimize your Wi-Fi network for better speed, coverage, and reliability throughout your home or office.",
      category: "Tips & Tricks",
      slug: "faster-wifi-tips",
      date: "March 10, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80",
      featured: false,
    },
    {
      title: "The Future of Broadband in India",
      excerpt:
        "Explore what's next for internet infrastructure across India as we move toward universal high-speed connectivity.",
      category: "Industry Insights",
      slug: "future-broadband-india",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      featured: false,
    },
    {
      title: "How to Choose the Right Plan",
      excerpt:
        "A comprehensive guide to selecting the perfect internet plan based on your usage patterns, household size, and budget.",
      category: "Guide",
      slug: "choose-right-plan",
      date: "February 28, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      featured: false,
    },
    {
      title: "Importance of Reliable ISP for Business",
      excerpt:
        "Why your business needs a dependable internet service provider and what to look for when choosing one.",
      category: "Business",
      slug: "reliable-isp-business",
      date: "February 20, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      featured: false,
    },
    {
      title: "Why Upload Speed Matters",
      excerpt:
        "Understanding the importance of upload speeds in modern connectivity, especially for video calls, cloud storage, and content creation.",
      category: "Education",
      slug: "upload-speed-matters",
      date: "February 15, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      featured: false,
    },
  ];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Latest Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Stories & Insights</span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                From Our Experts
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Discover tips, trends, and technology shaping the future of connectivity
            </p>
          </div>

          {/* Featured Post - Large Card */}
          {featuredPost && (
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="block mb-20 animate-slide-up group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all hover-lift">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold">
                        ⭐ FEATURED
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-6 w-fit">
                      {featuredPost.category}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-gray-500 text-sm mb-8">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-purple-400 font-semibold group-hover:gap-5 transition-all">
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Regular Posts - Masonry Style Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all hover-lift h-full flex flex-col">
                  {/* Image with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    {/* Category Badge on Image */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 rounded-full bg-purple-500/80 backdrop-blur-sm text-white text-xs font-semibold">
                        {post.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-32 max-w-4xl mx-auto animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-500/30 p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated with Our Newsletter
                </h3>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get the latest insights, tips, and updates delivered straight to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-4 rounded-xl bg-black/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 w-full sm:w-96"
                  />
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all whitespace-nowrap">
                    Subscribe Now
                  </button>
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

export default Blog;
