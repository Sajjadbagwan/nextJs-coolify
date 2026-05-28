import { ShoppingCart, Bell } from "lucide-react";
import { fmtGBP, incVat } from "@/lib/format";

interface Props {
  /** ex-VAT total */
  total: number;
  qty: number;
  outOfStock?: boolean;
  ctaLabel?: string;
}

const StickyAddToCart = ({ total, qty, outOfStock, ctaLabel }: Props) => (
  <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border safe-bottom">
    <div className="max-w-[640px] mx-auto px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading">
            {qty > 1 ? `Total · ${qty} items` : "Total inc VAT"}
          </p>
          <span className="block text-lg font-bold text-[hsl(var(--brand-dark))] leading-tight">
            {fmtGBP(incVat(total))}
          </span>
          <span className="block text-[12px] text-muted-foreground leading-tight mt-0.5">
            {fmtGBP(total)} ex VAT
          </span>
        </div>
        <button
          disabled={outOfStock}
          className={`flex-1 font-heading font-medium uppercase tracking-wider text-[14px] py-3.5 rounded-md flex items-center justify-center gap-2 active:scale-[0.97] transition-transform ${
            outOfStock
              ? "bg-muted text-muted-foreground"
              : "bg-[hsl(var(--brand-mid))] text-primary-foreground active:bg-[hsl(var(--brand-dark))]"
          }`}
        >
          {outOfStock ? <Bell className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          {ctaLabel ?? (outOfStock ? "Notify Me" : "Add to Basket")}
        </button>
      </div>
    </div>
  </div>
);

export default StickyAddToCart;
