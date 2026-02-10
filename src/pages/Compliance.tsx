import { Shield, FileText, Globe, Receipt, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const complianceAreas = [
  {
    icon: Shield,
    title: "Data Privacy",
    description: "GDPR, CCPA, LGPD, POPIA, and global data protection frameworks",
    link: "/compliance/privacy",
    regions: ["EU/EEA", "USA (California)", "Brazil", "South Africa", "Canada", "Australia"],
    status: "documented",
  },
  {
    icon: FileText,
    title: "Terms & Consumer Protection",
    description: "User agreements, dispute resolution, refund policies, and product safety",
    link: "/compliance/terms",
    regions: ["Global", "EU Consumer Rights", "US FTC", "UK CRA"],
    status: "documented",
  },
  {
    icon: Globe,
    title: "Trade & Export Regulations",
    description: "Sanctions compliance, export controls, restricted goods, and customs",
    link: "/compliance/trade",
    regions: ["US (OFAC/EAR)", "EU Sanctions", "UN Sanctions", "Country-specific"],
    status: "documented",
  },
  {
    icon: Receipt,
    title: "Tax & Invoicing",
    description: "VAT/GST obligations, cross-border taxation, and invoice requirements",
    link: "/compliance/tax",
    regions: ["EU VAT", "UK VAT", "US Sales Tax", "India GST", "Brazil ICMS"],
    status: "documented",
  },
];

const regionMatrix = [
  {
    region: "European Union",
    flag: "🇪🇺",
    privacy: "GDPR — Strict consent, DPO required for large-scale processing, 72h breach notification",
    trade: "EU Sanctions Regulation, Dual-Use Regulation (EU 2021/821)",
    consumer: "Consumer Rights Directive, 14-day withdrawal right, Product Safety Regulation",
    tax: "EU VAT (OSS scheme for cross-border B2C), Intrastat reporting",
  },
  {
    region: "United States",
    flag: "🇺🇸",
    privacy: "CCPA/CPRA (California), state-level patchwork, no federal privacy law yet",
    trade: "OFAC sanctions, EAR (Export Administration Regulations), ITAR for defense",
    consumer: "FTC Act, state consumer protection laws, Magnuson-Moss Warranty Act",
    tax: "No federal sales tax; state-level nexus rules, marketplace facilitator laws",
  },
  {
    region: "Brazil",
    flag: "🇧🇷",
    privacy: "LGPD — Similar to GDPR, ANPD enforcement, legal basis required",
    trade: "SISCOMEX export system, Mercosur trade agreements",
    consumer: "Código de Defesa do Consumidor (CDC), 7-day withdrawal",
    tax: "ICMS (state tax), IPI (federal), complex cross-state invoicing (NF-e)",
  },
  {
    region: "India",
    flag: "🇮🇳",
    privacy: "DPDP Act 2023 — Consent-based, data localization for critical data",
    trade: "DGFT export controls, IEC mandatory for importers/exporters",
    consumer: "Consumer Protection Act 2019, e-commerce rules, product liability",
    tax: "GST (central + state), HSN codes required, e-invoicing mandatory above threshold",
  },
  {
    region: "United Kingdom",
    flag: "🇬🇧",
    privacy: "UK GDPR + Data Protection Act 2018, ICO enforcement",
    trade: "UK Sanctions (OFSI), UK export controls, post-Brexit CE/UKCA marking",
    consumer: "Consumer Rights Act 2015, 30-day short-term right to reject",
    tax: "UK VAT (20%), Making Tax Digital, customs duties post-Brexit",
  },
  {
    region: "Africa (Key Markets)",
    flag: "🌍",
    privacy: "South Africa POPIA, Nigeria NDPR, Kenya DPA — varying maturity",
    trade: "AfCFTA trade agreement, country-specific import/export licenses",
    consumer: "Varies by country — South Africa CPA, Nigeria FCCPC",
    tax: "VAT varies (14-18%), customs unions (SACU, EAC, ECOWAS)",
  },
  {
    region: "Southeast Asia",
    flag: "🌏",
    privacy: "Singapore PDPA, Thailand PDPA, Indonesia PDP Law, Philippines DPA",
    trade: "ASEAN trade agreements, country-specific restricted goods lists",
    consumer: "Varies — Singapore CPFTA, Indonesia consumer protection law",
    tax: "GST/VAT varies (7-12%), digital tax obligations expanding",
  },
];

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="bg-primary">
          <div className="container mx-auto px-6 py-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Compliance Center</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
              Global Compliance Hub
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl">
              Operating across 190+ countries requires careful attention to local regulations. 
              Here's how GlobeTrade stays compliant — and how you can too.
            </p>
          </div>
        </div>

        {/* Compliance areas grid */}
        <div className="container mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-foreground mb-8">Compliance Areas</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {complianceAreas.map((area, i) => (
              <Link
                key={area.title}
                to={area.link}
                className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <area.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-card-foreground group-hover:text-secondary transition-colors">
                        {area.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.regions.map((r) => (
                        <span key={r} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Regional matrix */}
        <div className="bg-muted/50 py-14">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">Compliance by Region</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              A quick reference for key regulatory requirements across major trading regions.
            </p>

            <div className="space-y-5">
              {regionMatrix.map((region, i) => (
                <div
                  key={region.region}
                  className="rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="p-5 border-b border-border/50">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {region.flag} {region.region}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
                    {[
                      { label: "Privacy", value: region.privacy, icon: Shield },
                      { label: "Trade", value: region.trade, icon: Globe },
                      { label: "Consumer", value: region.consumer, icon: FileText },
                      { label: "Tax", value: region.tax, icon: Receipt },
                    ].map((col) => (
                      <div key={col.label} className="p-5">
                        <div className="flex items-center gap-1.5 mb-2">
                          <col.icon className="w-3.5 h-3.5 text-secondary" />
                          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                            {col.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {col.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="container mx-auto px-6 py-14">
          <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Legal Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This compliance hub is for informational purposes only and does not constitute legal advice. 
                Regulations change frequently, and requirements vary by jurisdiction, product type, and business model. 
                We strongly recommend consulting qualified legal counsel in each applicable jurisdiction before 
                engaging in cross-border trade. GlobeTrade makes every effort to keep this information current 
                but cannot guarantee its completeness or accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compliance;
