import { Search, ShieldCheck, Handshake, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Search millions of products from verified suppliers across 190+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "Verify",
    description: "Every supplier is vetted with trade history, certifications, and real reviews.",
  },
  {
    icon: Handshake,
    title: "Negotiate",
    description: "Connect directly, request quotes, and negotiate terms — no intermediaries.",
  },
  {
    icon: Truck,
    title: "Trade",
    description: "Secure payments, logistics tracking, and dispute resolution built in.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-secondary" />
            <span className="text-xs tracking-luxe-wide uppercase text-secondary font-medium">Process</span>
            <div className="w-8 h-px bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From discovery to delivery — refined global trade
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border/50" />
              )}

              <div className="relative z-10 w-16 h-16 rounded-sm bg-cardinal-gradient flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-6 h-6 text-secondary-foreground" />
              </div>

              <span className="text-[10px] tracking-luxe-wide uppercase text-muted-foreground mb-2 block">
                Step {i + 1}
              </span>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
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
