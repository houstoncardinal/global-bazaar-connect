import { Star, ShieldCheck, MapPin, Package } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const formatPrice = (p: Product["price"]) => {
    if (p.min === p.max) return `$${p.min.toLocaleString()}`;
    return `$${p.min.toLocaleString()} – $${p.max.toLocaleString()}`;
  };

  return (
    <div className="group bg-card shadow-card hover:shadow-card-hover border border-border/50 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {product.verified && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm px-3 py-1 border border-border/30">
            <ShieldCheck className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-medium tracking-wider uppercase text-secondary">Verified</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[10px] tracking-luxe-wide uppercase text-muted-foreground mb-2">{product.category}</p>
        <h3 className="font-display font-semibold text-card-foreground leading-snug mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-xl font-display font-bold text-foreground mb-4">
          {formatPrice(product.price)}
          <span className="text-xs font-body font-normal text-muted-foreground ml-1">/ unit</span>
        </p>

        <div className="luxury-divider mb-4" />

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{product.flag} {product.country}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span className="font-medium text-card-foreground">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
          <Package className="w-3.5 h-3.5" />
          <span>MOQ: {product.moq.toLocaleString()} units</span>
        </div>

        <p className="text-xs text-muted-foreground mt-3">
          by <span className="font-medium text-foreground">{product.supplier}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
