import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-hero-gradient overflow-hidden p-14 md:p-24 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-accent/5 blur-[80px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-secondary/30 to-transparent" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-secondary/50" />
              <span className="text-[10px] tracking-luxe-wide uppercase text-secondary/70">Join Us</span>
              <div className="w-8 h-px bg-secondary/50" />
            </div>

            <h2 className="text-3xl md:text-6xl font-display font-bold text-primary-foreground mb-5">
              Ready to Go <span className="italic text-secondary">Global</span>?
            </h2>
            <p className="text-base text-primary-foreground/40 max-w-md mx-auto mb-10 leading-relaxed">
              Join thousands of businesses already trading across borders. 
              List your products or find your next supplier today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-10 bg-cardinal-gradient text-secondary-foreground font-medium text-sm tracking-wider uppercase hover:opacity-90 transition-opacity inline-flex items-center gap-3">
                Start Selling
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="h-14 px-10 border border-primary-foreground/15 text-primary-foreground font-medium text-sm tracking-wider uppercase hover:border-primary-foreground/30 transition-colors duration-300">
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
