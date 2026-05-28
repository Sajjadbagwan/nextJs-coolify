import { useState } from "react";

const NewsletterBlock = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[hsl(var(--brand-dark))] px-4 py-6">
      <h2 className="font-heading text-primary-foreground font-medium text-xl uppercase tracking-wide">
        Get the Latest News & Special Offers
      </h2>
      <p className="text-primary-foreground/70 text-sm mt-1">
        Stay up to date with products, offers and promotions.
      </p>
      <div className="mt-4 space-y-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <input
            type="text"
            placeholder="First Name"
            className="w-full h-11 px-3 rounded bg-primary-foreground text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-11 px-3 rounded bg-primary-foreground text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
          />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full h-11 px-3 rounded bg-primary-foreground text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" id="biz" className="w-4 h-4 rounded" />
          <label htmlFor="biz" className="text-primary-foreground/80 text-xs">
            I am a business
          </label>
        </div>
        <button className="w-full bg-[hsl(var(--brand-light-blue))] hover:bg-white hover:text-[hsl(var(--brand-dark))] text-white font-heading font-medium text-sm py-3 rounded uppercase tracking-wider touch-target transition-colors">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsletterBlock;
