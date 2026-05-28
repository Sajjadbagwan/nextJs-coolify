import { useState } from "react";
import { Minus, Plus, Trash2, Tag, Truck, ShieldCheck, Lock, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RecentlyViewed from "@/components/RecentlyViewed";
import { VisaLogo, MastercardLogo, AmexLogo, ApplePayLogo, GooglePayLogo } from "@/components/PaymentLogos";
import { fmtGBP } from "@/lib/format";
import catCabinet from "@/assets/cat-cabinet.jpg";
import catFixings from "@/assets/cat-fixings.jpg";
import productDrill from "@/assets/product-drill.jpg";

interface Line {
  id: string;
  brand: string;
  name: string;
  variant?: string;
  sku: string;
  price: number;
  qty: number;
  image: string;
  inStock: boolean;
}

const initialLines: Line[] = [
  {
    id: "1",
    brand: "Blum",
    name: "LEGRABOX Orion Grey 500mm M-Height Drawer Kit",
    variant: "Pack of 40 · Orion Grey",
    sku: "770M5002S-OG-40",
    price: 1718.0,
    qty: 1,
    image: catCabinet,
    inStock: true,
  },
  {
    id: "2",
    brand: "Reisser",
    name: "5.0 x 50 R2 Cutter Wood Screws",
    sku: "RSR-5050-200",
    price: 12.99,
    qty: 3,
    image: catFixings,
    inStock: true,
  },
  {
    id: "3",
    brand: "Festool",
    name: "T 18+3 Cordless Drill Set",
    variant: "I-Plus · 4.0Ah",
    sku: "576446",
    price: 329.0,
    qty: 1,
    image: productDrill,
    inStock: true,
  },
];

const BasketPage = () => {
  const [lines, setLines] = useState(initialLines);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const update = (id: string, qty: number) => {
    if (qty < 1) return setLines((l) => l.filter((x) => x.id !== id));
    setLines((l) => l.map((x) => (x.id === id ? { ...x, qty } : x)));
  };

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal - discount > 40 ? 0 : 6.95;
  const vat = (subtotal - discount + shipping) * 0.2;
  const total = subtotal - discount + shipping + vat;

  return (
    <div className="min-h-screen bg-[hsl(var(--brand-bg))] w-full max-w-[640px] mx-auto overflow-x-hidden pb-32">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Basket" }]} />

      {/* Title */}
      <div className="px-4 py-4 bg-background border-b border-border">
        <h1 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-tight">
          Your Basket
        </h1>
      </div>

      {lines.length === 0 ? (
        <div className="bg-background mx-4 mt-4 rounded-lg border border-border p-8 text-center">
          <p className="font-heading text-base text-[hsl(var(--brand-dark))] uppercase tracking-wide">Your basket is empty</p>
          <Link to="/" className="inline-block mt-4 bg-[hsl(var(--brand-mid))] text-white text-xs uppercase tracking-wider font-heading font-medium px-5 py-3 rounded">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Free shipping progress */}
          {shipping > 0 && (
            <div className="bg-background mx-4 mt-4 rounded-lg border border-border p-3">
              <div className="flex items-center gap-2 text-xs text-foreground mb-2">
                <Truck className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
                <span>Add <strong className="text-[hsl(var(--brand-mid))]">{fmtGBP(40 - (subtotal - discount))}</strong> for free delivery</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-[hsl(var(--brand-mid))]" style={{ width: `${Math.min(100, ((subtotal - discount) / 40) * 100)}%` }} />
              </div>
            </div>
          )}

          {/* Lines */}
          <div className="px-4 mt-3 space-y-3">
            {lines.map((l) => (
              <div key={l.id} className="bg-background rounded-lg border border-border p-3">
                <div className="flex gap-3">
                  <Link to={`/product/${l.id}`} className="w-20 h-20 bg-[hsl(var(--brand-bg))] rounded overflow-hidden flex-shrink-0">
                    <img src={l.image} alt={l.name} className="w-full h-full object-contain p-1" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-medium text-foreground leading-snug line-clamp-2">{l.name}</h3>
                    <p className="text-[12px] text-muted-foreground mt-0.5">SKU: {l.sku}</p>
                  </div>
                  <button
                    onClick={() => update(l.id, 0)}
                    aria-label="Remove"
                    className="touch-target text-muted-foreground active:text-[hsl(var(--sale-red))] flex-shrink-0 -m-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="flex items-center border border-border rounded-md">
                    <button onClick={() => update(l.id, l.qty - 1)} className="w-9 h-9 flex items-center justify-center" aria-label="Decrease"><Minus className="w-3.5 h-3.5" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{l.qty}</span>
                    <button onClick={() => update(l.id, l.qty + 1)} className="w-9 h-9 flex items-center justify-center" aria-label="Increase"><Plus className="w-3.5 h-3.5" /></button>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(l.price * l.qty)}</div>
                    {l.qty > 1 && <div className="text-[12px] text-muted-foreground">{fmtGBP(l.price)} each</div>}
                    <div className="flex items-center justify-end gap-1 mt-1 text-[12px] text-[hsl(var(--trust-green))] font-medium">
                      <Award className="w-3.5 h-3.5" />
                      <span>Earn {Math.floor(l.price * l.qty)} pts</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Promo */}
          <div className="bg-background mx-4 mt-3 rounded-lg border border-border p-3">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
              <span className="font-heading text-[12px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider">Promo Code</span>
            </div>
            {promoApplied ? (
              <div className="flex items-center justify-between text-sm">
                <span className="text-[hsl(var(--trust-green))] font-medium">✓ TRADE10 applied (−10%)</span>
                <button onClick={() => setPromoApplied(false)} className="text-xs text-muted-foreground underline">Remove</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value.toUpperCase())}
                  placeholder="Enter code"
                  size={1}
                  className="flex-1 min-w-0 h-10 px-3 text-sm bg-[hsl(var(--brand-bg))] border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
                />
                <button
                  onClick={() => promo && setPromoApplied(true)}
                  className="bg-[hsl(var(--brand-dark))] text-white font-heading text-[12px] font-medium uppercase tracking-wider px-4 rounded"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Totals */}
          <div className="bg-background mx-4 mt-3 rounded-lg border border-border p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground font-medium">{fmtGBP(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-[hsl(var(--trust-green))]">Discount</span>
                <span className="text-[hsl(var(--trust-green))] font-medium">−{fmtGBP(discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="text-foreground font-medium">{shipping === 0 ? "FREE" : fmtGBP(shipping)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">VAT (20%)</span>
              <span className="text-foreground font-medium">{fmtGBP(vat)}</span>
            </div>
            <div className="flex justify-between pt-3 mt-2 border-t border-border">
              <span className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">Total</span>
              <span className="text-2xl font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(total)}</span>
            </div>
            <p className="text-[12px] text-muted-foreground text-right mb-2">inc. VAT</p>
            <div className="flex items-center justify-center gap-1.5 mt-2 py-2 px-3 bg-[hsl(var(--trust-green))]/10 rounded border border-[hsl(var(--trust-green))]/20 text-[hsl(var(--trust-green))]">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">You will earn <strong>{Math.floor(total)}</strong> loyalty points</span>
            </div>
          </div>

          {/* Influencing copy banner */}
          <div className="mx-4 mt-3 rounded-lg bg-[hsl(var(--brand-dark))] p-4 text-center">
            <p className="font-heading text-sm font-medium text-white uppercase tracking-wide">Join 10,000+ trade customers</p>
            <p className="text-[12px] text-white/80 mt-1">Trusted by professionals since 1908 · Checkout in under 60 seconds</p>
          </div>

          {/* Trust */}
          <div className="bg-background mx-4 mt-3 rounded-lg border border-border p-3 space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs text-foreground">
              <ShieldCheck className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
              <span>Secure checkout — 256-bit SSL encryption</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap pt-1">
              <VisaLogo /><MastercardLogo /><AmexLogo /><ApplePayLogo /><GooglePayLogo />
            </div>
          </div>
        </>
      )}

      {/* Recently viewed */}
      {lines.length > 0 && <RecentlyViewed />}

      <MobileFooter />

      {/* Sticky checkout */}
      {lines.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border safe-bottom">
          <div className="max-w-[640px] mx-auto px-4 py-3 space-y-2">
            <button
              type="button"
              aria-label="Pay with Apple Pay"
              className="w-full bg-black active:bg-black/80 text-white py-3.5 rounded-md flex items-center justify-center active:scale-[0.98] transition-transform"
            >
              <svg viewBox="0 0 64 26" className="h-5 w-auto" aria-hidden="true" fill="currentColor">
                <path d="M11.7 3.36c-.75.89-1.95 1.59-3.15 1.49-.15-1.2.44-2.47 1.13-3.26C10.43.7 11.74.05 12.8 0c.13 1.25-.36 2.48-1.1 3.36zm1.09 1.73c-1.74-.1-3.23.99-4.06.99-.84 0-2.11-.94-3.5-.91-1.8.03-3.47 1.04-4.39 2.66-1.88 3.24-.49 8.04 1.34 10.68.89 1.31 1.96 2.75 3.37 2.7 1.34-.05 1.86-.87 3.48-.87s2.09.87 3.5.84c1.45-.03 2.36-1.31 3.25-2.62 1.02-1.49 1.43-2.94 1.46-3.02-.03-.03-2.81-1.1-2.83-4.31-.03-2.69 2.19-3.97 2.29-4.04-1.25-1.85-3.2-2.05-3.91-2.1zM23.42 1.46v18.83h2.92v-6.43h4.04c3.69 0 6.29-2.53 6.29-6.21s-2.55-6.19-6.19-6.19h-7.06zm2.92 2.46h3.37c2.53 0 3.97 1.35 3.97 3.74s-1.44 3.75-3.99 3.75h-3.35V3.92zm15.71 16.5c1.84 0 3.55-.93 4.32-2.4h.06v2.27h2.7V11.05c0-2.71-2.17-4.46-5.51-4.46-3.1 0-5.39 1.78-5.47 4.21h2.63c.22-1.16 1.29-1.92 2.76-1.92 1.78 0 2.78.83 2.78 2.36v1.04l-3.64.22c-3.39.21-5.22 1.59-5.22 4 0 2.43 1.88 4.04 4.59 4.04zm.78-2.23c-1.55 0-2.54-.75-2.54-1.89 0-1.18.95-1.86 2.77-1.97l3.24-.2v1.06c0 1.76-1.49 3-3.47 3zM52.06 25.4c2.84 0 4.18-1.09 5.35-4.39l5.12-14.36h-2.96l-3.43 11.09h-.06l-3.43-11.09h-3.05l4.94 13.69-.27.83c-.45 1.42-1.17 1.97-2.47 1.97-.23 0-.68-.03-.86-.05v2.27c.17.04.91.04 1.12.04z"/>
              </svg>
            </button>
            <button className="w-full bg-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-dark))] text-primary-foreground font-heading font-medium uppercase tracking-wider text-[14px] py-4 rounded-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              <Lock className="w-4 h-4" /> Secure Checkout · {fmtGBP(total)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
