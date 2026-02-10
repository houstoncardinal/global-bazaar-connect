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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore millions of products across every major industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="group relative p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover border border-border/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-1">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
