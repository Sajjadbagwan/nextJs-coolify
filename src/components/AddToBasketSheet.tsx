import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, X, ShoppingCart, ChevronRight } from "lucide-react";
import { fmtGBP, incVat } from "@/lib/format";
import ProductCard, { type ProductCardData } from "@/components/ProductCard";

export interface AddedItem {
  name: string;
  sku: string;
  image: string;
  qty: number;
  price: number; // ex VAT unit price
}

export interface RecommendedItem {
  id: string;
  name: string;
  image: string;
  price: number; // ex VAT
}

interface Props {
  open: boolean;
  onClose: () => void;
  item: AddedItem;
  basketCount: number;
  basketSubtotal: number; // ex VAT
  recommendations: RecommendedItem[];
}

const AddToBasketSheet = ({ open, onClose, item, basketCount, basketSubtotal, recommendations }: Props) => {
  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[80] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-foreground/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-label="Item added to basket"
        className={`absolute inset-x-0 bottom-0 mx-auto max-w-[640px] bg-background rounded-t-2xl shadow-2xl flex flex-col max-h-[85vh] transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <button
          onClick={onClose}
          className="w-full pt-2.5 pb-1 flex justify-center"
          aria-label="Close"
        >
          <span className="block w-10 h-1.5 rounded-full bg-muted-foreground/30" />
        </button>

        {/* Confirmation header */}
        <div className="px-4 pt-1 pb-3 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[hsl(var(--trust-green))] flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </span>
            <span className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider">
              Added to Basket
            </span>
          </div>
          <button
            onClick={onClose}
            className="touch-target p-1 -mr-1 text-muted-foreground active:text-foreground"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {/* Added item row */}
          <div className="px-4 py-3 flex items-start gap-3 border-b border-border">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover bg-muted flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] text-foreground leading-snug line-clamp-2">{item.name}</p>
              <p className="text-[12px] text-muted-foreground mt-0.5">SKU: {item.sku}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[14px] font-bold text-[hsl(var(--brand-dark))]">
                  {fmtGBP(incVat(item.price * item.qty))}
                </span>
                <span className="text-[12px] text-muted-foreground">
                  Qty {item.qty} · inc VAT
                </span>
              </div>
            </div>
          </div>

          {/* Basket summary */}
          <div className="px-4 py-3 bg-[hsl(var(--brand-bg))] flex items-center justify-between">
            <div>
              <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading">
                Basket Subtotal · {basketCount} item{basketCount === 1 ? "" : "s"}
              </p>
              <p className="text-base font-bold text-[hsl(var(--brand-dark))] mt-0.5">
                {fmtGBP(incVat(basketSubtotal))}
                <span className="text-[12px] font-normal text-muted-foreground ml-1.5">inc VAT</span>
              </p>
            </div>
            <Link
              to="/basket"
              onClick={onClose}
              className="text-[12px] font-medium text-[hsl(var(--brand-mid))] flex items-center gap-0.5"
            >
              View basket <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="px-4 py-4">
              <h3 className="font-heading text-[12px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider mb-3">
                Frequently bought with
              </h3>
              <div className="overflow-x-auto scrollbar-none -mx-4 px-4">
                <div className="flex gap-3 snap-x snap-mandatory pb-2">
                  {recommendations.map((r) => {
                    const card: ProductCardData = {
                      id: r.id,
                      name: r.name,
                      image: r.image,
                      price: `£${r.price.toFixed(2)}`,
                    };
                    return (
                      <ProductCard
                        key={r.id}
                        product={card}
                        className="flex-shrink-0 w-[68%] snap-start"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky action footer */}
        <div className="border-t border-border bg-card px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex flex-col gap-2">
          {/* Apple Pay */}
          <button
            type="button"
            aria-label="Pay with Apple Pay"
            className="w-full h-11 rounded-md bg-black text-white flex items-center justify-center active:opacity-90"
          >
            <svg viewBox="0 0 64 26" className="h-5 w-auto" aria-hidden="true" fill="currentColor">
              <path d="M11.7 3.36c-.75.89-1.95 1.59-3.15 1.49-.15-1.2.44-2.47 1.13-3.26C10.43.7 11.74.05 12.8 0c.13 1.25-.36 2.48-1.1 3.36zm1.09 1.73c-1.74-.1-3.23.99-4.06.99-.84 0-2.11-.94-3.5-.91-1.8.03-3.47 1.04-4.39 2.66-1.88 3.24-.49 8.04 1.34 10.68.89 1.31 1.96 2.75 3.37 2.7 1.34-.05 1.86-.87 3.48-.87s2.09.87 3.5.84c1.45-.03 2.36-1.31 3.25-2.62 1.02-1.49 1.43-2.94 1.46-3.02-.03-.03-2.81-1.1-2.83-4.31-.03-2.69 2.19-3.97 2.29-4.04-1.25-1.85-3.2-2.05-3.91-2.1zM23.42 1.46v18.83h2.92v-6.43h4.04c3.69 0 6.29-2.53 6.29-6.21s-2.55-6.19-6.19-6.19h-7.06zm2.92 2.46h3.37c2.53 0 3.97 1.35 3.97 3.74s-1.44 3.75-3.99 3.75h-3.35V3.92zm15.71 16.5c1.84 0 3.55-.93 4.32-2.4h.06v2.27h2.7V11.05c0-2.71-2.17-4.46-5.51-4.46-3.1 0-5.39 1.78-5.47 4.21h2.63c.22-1.16 1.29-1.92 2.76-1.92 1.78 0 2.78.83 2.78 2.36v1.04l-3.64.22c-3.39.21-5.22 1.59-5.22 4 0 2.43 1.88 4.04 4.59 4.04zm.78-2.23c-1.55 0-2.54-.75-2.54-1.89 0-1.18.95-1.86 2.77-1.97l3.24-.2v1.06c0 1.76-1.49 3-3.47 3zM52.06 25.4c2.84 0 4.18-1.09 5.35-4.39l5.12-14.36h-2.96l-3.43 11.09h-.06l-3.43-11.09h-3.05l4.94 13.69-.27.83c-.45 1.42-1.17 1.97-2.47 1.97-.23 0-.68-.03-.86-.05v2.27c.17.04.91.04 1.12.04z"/>
            </svg>
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-11 rounded-md border border-border text-[12px] font-heading font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider active:bg-muted"
            >
              Continue Shopping
            </button>
            <Link
              to="/checkout/shipping"
              onClick={onClose}
              className="flex-1 h-11 rounded-md bg-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-dark))] text-primary-foreground text-[12px] font-heading font-medium uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <ShoppingCart className="w-4 h-4" /> Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToBasketSheet;
