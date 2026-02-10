import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl bg-hero-gradient overflow-hidden p-12 md:p-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-secondary/5 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Go <span className="text-gradient-gold">Global</span>?
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Join thousands of businesses already trading across borders. List your products or find your next supplier today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-8 rounded-xl bg-gold-gradient text-secondary-foreground font-semibold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Start Selling
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="h-14 px-8 rounded-xl border-2 border-primary-foreground/20 text-primary-foreground font-semibold text-base hover:border-primary-foreground/40 transition-colors">
                Find Suppliers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
