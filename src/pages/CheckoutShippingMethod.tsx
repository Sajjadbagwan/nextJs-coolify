import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Pencil, Truck, Zap, Store } from "lucide-react";
import CheckoutHeader from "@/components/CheckoutHeader";
import CheckoutOrderSummary from "@/components/CheckoutOrderSummary";
import { fmtGBP } from "@/lib/format";

const methods = [
  {
    id: "standard",
    icon: Truck,
    title: "Order Over £99 — Next Working Day",
    desc: "Free delivery on stock items ordered before 3pm, Mon–Fri",
    price: 0,
  },
  {
    id: "pre12",
    icon: Zap,
    title: "Pre-12 Delivery",
    desc: "Orders must be placed before 2pm",
    price: 15,
  },
  {
    id: "collect",
    icon: Store,
    title: "Click & Collect",
    desc: "From our Trade Counter (Mon–Fri 8am–5pm)",
    price: 0,
  },
];

const CheckoutShippingMethod = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("standard");

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-32">
      <CheckoutHeader step={2} backTo="/checkout/shipping" backLabel="Back to address" />
      <CheckoutOrderSummary shipping={methods.find((m) => m.id === selected)?.price ?? 0} />

      {/* Saved details */}
      <section className="px-4 pt-5 space-y-2">
        <div className="border border-border rounded-lg p-3 flex items-start justify-between">
          <div className="text-sm">
            <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading mb-1">Contact</p>
            <p className="text-foreground">john.smith@example.com</p>
          </div>
          <Link to="/checkout/shipping" className="text-[hsl(var(--brand-mid))] text-xs font-medium uppercase tracking-wider flex items-center gap-1">
            <Pencil className="w-3 h-3" /> Edit
          </Link>
        </div>
        <div className="border border-border rounded-lg p-3 flex items-start justify-between">
          <div className="text-sm">
            <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading mb-1">Ship to</p>
            <p className="text-foreground leading-snug">
              4 Ashcroft Road<br />Rochester, Kent ME3 8GS
            </p>
          </div>
          <Link to="/checkout/shipping" className="text-[hsl(var(--brand-mid))] text-xs font-medium uppercase tracking-wider flex items-center gap-1">
            <Pencil className="w-3 h-3" /> Edit
          </Link>
        </div>
      </section>

      {/* Methods */}
      <section className="px-4 mt-6">
        <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-3">
          Shipping Method
        </h2>
        <div className="space-y-2">
          {methods.map((m) => {
            const Icon = m.icon;
            const active = selected === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border-2 transition-colors ${
                  active ? "border-[hsl(var(--brand-mid))] bg-[hsl(var(--brand-bg))]" : "border-border bg-background"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    active ? "border-[hsl(var(--brand-mid))]" : "border-border"
                  }`}
                >
                  {active && <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--brand-mid))]" />}
                </div>
                <Icon className="w-5 h-5 text-[hsl(var(--brand-mid))] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-medium text-foreground leading-snug">{m.title}</p>
                  <p className="text-[12px] text-muted-foreground mt-0.5">{m.desc}</p>
                </div>
                <span className="text-sm font-bold text-[hsl(var(--brand-dark))] flex-shrink-0">
                  {m.price === 0 ? "FREE" : fmtGBP(m.price)}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border safe-bottom">
        <div className="max-w-[640px] mx-auto px-4 py-3 space-y-2">
          <button
            onClick={() => navigate("/checkout/payment")}
            className="w-full bg-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-dark))] text-primary-foreground font-heading font-medium uppercase tracking-wider text-[14px] py-4 rounded-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            Continue to Payment <ChevronRight className="w-4 h-4" />
          </button>
          <Link to="/checkout/shipping" className="block text-center text-xs text-muted-foreground underline">
            Return to contact information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutShippingMethod;
