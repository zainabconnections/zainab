import { Link } from "react-router-dom";
import { Wifi, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const links = {
    company: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
    ],
    resources: [
      { name: "Pricing", path: "/pricing" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Refund Policy", path: "/refund-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, url: "#", name: "LinkedIn" },
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Facebook, url: "#", name: "Facebook" },
    { icon: Twitter, url: "#", name: "Twitter" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center glow-blue group-hover:glow-purple transition-all duration-300">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Zainab Connection</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering digital lives with speed and reliability.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="font-semibold text-foreground">Stay Connected</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background border-border"
                />
                <Button className="gradient-primary hover-glow">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Zainab Connection. All Rights Reserved. Created by Hype Marketing.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover-lift"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
