import { Package, Cpu, Wheat, Factory, Gem, Shirt, Pill, Car } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Cpu, count: "125K+ products" },
  { name: "Textiles & Apparel", icon: Shirt, count: "98K+ products" },
  { name: "Agriculture", icon: Wheat, count: "67K+ products" },
  { name: "Industrial Machinery", icon: Factory, count: "45K+ products" },
  { name: "Raw Materials", icon: Gem, count: "34K+ products" },
  { name: "Pharmaceuticals", icon: Pill, count: "28K+ products" },
  { name: "Automotive Parts", icon: Car, count: "52K+ products" },
  { name: "Consumer Goods", icon: Package, count: "89K+ products" },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-secondary" />
            <span className="text-xs tracking-luxe-wide uppercase text-secondary font-medium">Categories</span>
            <div className="w-8 h-px bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore millions of products across every major industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="group relative p-7 bg-card shadow-card hover:shadow-card-hover border border-border/50 cursor-pointer transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="w-11 h-11 rounded-sm bg-secondary/8 flex items-center justify-center mb-5 group-hover:bg-secondary/15 transition-colors duration-300">
                <cat.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-card-foreground mb-1">{cat.name}</h3>
              <p className="text-xs text-muted-foreground tracking-wide">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
