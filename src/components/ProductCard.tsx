import { Star, ShieldCheck, MapPin, Package } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const formatPrice = (p: Product["price"]) => {
    if (p.min === p.max) return `$${p.min.toLocaleString()}`;
    return `$${p.min.toLocaleString()} – $${p.max.toLocaleString()}`;
  };

  return (
    <div className="group rounded-2xl bg-card shadow-card hover:shadow-card-hover border border-border/50 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.verified && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-card/90 backdrop-blur-sm px-2.5 py-1">
            <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-medium text-secondary">Verified</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-1.5">{product.category}</p>
        <h3 className="font-semibold text-card-foreground leading-snug mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
          {product.name}
        </h3>

        <p className="text-lg font-bold text-foreground mb-3">
          {formatPrice(product.price)}
          <span className="text-xs font-normal text-muted-foreground ml-1">/ unit</span>
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{product.flag} {product.country}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            <span className="font-medium text-card-foreground">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
          <Package className="w-3.5 h-3.5" />
          <span>MOQ: {product.moq.toLocaleString()} units</span>
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          by <span className="font-medium text-foreground">{product.supplier}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
