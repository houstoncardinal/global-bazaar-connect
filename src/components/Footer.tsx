import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Browse Collection", to: "/products" },
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
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-sm bg-cardinal-gradient flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-sm leading-none">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-display font-semibold tracking-luxe uppercase leading-tight">
                  Cardinal
                </span>
                <span className="text-[9px] tracking-luxe-wide uppercase text-primary-foreground/40 leading-tight">
                  Merchant
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/35 leading-relaxed">
              A curated marketplace for global trade. Connect, negotiate, and trade with anyone, anywhere.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] font-medium tracking-luxe-wide uppercase text-primary-foreground/50 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-primary-foreground/30 hover:text-secondary transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="luxury-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/20">
            © 2026 CardinalMerchant. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/20">
            <span>190+ Countries</span>
            <span>·</span>
            <span>24/7 Concierge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
