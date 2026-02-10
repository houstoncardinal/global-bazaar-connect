import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Browse Products", to: "/products" },
      { label: "Find Suppliers", to: "#" },
      { label: "Post Request", to: "#" },
      { label: "Trade Shows", to: "#" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "Compliance Hub", to: "/compliance" },
      { label: "Trade & Export", to: "/compliance/trade" },
      { label: "Tax & Invoicing", to: "/compliance/tax" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", to: "#" },
      { label: "Trust & Safety", to: "#" },
      { label: "Dispute Resolution", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", to: "/compliance/terms" },
      { label: "Privacy Policy", to: "/compliance/privacy" },
      { label: "Cookie Policy", to: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold-gradient flex items-center justify-center">
                <Globe className="w-4 h-4 text-secondary-foreground" />
              </div>
              <span className="text-lg font-bold font-display">
                Globe<span className="text-secondary">Trade</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              The world's marketplace for global trade. Connect, negotiate, and trade with anyone, anywhere.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-primary-foreground/40 hover:text-secondary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © 2026 GlobeTrade. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/30">
            <span>🌍 Available in 190+ countries</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
