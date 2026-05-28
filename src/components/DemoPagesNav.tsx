import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const pages = [
  { to: "/category-landing", label: "Category Landing", desc: "Brand-led overview" },
  { to: "/category", label: "Category Listing", desc: "Filter & sort grid" },
  { to: "/product-simple", label: "Product · Simple", desc: "Standard PDP" },
  { to: "/product-tier", label: "Product · Tier Pricing", desc: "Volume discounts" },
  { to: "/product-config", label: "Product · Configurable", desc: "Variant options" },
  { to: "/product-out-of-stock", label: "Product · Out of Stock", desc: "Notify when back" },
  { to: "/product-made-to-measure", label: "Product · Made to Measure", desc: "Custom cut to size" },
  { to: "/basket", label: "Basket", desc: "Cart & checkout" },
];

const DemoPagesNav = () => (
  <section className="bg-[hsl(var(--brand-bg))] px-4 py-6 border-y border-border">
    <p className="font-heading text-[12px] uppercase tracking-widest text-[hsl(var(--brand-mid))] font-medium">
      Theme Preview
    </p>
    <h2 className="font-heading text-lg font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mt-1 mb-3">
      All Page Designs
    </h2>
    <div className="grid grid-cols-1 gap-2">
      {pages.map((p) => (
        <Link
          key={p.to}
          to={p.to}
          className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3 active:scale-[0.99] transition-transform"
        >
          <div>
            <div className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
              {p.label}
            </div>
            <div className="text-[12px] text-muted-foreground">{p.desc}</div>
          </div>
          <ChevronRight className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
        </Link>
      ))}
    </div>
  </section>
);

export default DemoPagesNav;
