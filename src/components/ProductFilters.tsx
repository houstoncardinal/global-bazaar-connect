import type { Filters } from "@/pages/Products";
import { COUNTRIES, CATEGORIES } from "@/data/products";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  onReset: () => void;
}

const PRICE_PRESETS = [
  { label: "Under $10", min: 0, max: 10 },
  { label: "$10 – $100", min: 10, max: 100 },
  { label: "$100 – $1,000", min: 100, max: 1000 },
  { label: "$1,000+", min: 1000, max: 100000 },
];

const MOQ_PRESETS = [
  { label: "1 – 10", max: 10 },
  { label: "Up to 100", max: 100 },
  { label: "Up to 1,000", max: 1000 },
  { label: "Up to 10,000", max: 10000 },
  { label: "Any", max: 100000 },
];

const ProductFilters = ({ filters, onChange, onReset }: Props) => {
  const toggleCountry = (country: string) => {
    const next = filters.countries.includes(country)
      ? filters.countries.filter((c) => c !== country)
      : [...filters.countries, country];
    onChange({ ...filters, countries: next });
  };

  const toggleCategory = (cat: string) => {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onChange({ ...filters, categories: next });
  };

  return (
    <div className="space-y-7">
      {/* Category */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Category</h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
              <Checkbox
                checked={filters.categories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Country */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Country</h3>
        <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
          {COUNTRIES.map((c) => (
            <label key={c.code} className="flex items-center gap-2.5 cursor-pointer group">
              <Checkbox
                checked={filters.countries.includes(c.name)}
                onCheckedChange={() => toggleCountry(c.name)}
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {c.flag} {c.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Price Range (USD)</h3>
        <div className="space-y-2">
          {PRICE_PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => onChange({ ...filters, priceMin: p.min, priceMax: p.max })}
              className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                filters.priceMin === p.min && filters.priceMax === p.max
                  ? "bg-secondary/15 text-secondary font-medium"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* MOQ */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Min. Order Qty</h3>
        <div className="space-y-2">
          {MOQ_PRESETS.map((m) => (
            <button
              key={m.label}
              onClick={() => onChange({ ...filters, moqMax: m.max })}
              className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                filters.moqMax === m.max
                  ? "bg-secondary/15 text-secondary font-medium"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={onReset}
        className="w-full h-10 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
      >
        Reset All Filters
      </button>
    </div>
  );
};

export default ProductFilters;
