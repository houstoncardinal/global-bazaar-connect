import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle2, Globe, ShieldAlert, Ban } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sanctionsRegimes = [
  { authority: "US — OFAC", body: "Office of Foreign Assets Control", scope: "SDN List, country-based programs (Cuba, Iran, North Korea, Syria, Crimea/Donetsk/Luhansk)", url: "https://ofac.treasury.gov" },
  { authority: "EU Sanctions", body: "European Council", scope: "Consolidated sanctions list, sectoral measures, arms embargoes", url: "https://www.sanctionsmap.eu" },
  { authority: "UN Sanctions", body: "UN Security Council", scope: "Country-specific and thematic sanctions, consolidated list", url: "https://www.un.org/securitycouncil/sanctions" },
  { authority: "UK — OFSI", body: "Office of Financial Sanctions Implementation", scope: "UK sanctions list (post-Brexit independent regime)", url: "https://www.gov.uk/government/organisations/office-of-financial-sanctions-implementation" },
];

const restrictedCategories = [
  { category: "Dual-Use Goods", description: "Items with both civilian and military applications (electronics, chemicals, software)", regulation: "EU Dual-Use Regulation (2021/821), US EAR" },
  { category: "Defense Articles", description: "Weapons, military equipment, defense technology", regulation: "US ITAR, EU Common Position 2008/944/CFSP" },
  { category: "Controlled Chemicals", description: "Chemical weapons precursors, certain industrial chemicals", regulation: "Chemical Weapons Convention, Australia Group" },
  { category: "Nuclear Materials", description: "Nuclear-related equipment, materials, and technology", regulation: "Nuclear Suppliers Group guidelines, IAEA safeguards" },
  { category: "Sanctioned Commodities", description: "Oil, minerals, luxury goods to/from sanctioned regions", regulation: "Country-specific sanctions programs" },
  { category: "Endangered Species", description: "Wildlife products, ivory, certain timber species", regulation: "CITES (Convention on International Trade in Endangered Species)" },
];

const complianceSteps = [
  { step: "Screening", description: "All registered users and counterparties are screened against consolidated global sanctions lists before transactions are enabled." },
  { step: "Classification", description: "Products are classified by HS code and checked against dual-use and restricted goods databases." },
  { step: "Country checks", description: "Origin and destination countries are validated against embargo and sanctions programs." },
  { step: "Ongoing monitoring", description: "Continuous re-screening of user base against updated sanctions lists (updated within 24h of publication)." },
  { step: "Record-keeping", description: "All screening results, decisions, and transaction records are retained for minimum 5 years per regulatory requirements." },
];

const TradeCompliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="bg-primary">
          <div className="container mx-auto px-6 py-10">
            <Link to="/compliance" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-secondary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Compliance Hub
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Trade & Export Compliance</h1>
            <p className="text-primary-foreground/60">Sanctions, export controls, and restricted goods policies</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Sanctions Regimes */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-secondary" />
              Sanctions Regimes We Monitor
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sanctionsRegimes.map((s) => (
                <div key={s.authority} className="rounded-xl bg-card shadow-card border border-border/50 p-5">
                  <h3 className="font-semibold text-card-foreground mb-1">{s.authority}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{s.body}</p>
                  <p className="text-sm text-muted-foreground">{s.scope}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Restricted Goods */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Ban className="w-6 h-6 text-secondary" />
              Restricted & Controlled Goods
            </h2>
            <div className="space-y-3">
              {restrictedCategories.map((r) => (
                <div key={r.category} className="rounded-xl bg-card shadow-card border border-border/50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{r.category}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-destructive/10 text-destructive font-medium shrink-0">
                      Restricted
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong className="text-foreground">Governing regulation:</strong> {r.regulation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Our compliance process */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-secondary" />
              Our Compliance Process
            </h2>
            <div className="space-y-4">
              {complianceSteps.map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 text-sm font-bold text-secondary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.step}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Warning */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Important Notice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Violations of trade sanctions and export controls can result in severe criminal and civil penalties. 
                Users are responsible for ensuring their own compliance with applicable laws. GlobeTrade's screening 
                is a supplementary measure and does not substitute for your own due diligence obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TradeCompliance;
