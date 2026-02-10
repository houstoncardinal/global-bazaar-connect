import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle2, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: `GlobeTrade ("we," "our," or "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you use our global trade marketplace platform. We process data in compliance with applicable data protection laws including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), Brazil's Lei Geral de Proteção de Dados (LGPD), South Africa's Protection of Personal Information Act (POPIA), and other applicable local privacy laws.`,
  },
  {
    title: "2. Data We Collect",
    content: null,
    list: [
      "**Account information**: Name, email, phone number, business name, country, and role (buyer/supplier)",
      "**Identity verification**: Government-issued ID, business registration documents, tax identification numbers",
      "**Transaction data**: Orders, invoices, payment details, shipping addresses, trade history",
      "**Communications**: Messages between buyers and suppliers, support tickets, feedback",
      "**Usage data**: IP address, browser type, pages visited, search queries, click patterns",
      "**Device data**: Device identifiers, operating system, language preferences",
      "**Location data**: Country-level geolocation for regulatory compliance and service delivery",
    ],
  },
  {
    title: "3. How We Use Your Data",
    content: null,
    list: [
      "Providing and improving our marketplace services",
      "Verifying supplier and buyer identities (KYC/AML compliance)",
      "Processing transactions and facilitating trade",
      "Compliance with sanctions screening and export control regulations",
      "Sending transactional and, with consent, marketing communications",
      "Fraud prevention and platform security",
      "Analytics and service improvement (anonymized/aggregated where possible)",
    ],
  },
  {
    title: "4. Legal Bases for Processing (GDPR)",
    content: null,
    list: [
      "**Contract performance**: Processing necessary to fulfill our service agreement with you",
      "**Legal obligation**: Compliance with trade regulations, sanctions screening, tax reporting",
      "**Legitimate interests**: Fraud prevention, platform security, service improvement",
      "**Consent**: Marketing communications, non-essential cookies, optional profiling",
    ],
  },
  {
    title: "5. International Data Transfers",
    content: "As a global platform, your data may be transferred across borders. We use Standard Contractual Clauses (SCCs) approved by the European Commission, ensure adequacy decisions are in place where applicable, and implement supplementary security measures as required. Data localization requirements in specific jurisdictions (e.g., Russia, China, India for critical data) are respected.",
  },
  {
    title: "6. Your Rights",
    content: "Depending on your jurisdiction, you may have the right to:",
    list: [
      "**Access** your personal data and obtain a copy",
      "**Rectify** inaccurate or incomplete data",
      "**Erase** your data (\"right to be forgotten\")",
      "**Restrict** or **object** to processing",
      "**Data portability** — receive your data in a structured format",
      "**Withdraw consent** at any time (without affecting prior processing)",
      "**Non-discrimination** for exercising your rights (CCPA)",
      "**Lodge a complaint** with your local data protection authority",
    ],
  },
  {
    title: "7. Data Retention",
    content: "We retain personal data for as long as necessary to provide our services and comply with legal obligations. Transaction records are kept for a minimum of 5-7 years as required by tax and trade regulations. Account data is deleted within 30 days of account closure, except where legal retention is required.",
  },
  {
    title: "8. Cookies & Tracking",
    content: "We use strictly necessary cookies to operate the platform. Analytics and marketing cookies are only placed with your explicit consent (EU/UK) or with opt-out available (US). You can manage your preferences at any time through our cookie settings.",
  },
  {
    title: "9. Region-Specific Provisions",
    content: null,
    subsections: [
      { region: "🇪🇺 EU/EEA (GDPR)", detail: "Data Protection Officer contactable at dpo@globetrade.com. We maintain Records of Processing Activities (ROPA) and conduct Data Protection Impact Assessments (DPIA) for high-risk processing." },
      { region: "🇺🇸 California (CCPA/CPRA)", detail: "California residents can opt out of the \"sale\" or \"sharing\" of personal information. We do not sell personal data. Categories of data collected and purposes are disclosed above." },
      { region: "🇧🇷 Brazil (LGPD)", detail: "Processing is conducted under applicable legal bases per LGPD Art. 7. Data subject rights can be exercised through our platform or by contacting our DPO." },
      { region: "🇿🇦 South Africa (POPIA)", detail: "We are registered with the Information Regulator. Processing complies with POPIA conditions, and cross-border transfers follow Section 72 requirements." },
    ],
  },
  {
    title: "10. Contact & DPO",
    content: "For privacy inquiries, data subject requests, or complaints:\n\n**Data Protection Officer**: dpo@globetrade.com\n**General Privacy**: privacy@globetrade.com\n\nWe respond to all data subject requests within 30 days (or shorter if required by local law).",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="bg-primary">
          <div className="container mx-auto px-6 py-10">
            <Link to="/compliance" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-secondary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Compliance Hub
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Privacy Policy</h1>
            <p className="text-primary-foreground/60">Last updated: February 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="animate-fade-up">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                {section.content && (
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                )}
                {section.list && (
                  <ul className="mt-3 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsections && (
                  <div className="mt-4 space-y-4">
                    {section.subsections.map((sub) => (
                      <div key={sub.region} className="rounded-xl bg-muted/50 border border-border/50 p-4">
                        <h4 className="font-semibold text-sm text-foreground mb-1">{sub.region}</h4>
                        <p className="text-sm text-muted-foreground">{sub.detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
