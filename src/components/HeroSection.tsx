import { Search, Globe } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-secondary/5 blur-2xl" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 mb-8 animate-fade-up">
            <Globe className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              190+ Countries · 50K+ Verified Suppliers
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Trade Without{" "}
            <span className="text-gradient-gold">Borders</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Connect with verified importers, exporters, and manufacturers across
            every continent. Buy, sell, and exchange globally — not just from one country.
          </p>

          {/* Search bar */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products, suppliers, or categories..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-card text-card-foreground placeholder:text-muted-foreground shadow-card-hover focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <button className="h-14 px-8 rounded-xl bg-gold-gradient text-secondary-foreground font-semibold text-base hover:opacity-90 transition-opacity shrink-0">
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Electronics", "Textiles", "Agriculture", "Machinery", "Raw Materials"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:border-secondary/50 hover:text-secondary cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "190+", label: "Countries" },
            { value: "50K+", label: "Suppliers" },
            { value: "$2B+", label: "Trade Volume" },
            { value: "1M+", label: "Products" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary animate-count-up">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
