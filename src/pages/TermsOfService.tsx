import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using CardinalMerchant, you agree to these Terms of Service. If you are using CardinalMerchant on behalf of a business, you represent that you have authority to bind that entity. If you do not agree, do not use the platform.",
  },
  {
    title: "2. Eligibility",
    list: [
      "You must be at least 18 years old (or the age of legal majority in your jurisdiction)",
      "You must have the legal capacity to enter into contracts",
      "Your use must comply with all applicable laws in your jurisdiction",
      "Businesses must be legally registered and in good standing",
    ],
  },
  {
    title: "3. User Accounts & Verification",
    content: "Suppliers undergo a verification process including business registration checks, identity verification, and, where applicable, trade license validation. Users are responsible for maintaining accurate account information and safeguarding credentials. CardinalMerchant reserves the right to suspend unverified or fraudulent accounts.",
  },
  {
    title: "4. Marketplace Rules",
    list: [
      "**Prohibited goods**: Sanctions-listed items, counterfeit products, weapons, controlled substances, and goods restricted by applicable export/import laws",
      "**Listing accuracy**: Suppliers must accurately describe products, pricing, MOQ, origin country, and applicable certifications",
      "**Intellectual property**: Users must not list IP-infringing products; DMCA/notice-and-takedown procedures apply",
      "**Fair dealing**: Price manipulation, fake reviews, and collusion are prohibited",
    ],
  },
  {
    title: "5. Transactions & Payments",
    content: "CardinalMerchant facilitates connections between buyers and suppliers. Transaction terms (pricing, shipping, payment) are agreed between parties. CardinalMerchant may offer escrow or payment facilitation services subject to separate terms. All parties remain responsible for their own tax obligations.",
  },
  {
    title: "6. Consumer Protection",
    subsections: [
      { region: "🇪🇺 EU Consumers", detail: "14-day right of withdrawal for distance contracts (unless exemptions apply, e.g., custom goods). Clear pre-contractual information must be provided. Products must meet EU safety standards." },
      { region: "🇬🇧 UK Consumers", detail: "Consumer Rights Act 2015 applies. 30-day short-term right to reject faulty goods. Digital content must be of satisfactory quality." },
      { region: "🇺🇸 US Consumers", detail: "FTC Act prohibitions on deceptive practices apply. State-level consumer protection laws may provide additional rights. Magnuson-Moss Warranty Act governs warranty obligations." },
      { region: "🇧🇷 Brazil", detail: "Código de Defesa do Consumidor (CDC) provides 7-day withdrawal right for online purchases, strict product liability, and mandatory clear pricing in BRL." },
    ],
  },
  {
    title: "7. Dispute Resolution",
    content: "CardinalMerchant provides an internal dispute resolution mechanism for transaction-related issues. If unresolved, parties may pursue mediation, arbitration, or court proceedings as applicable. EU consumers may use the EU Online Dispute Resolution platform.",
  },
  {
    title: "8. Limitation of Liability",
    content: "CardinalMerchant is a marketplace platform and is not a party to transactions between buyers and suppliers. To the maximum extent permitted by law, CardinalMerchant's liability is limited to the fees paid to us in the 12 months preceding the claim. This limitation does not affect statutory consumer rights that cannot be waived.",
  },
  {
    title: "9. Termination",
    content: "Either party may terminate the account relationship at any time. CardinalMerchant may suspend or terminate accounts that violate these terms, applicable laws, or sanctions requirements. Upon termination, transaction data is retained as required by law.",
  },
  {
    title: "10. Governing Law",
    content: "These terms are governed by the laws of the jurisdiction where CardinalMerchant's principal entity is established, except where mandatory local consumer protection laws override this choice.",
  },
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <div className="bg-primary">
          <div className="container mx-auto px-6 py-10">
            <Link to="/compliance" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-secondary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Compliance Hub
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Terms of Service</h1>
            <p className="text-primary-foreground/60">Last updated: February 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="animate-fade-up">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                {section.content && (
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
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

export default TermsOfService;
