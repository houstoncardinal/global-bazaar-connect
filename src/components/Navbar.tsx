import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-sm bg-cardinal-gradient flex items-center justify-center">
            <span className="text-secondary-foreground font-display font-bold text-lg leading-none">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-display font-semibold tracking-luxe uppercase text-foreground leading-tight">
              Cardinal
            </span>
            <span className="text-[10px] tracking-luxe-wide uppercase text-muted-foreground leading-tight">
              Merchant
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/products" className="text-[13px] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Collection
          </Link>
          <a href="#" className="text-[13px] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Suppliers
          </a>
          <a href="#" className="text-[13px] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Process
          </a>
          <Link to="/compliance" className="text-[13px] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Compliance
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex text-[13px] font-medium tracking-wider uppercase text-foreground hover:text-secondary transition-colors duration-300">
            Sign In
          </button>
          <button className="h-11 px-7 rounded-sm bg-cardinal-gradient text-secondary-foreground text-[13px] font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity duration-300">
            Apply
          </button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/30 px-6 py-6 space-y-4">
          <Link to="/products" className="block text-sm tracking-wider uppercase text-muted-foreground" onClick={() => setMobileOpen(false)}>Collection</Link>
          <a href="#" className="block text-sm tracking-wider uppercase text-muted-foreground">Suppliers</a>
          <a href="#" className="block text-sm tracking-wider uppercase text-muted-foreground">Process</a>
          <Link to="/compliance" className="block text-sm tracking-wider uppercase text-muted-foreground" onClick={() => setMobileOpen(false)}>Compliance</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
