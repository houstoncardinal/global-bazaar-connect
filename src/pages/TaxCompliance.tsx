import { Link } from "react-router-dom";
import { ArrowLeft, Receipt, AlertTriangle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const taxRegions = [
  {
    region: "🇪🇺 European Union",
    type: "VAT",
    rate: "Standard rates: 17% (Luxembourg) to 27% (Hungary)",
    details: [
      "OSS (One-Stop Shop) for cross-border B2C sales within the EU",
      "Reverse charge mechanism for B2B intra-EU transactions",
      "Import VAT applies on goods entering the EU (IOSS for consignments ≤€150)",
      "Intrastat/EC Sales List reporting for intra-EU trade above thresholds",
      "Electronic invoicing increasingly required (mandatory in Italy, France from 2026)",
    ],
  },
  {
    region: "🇬🇧 United Kingdom",
    type: "VAT",
    rate: "Standard: 20%, Reduced: 5%, Zero: 0%",
    details: [
      "Post-Brexit: Separate VAT regime from the EU",
      "Low-value import relief removed — VAT on all imports",
      "Making Tax Digital (MTD) — digital VAT records and returns required",
      "Postponed VAT accounting available for imports",
    ],
  },
  {
    region: "🇺🇸 United States",
    type: "Sales Tax",
    rate: "Varies: 0% (Oregon, Montana) to 10%+ (combined state + local)",
    details: [
      "No federal sales tax — state-level nexus rules apply",
      "Economic nexus post-Wayfair (typically $100K revenue or 200 transactions)",
      "Marketplace facilitator laws in 45+ states",
      "Use tax obligations for out-of-state purchases",
      "No standard invoice format — varies by state",
    ],
  },
  {
    region: "🇮🇳 India",
    type: "GST",
    rate: "Slabs: 0%, 5%, 12%, 18%, 28%",
    details: [
      "CGST + SGST (intra-state) or IGST (inter-state)",
      "HSN codes mandatory for goods classification",
      "E-invoicing mandatory for businesses above ₹5 crore turnover",
      "E-way bills for goods transport above ₹50,000",
      "GST registration required above ₹40 lakh threshold (₹20 lakh for services)",
    ],
  },
  {
    region: "🇧🇷 Brazil",
    type: "ICMS / IPI / ISS",
    rate: "ICMS: 7-18% (varies by state), IPI: varies by product",
    details: [
      "Complex multi-layered tax system (federal, state, municipal)",
      "Nota Fiscal Eletrônica (NF-e) mandatory for all commercial transactions",
      "ICMS-ST (tax substitution) for certain product categories",
      "Import taxes: II (Import Tax) + IPI + PIS/COFINS + ICMS",
      "Tax reform underway — CBS and IBS to replace current indirect taxes",
    ],
  },
  {
    region: "🌏 Southeast Asia",
    type: "GST/VAT",
    rate: "Singapore: 9%, Thailand: 7%, Indonesia: 11%, Philippines: 12%",
    details: [
      "Digital services taxes expanding rapidly (Singapore, Indonesia, Thailand)",
      "Withholding taxes on cross-border payments common",
      "Free trade zones in many countries with reduced/zero duty",
      "ASEAN trade agreements provide preferential tariff rates",
      "E-invoicing mandates emerging (Philippines, Indonesia)",
    ],
  },
  {
    region: "🌍 Africa (Key Markets)",
    type: "VAT",
    rate: "South Africa: 15%, Kenya: 16%, Nigeria: 7.5%, Morocco: 20%",
    details: [
      "Customs unions (SACU, EAC, ECOWAS) provide preferential treatment",
      "AfCFTA aims to reduce tariffs for intra-Africa trade",
      "Digital services taxes emerging (Kenya, Nigeria)",
      "Import permits required for many product categories",
      "Varying e-invoicing adoption (South Africa mandating SARS e-filing)",
    ],
  },
];

const invoiceRequirements = [
  "Seller and buyer name, address, and tax identification number",
  "Invoice number (unique, sequential) and date of issue",
  "Description of goods/services with quantities and unit prices",
  "Applicable tax rate(s) and tax amount",
  "Total amount including and excluding tax",
  "Currency of the transaction",
  "Payment terms and method",
  "HS/tariff codes for cross-border goods (recommended)",
];

const TaxCompliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="bg-primary">
          <div className="container mx-auto px-6 py-10">
            <Link to="/compliance" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-secondary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Compliance Hub
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Tax & Invoicing</h1>
            <p className="text-primary-foreground/60">VAT/GST obligations, cross-border tax, and invoice requirements by region</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Tax by region */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Receipt className="w-6 h-6 text-secondary" />
              Tax Requirements by Region
            </h2>
            <div className="space-y-5">
              {taxRegions.map((r) => (
                <div key={r.region} className="rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden">
                  <div className="p-5 border-b border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg font-semibold text-card-foreground">{r.region}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium">{r.type}</span>
                      <span className="text-sm text-muted-foreground">{r.rate}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {r.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Invoice requirements */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">Standard Invoice Requirements</h2>
            <p className="text-muted-foreground mb-4">
              While specific requirements vary by jurisdiction, most countries require invoices to include:
            </p>
            <div className="rounded-2xl bg-card shadow-card border border-border/50 p-6">
              <ul className="space-y-2.5">
                {invoiceRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Tax Advice Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tax obligations depend on your specific business structure, transaction types, and jurisdictions involved. 
                This page provides general guidance only. Always consult a qualified tax advisor for your specific situation. 
                CardinalMerchant does not provide tax advice and is not responsible for users' tax compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TaxCompliance;
