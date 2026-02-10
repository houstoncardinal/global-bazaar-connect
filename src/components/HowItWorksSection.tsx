import { Search, ShieldCheck, Handshake, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Search millions of products from verified suppliers in 190+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "Verify",
    description: "Every supplier is vetted with trade history, certifications, and real reviews.",
  },
  {
    icon: Handshake,
    title: "Connect & Negotiate",
    description: "Chat directly, request quotes, and negotiate terms — no middlemen.",
  },
  {
    icon: Truck,
    title: "Trade Securely",
    description: "Secure payments, logistics tracking, and dispute resolution built in.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From discovery to delivery — we make global trade simple
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-5 shadow-lg">
                <step.icon className="w-7 h-7 text-secondary-foreground" />
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
