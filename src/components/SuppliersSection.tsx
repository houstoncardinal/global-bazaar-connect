import { Star, ShieldCheck, MapPin } from "lucide-react";

const suppliers = [
  { name: "TechVision GmbH", country: "Germany", flag: "🇩🇪", category: "Electronics", rating: 4.9, verified: true, years: 12 },
  { name: "São Paulo Textiles", country: "Brazil", flag: "🇧🇷", category: "Textiles", rating: 4.8, verified: true, years: 8 },
  { name: "KenyaFresh Exports", country: "Kenya", flag: "🇰🇪", category: "Agriculture", rating: 4.7, verified: true, years: 6 },
  { name: "Osaka Precision Co.", country: "Japan", flag: "🇯🇵", category: "Machinery", rating: 5.0, verified: true, years: 20 },
  { name: "Atlas Minerals", country: "Morocco", flag: "🇲🇦", category: "Raw Materials", rating: 4.6, verified: true, years: 10 },
  { name: "IndoMetal Works", country: "Indonesia", flag: "🇮🇩", category: "Industrial", rating: 4.8, verified: true, years: 15 },
];

const SuppliersSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <span className="text-xs tracking-luxe-wide uppercase text-secondary font-medium">Partners</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
              Featured Suppliers
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Verified partners from every corner of the globe
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-sm tracking-wider uppercase text-secondary font-medium hover:opacity-70 transition-opacity">
            View all →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {suppliers.map((s, i) => (
            <div
              key={s.name}
              className="group p-7 bg-card shadow-card hover:shadow-card-hover border border-border/50 cursor-pointer transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-display font-semibold text-lg text-card-foreground group-hover:text-secondary transition-colors duration-300">
                    {s.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{s.flag} {s.country}</span>
                  </div>
                </div>
                {s.verified && (
                  <div className="flex items-center gap-1.5 px-3 py-1 border border-secondary/20 bg-secondary/5">
                    <ShieldCheck className="w-3 h-3 text-secondary" />
                    <span className="text-[10px] font-medium tracking-wider uppercase text-secondary">Verified</span>
                  </div>
                )}
              </div>

              <div className="luxury-divider mb-5" />

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{s.category} · {s.years} yrs</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                  <span className="font-semibold text-card-foreground">{s.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuppliersSection;
