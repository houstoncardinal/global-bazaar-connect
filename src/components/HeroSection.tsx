import { Search } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with dark luxury overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      {/* Thin decorative line */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-10 animate-fade-up">
            <div className="w-8 h-px bg-secondary" />
            <span className="text-xs font-medium tracking-luxe-wide uppercase text-secondary">
              190+ Countries · Curated Suppliers
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.05] mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Trade Without{" "}
            <span className="italic text-secondary">Limits</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/50 max-w-lg mb-14 leading-relaxed animate-fade-up font-light" style={{ animationDelay: "0.3s" }}>
            Connect with verified importers, exporters, and manufacturers across
            every continent. A curated marketplace for discerning merchants.
          </p>

          {/* Search bar */}
          <div className="animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products, suppliers..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-14 pl-11 pr-4 rounded-sm bg-card/95 text-card-foreground placeholder:text-muted-foreground shadow-card-hover focus:outline-none focus:ring-1 focus:ring-secondary/50 text-sm backdrop-blur-sm border border-border/30"
                />
              </div>
              <button className="h-14 px-10 rounded-sm bg-cardinal-gradient text-secondary-foreground font-medium text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shrink-0">
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Electronics", "Textiles", "Agriculture", "Machinery", "Raw Materials"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-4 py-1.5 tracking-wider uppercase border border-primary-foreground/10 text-primary-foreground/40 hover:border-secondary/40 hover:text-secondary cursor-pointer transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 max-w-3xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {[
            { value: "190+", label: "Countries" },
            { value: "50K+", label: "Suppliers" },
            { value: "$2B+", label: "Trade Volume" },
            { value: "1M+", label: "Products" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent animate-count-up">
                {stat.value}
              </div>
              <div className="text-[11px] tracking-luxe-wide uppercase text-primary-foreground/30 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
