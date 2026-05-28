import { Gift } from "lucide-react";

const LoyaltyBanner = () => (
  <section className="mx-4 my-4 bg-[hsl(var(--brand-dark))] rounded p-4 flex items-center gap-3">
    <div className="bg-[hsl(var(--brand-light-blue))] w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
      <Gift className="w-5 h-5 text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-heading text-primary-foreground font-medium text-base uppercase tracking-wide">
        Shop More. Earn More.
      </h3>
      <p className="text-primary-foreground/60 text-[12px] mt-0.5">
        1 point for every £1 spent. Join our loyalty scheme.
      </p>
    </div>
    <button className="bg-[hsl(var(--brand-light-blue))] hover:bg-white hover:text-[hsl(var(--brand-dark))] text-white font-heading font-medium text-[12px] px-3 py-2 rounded flex-shrink-0 touch-target uppercase tracking-wider transition-colors">
      Join Free
    </button>
  </section>
);

export default LoyaltyBanner;
