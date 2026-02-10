import { Globe } from "lucide-react";

const footerLinks = {
  Platform: ["Browse Products", "Find Suppliers", "Post Request", "Trade Shows"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Trust & Safety", "Dispute Resolution", "Contact"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
};

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

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/40 hover:text-secondary transition-colors">
                      {link}
                    </a>
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
