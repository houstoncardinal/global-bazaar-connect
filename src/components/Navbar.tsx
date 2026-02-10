import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
            <Globe className="w-5 h-5 text-secondary-foreground" />
          </div>
          <span className="text-xl font-bold font-display text-foreground">
            Globe<span className="text-secondary">Trade</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Products</Link>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Suppliers</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm font-medium text-foreground hover:text-secondary transition-colors">
            Sign In
          </button>
          <button className="h-10 px-5 rounded-lg bg-gold-gradient text-secondary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
