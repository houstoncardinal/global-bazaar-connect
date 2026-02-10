import { useState, useMemo } from "react";
import { MOCK_PRODUCTS, COUNTRIES, CATEGORIES, type Product } from "@/data/products";
import ProductFilters from "@/components/ProductFilters";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, SlidersHorizontal, X } from "lucide-react";

export interface Filters {
  search: string;
  countries: string[];
  categories: string[];
  priceMin: number;
  priceMax: number;
  moqMax: number;
}

const defaultFilters: Filters = {
  search: "",
  countries: [],
  categories: [],
  priceMin: 0,
  priceMax: 100000,
  moqMax: 100000,
};

const Products = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return MOCK_PRODUCTS.filter((p) => {
      if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase()) && !p.supplier.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.countries.length && !filters.countries.includes(p.country)) return false;
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;
      if (p.price.min > filters.priceMax || p.price.max < filters.priceMin) return false;
      if (p.moq > filters.moqMax) return false;
      return true;
    });
  }, [filters]);

  const activeFilterCount = [
    filters.countries.length > 0,
    filters.categories.length > 0,
    filters.priceMin > 0,
    filters.priceMax < 100000,
    filters.moqMax < 100000,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="bg-primary">
          <div className="container mx-auto px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Explore Products
            </h1>
            <p className="text-primary-foreground/60 mb-6">
              Browse {MOCK_PRODUCTS.length.toLocaleString()}+ products from verified global suppliers
            </p>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products or suppliers..."
                value={filters.search}
                onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-card text-card-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden mb-4 inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-border text-sm font-medium text-foreground"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex gap-8">
            {/* Sidebar filters */}
            <aside className={`${mobileFiltersOpen ? "fixed inset-0 z-50 bg-background p-6 overflow-auto" : "hidden"} md:block md:relative md:w-64 md:shrink-0`}>
              {mobileFiltersOpen && (
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
              <ProductFilters
                filters={filters}
                onChange={setFilters}
                onReset={() => setFilters(defaultFilters)}
              />
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{filtered.length}</span> products found
                </p>
                {activeFilterCount > 0 && (
                  <button
                    onClick={() => setFilters(defaultFilters)}
                    className="text-sm text-secondary hover:underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {filtered.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-lg font-semibold text-foreground mb-2">No products found</p>
                  <p className="text-muted-foreground">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
