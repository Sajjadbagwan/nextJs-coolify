import { useState } from "react";
import { ChevronDown, Tag } from "lucide-react";
import { fmtGBP } from "@/lib/format";
import catCabinet from "@/assets/cat-cabinet.jpg";
import productDrill from "@/assets/product-drill.jpg";

export interface OrderLine {
  id: string;
  name: string;
  qty: number;
  price: number;
  image: string;
}

export const demoLines: OrderLine[] = [
  { id: "1", name: "Lamello P-System Shaft Tool Cutter Router", qty: 1, price: 197.78, image: productDrill },
  { id: "2", name: "Pre-Assembled M Height Overlay Pure Internal Glass Drawer 270D x 900W Orion Grey 40kg", qty: 1, price: 96.16, image: catCabinet },
];

interface Props {
  lines?: OrderLine[];
  shipping?: number;
  showVoucher?: boolean;
  defaultOpen?: boolean;
}

const CheckoutOrderSummary = ({ lines = demoLines, shipping = 0, showVoucher = true, defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [voucher, setVoucher] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const discount = voucherApplied ? subtotal * 0.1 : 0;
  const vat = (subtotal - discount + shipping) * 0.2;
  const total = subtotal - discount + shipping + vat;
  const itemCount = lines.reduce((n, l) => n + l.qty, 0);

  return (
    <section className="bg-[hsl(var(--brand-bg))] border-y border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 text-sm text-[hsl(var(--brand-mid))] font-medium">
          {open ? "Hide" : "Show"} order summary ({itemCount})
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
        <span className="text-base font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(total)}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3">
          {lines.map((l) => (
            <div key={l.id} className="flex gap-3 items-start">
              <div className="relative w-14 h-14 bg-background rounded border border-border flex-shrink-0">
                <img src={l.image} alt={l.name} className="w-full h-full object-contain p-1" />
                <span className="absolute -top-1.5 -right-1.5 bg-[hsl(var(--brand-mid))] text-white text-[12px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {l.qty}
                </span>
              </div>
              <p className="flex-1 text-[12px] font-medium text-foreground leading-snug">{l.name}</p>
              <span className="text-[14px] font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(l.price * l.qty)}</span>
            </div>
          ))}

          {showVoucher && (
            <div className="pt-2">
              {voucherApplied ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[hsl(var(--trust-green))] font-medium flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> TRADE10 applied
                  </span>
                  <button onClick={() => setVoucherApplied(false)} className="text-xs text-muted-foreground underline">
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={voucher}
                    onChange={(e) => setVoucher(e.target.value.toUpperCase())}
                    placeholder="Enter voucher code"
                    size={1}
                    className="flex-1 min-w-0 h-10 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
                  />
                  <button
                    onClick={() => voucher && setVoucherApplied(true)}
                    className="bg-[hsl(var(--brand-dark))] text-white font-heading text-[12px] font-medium uppercase tracking-wider px-4 rounded"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="space-y-1.5 pt-3 border-t border-border text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{fmtGBP(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-[hsl(var(--trust-green))]">
                <span>Discount</span>
                <span className="font-medium">−{fmtGBP(discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-medium">{shipping === 0 ? "FREE" : fmtGBP(shipping)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">VAT (20%)</span>
              <span className="font-medium">{fmtGBP(vat)}</span>
            </div>
            <div className="flex justify-between pt-2 mt-1 border-t border-border">
              <span className="font-heading text-sm font-medium uppercase tracking-wide text-[hsl(var(--brand-dark))]">Total</span>
              <span className="text-lg font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(total)}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckoutOrderSummary;
