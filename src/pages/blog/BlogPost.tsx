import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts: Record<string, any> = {
    "fiber-internet-homes": {
      title: "How Fiber Internet Is Changing Homes",
      category: "Technology",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80",
      author: "Tech Team",
      content: `
        <p>Fiber-optic internet has revolutionized how we connect our homes to the digital world. Unlike traditional copper cables, fiber uses light to transmit data, offering unprecedented speeds and reliability.</p>
        
        <h2>The Technology Behind Fiber</h2>
        <p>Fiber-optic cables use pulses of light to carry data. This allows for much faster data transmission compared to electrical signals in copper wires. The result is internet speeds that can reach up to 1 Gbps or even higher.</p>
        
        <h2>Benefits for Modern Homes</h2>
        <p>With fiber internet, families can stream 4K videos, participate in video conferences, and download large files simultaneously without experiencing slowdowns. This is especially important as more people work from home and rely on cloud-based services.</p>
        
        <h2>Smart Home Integration</h2>
        <p>Fiber internet provides the backbone for smart home devices. From security cameras to smart thermostats, these devices need reliable, high-speed connectivity to function optimally. Fiber ensures your smart home runs smoothly.</p>
        
        <h2>Future-Proofing Your Home</h2>
        <p>As technology advances and our internet needs grow, fiber-optic infrastructure is ready to handle future demands. Investing in fiber internet today means you won't need to upgrade your connection for years to come.</p>
        
        <p>At Zainab Connection, we're proud to bring this cutting-edge technology to homes across India, enabling families to enjoy the full potential of modern internet connectivity.</p>
      `,
    },
    "faster-wifi-tips": {
      title: "Tips for Faster Wi-Fi",
      category: "Tips & Tricks",
      date: "March 10, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=1200&q=80",
      author: "Network Team",
      content: `
        <p>Getting the most out of your Wi-Fi network doesn't always require expensive upgrades. Here are practical tips to optimize your wireless network for better performance.</p>
        
        <h2>Router Placement Matters</h2>
        <p>Place your router in a central location, elevated off the ground. Avoid corners, closets, and areas near thick walls or metal objects. The more centrally located your router, the better your signal coverage.</p>
        
        <h2>Update Your Firmware</h2>
        <p>Router manufacturers regularly release firmware updates that improve performance and security. Check your router's admin panel regularly for updates and install them promptly.</p>
        
        <h2>Choose the Right Channel</h2>
        <p>Wi-Fi networks can interfere with each other. Use a Wi-Fi analyzer app to find the least congested channel in your area and configure your router accordingly.</p>
        
        <h2>Secure Your Network</h2>
        <p>Use WPA3 encryption (or WPA2 if WPA3 isn't available) and a strong password. This prevents unauthorized users from slowing down your network.</p>
        
        <h2>Consider a Mesh System</h2>
        <p>For larger homes, a mesh Wi-Fi system can provide better coverage than a single router. These systems use multiple access points to create a seamless network throughout your space.</p>
        
        <p>Need help optimizing your Wi-Fi? Our technical support team at Zainab Connection is here to assist!</p>
      `,
    },
    "future-broadband-india": {
      title: "The Future of Broadband in India",
      category: "Industry Insights",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      author: "Research Team",
      content: `
        <p>India's broadband landscape is undergoing a massive transformation. With government initiatives and private sector investments, the country is rapidly expanding its digital infrastructure.</p>
        
        <h2>Government Initiatives</h2>
        <p>The BharatNet project aims to connect all villages with high-speed broadband. This ambitious initiative is bringing fiber-optic connectivity to rural areas, enabling digital services and economic opportunities.</p>
        
        <h2>5G Integration</h2>
        <p>As 5G networks roll out across India, we're seeing new possibilities for fixed wireless broadband. This technology can provide high-speed internet to areas where laying fiber is challenging.</p>
        
        <h2>Growing Demand</h2>
        <p>The pandemic accelerated digital adoption in India. From online education to telemedicine, reliable internet has become essential. This growing demand is driving infrastructure investment across the country.</p>
        
        <h2>Competition and Innovation</h2>
        <p>Increased competition among ISPs is benefiting consumers through better services and competitive pricing. We're seeing innovations in network management, customer service, and value-added services.</p>
        
        <h2>The Road Ahead</h2>
        <p>Experts predict that within the next five years, fiber internet will be available to a majority of Indian households. This will enable new applications in education, healthcare, and business that we're only beginning to imagine.</p>
        
        <p>At Zainab Connection, we're committed to being part of this digital revolution, bringing world-class internet to every corner of India.</p>
      `,
    },
    "choose-right-plan": {
      title: "How to Choose the Right Plan",
      category: "Guide",
      date: "February 28, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      author: "Support Team",
      content: `
        <p>Selecting the right internet plan can be overwhelming with so many options available. Here's a comprehensive guide to help you make an informed decision.</p>
        
        <h2>Assess Your Usage</h2>
        <p>Start by understanding how you use the internet. Are you mainly browsing and checking email? Or do you stream 4K videos and play online games? Your usage pattern determines the speed you need.</p>
        
        <h2>Consider Household Size</h2>
        <p>The more people in your home, the more bandwidth you'll need. A single person might be fine with 50 Mbps, but a family of five would benefit from 100 Mbps or higher.</p>
        
        <h2>Speed Requirements by Activity</h2>
        <ul>
          <li>Browsing & Email: 10-25 Mbps</li>
          <li>HD Streaming: 5-10 Mbps per stream</li>
          <li>4K Streaming: 25 Mbps per stream</li>
          <li>Online Gaming: 3-6 Mbps</li>
          <li>Video Conferencing: 1-4 Mbps</li>
          <li>Large File Downloads: 50+ Mbps</li>
        </ul>
        
        <h2>Budget Considerations</h2>
        <p>While it's tempting to get the fastest plan, consider your actual needs versus cost. Our Basic Plan is perfect for light users, while power users will appreciate the Elite Plan's capabilities.</p>
        
        <h2>Future-Proofing</h2>
        <p>Think about how your needs might change. If you're planning to add smart home devices or more family members will be using the connection, it might be worth getting a higher-tier plan now.</p>
        
        <p>Not sure which plan is right for you? Contact our team at Zainab Connection for personalized recommendations!</p>
      `,
    },
    "reliable-isp-business": {
      title: "Importance of Reliable ISP for Business",
      category: "Business",
      date: "February 20, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      author: "Business Team",
      content: `
        <p>For modern businesses, internet connectivity isn't just a convenience—it's a critical infrastructure component. Here's why choosing a reliable ISP is one of the most important decisions for your business.</p>
        
        <h2>Downtime Costs Money</h2>
        <p>Every minute of internet downtime can cost your business revenue and productivity. Studies show that the average cost of downtime for small businesses is $427 per minute. A reliable ISP minimizes these risks.</p>
        
        <h2>Customer Experience</h2>
        <p>If your business depends on online transactions, customer support, or e-commerce, your internet connection directly impacts customer satisfaction. Slow or unreliable connectivity can drive customers away.</p>
        
        <h2>Cloud Services</h2>
        <p>Most businesses now rely on cloud-based applications for operations. From CRM systems to file storage, these services need consistent, high-speed connectivity to function effectively.</p>
        
        <h2>Remote Work Support</h2>
        <p>With hybrid and remote work becoming standard, your business internet needs to support video conferencing, VPNs, and remote access to company resources reliably.</p>
        
        <h2>What to Look for in a Business ISP</h2>
        <ul>
          <li>SLA guarantees with uptime commitments</li>
          <li>Priority support with rapid response times</li>
          <li>Dedicated bandwidth options</li>
          <li>Static IP addresses for servers</li>
          <li>Scalability for growth</li>
        </ul>
        
        <h2>Security Considerations</h2>
        <p>A reliable ISP should offer security features like DDoS protection and help you implement best practices for network security.</p>
        
        <p>Zainab Connection offers specialized business plans with dedicated support, SLA guarantees, and the reliability your business demands. Contact us to learn more!</p>
      `,
    },
    "upload-speed-matters": {
      title: "Why Upload Speed Matters",
      category: "Education",
      date: "February 15, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
      author: "Education Team",
      content: `
        <p>When shopping for internet, most people focus on download speed. However, upload speed is equally important for many modern internet activities. Here's why.</p>
        
        <h2>Understanding Upload Speed</h2>
        <p>Upload speed measures how fast you can send data from your device to the internet. While downloading is receiving data, uploading is sending it. Both are measured in Mbps (megabits per second).</p>
        
        <h2>Video Conferencing</h2>
        <p>Video calls require good upload speeds to send your video and audio clearly. For HD video calls, you need at least 3-4 Mbps upload speed. Multiple simultaneous calls require even more.</p>
        
        <h2>Cloud Storage</h2>
        <p>Backing up files to cloud services like Google Drive or Dropbox depends on upload speed. With slow uploads, backing up large files or photo libraries can take hours or even days.</p>
        
        <h2>Content Creation</h2>
        <p>If you create and share videos, photos, or other content online, upload speed determines how quickly you can share your work. For YouTubers and content creators, high upload speeds are essential.</p>
        
        <h2>Online Gaming</h2>
        <p>While gaming doesn't require huge upload speeds, consistent upload performance is crucial for low latency and smooth gameplay, especially in competitive games.</p>
        
        <h2>Remote Work</h2>
        <p>Sending large files to colleagues, participating in video meetings, and accessing remote systems all depend on good upload speeds.</p>
        
        <h2>Fiber Advantage</h2>
        <p>Traditional internet technologies often have asymmetric speeds (much faster downloads than uploads). Fiber internet typically offers symmetrical or near-symmetrical speeds, giving you excellent upload performance.</p>
        
        <p>All Zainab Connection plans include generous upload speeds to ensure you can do everything you need online. Check out our plans to find the right fit!</p>
      `,
    },
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button className="gradient-primary">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Hero Section with Full-Width Image */}
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          
          {/* Back Button */}
          <div className="absolute top-8 left-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/50 backdrop-blur-sm border border-gray-700 text-white hover:bg-black/70 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>

          {/* Title and Meta Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto max-w-5xl">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold mb-6">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-semibold">{post.author}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-6 -mt-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mb-12">
              <button className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition-all">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition-all">
                <Bookmark className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content with Magazine Layout */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 md:p-12 lg:p-16 mb-12">
              {/* Drop Cap First Letter */}
              <style>{`
                .blog-content p:first-of-type::first-letter {
                  font-size: 4rem;
                  font-weight: bold;
                  line-height: 1;
                  float: left;
                  margin-right: 0.5rem;
                  margin-top: 0.2rem;
                  background: linear-gradient(135deg, #a855f7, #3b82f6);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }
                
                .blog-content h2 {
                  font-size: 2rem;
                  font-weight: bold;
                  color: white;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                  background: linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }
                
                .blog-content p {
                  font-size: 1.125rem;
                  line-height: 1.8;
                  color: #d1d5db;
                  margin-bottom: 1.5rem;
                }
                
                .blog-content ul {
                  list-style: none;
                  padding-left: 0;
                  margin: 1.5rem 0;
                }
                
                .blog-content ul li {
                  font-size: 1.125rem;
                  line-height: 1.8;
                  color: #d1d5db;
                  margin-bottom: 0.75rem;
                  padding-left: 2rem;
                  position: relative;
                }
                
                .blog-content ul li::before {
                  content: "→";
                  position: absolute;
                  left: 0;
                  color: #a855f7;
                  font-weight: bold;
                  font-size: 1.25rem;
                }
                
                .blog-content strong {
                  color: white;
                  font-weight: 600;
                }
              `}</style>
              
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Author CTA Card */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-500/30 p-10 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Written by {post.author}</h3>
                  <p className="text-gray-400 mb-4">
                    Expert insights from the Zainab Connection team, bringing you the latest in connectivity technology and tips.
                  </p>
                  <Link to="/contact">
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Articles CTA */}
            <div className="text-center rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Explore More <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Discover more articles about connectivity, technology, and how to get the most from your internet service.
              </p>
              <Link to="/blog">
                <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50">
                  View All Articles →
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
