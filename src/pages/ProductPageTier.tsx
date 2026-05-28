import { useState } from "react";
import { Minus, Plus, Tag, ArrowLeft } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductLayout from "@/components/ProductLayout";
import StickyAddToCart from "@/components/StickyAddToCart";
import { fmtGBP } from "@/lib/format";
import bulkImg from "@/assets/products/reisser-pan-pozi-bulk.jpg";
import closeupImg from "@/assets/products/reisser-pan-pozi-closeup.jpg";
import singleImg from "@/assets/products/reisser-pan-pozi-single.jpg";

// Tier prices are INC VAT (per box of 8,000)
const tiers = [
  { label: "1 - 2", min: 1, max: 2, price: 278.84 },
  { label: "3 - 4", min: 3, max: 4, price: 275.48 },
  { label: "5", min: 5, max: 5, price: 272.12 },
  { label: "6", min: 6, max: 6, price: 268.76 },
  { label: "7 - 9", min: 7, max: 9, price: 263.72 },
  { label: "10 - 19", min: 10, max: 19, price: 258.68 },
  { label: "20+", min: 20, max: Infinity, price: 248.6 },
];

const exVat = (n: number) => n / 1.2;

const product = {
  brand: "Reisser",
  name: "5.0 x 20 Pan Pozi Yellow Screw — Bulk 8000 per Box",
  sku: "5020PYBBOX",
  description:
    "Reisser pan-head pozi-drive screws with a yellow zinc passivated finish, supplied in bulk boxes of 8,000. The sharp twin-thread starts cleanly in softwood, MDF and chipboard, and the pan head sits flush against fittings, brackets and hinges — ideal for cabinet assembly, joinery and high-volume production. Buy more boxes to unlock lower per-box pricing.",
  images: [bulkImg, closeupImg, singleImg],
  specs: [
    { label: "Diameter", value: "5.0 mm" },
    { label: "Length", value: "20 mm" },
    { label: "Head", value: "Pan / Pozi #2" },
    { label: "Finish", value: "Yellow Zinc Passivated" },
    { label: "Box Quantity", value: "8,000" },
    { label: "Material", value: "Hardened Steel" },
    { label: "Application", value: "Softwood, MDF, Chipboard" },
  ],
  features: [
    "Sharp twin-thread for fast starts in softwood and board",
    "Yellow zinc passivation for indoor corrosion resistance",
    "Pozi #2 recess for reduced cam-out and longer bit life",
    "Pan head sits flush against fittings, brackets and hinges",
    "Bulk box of 8,000 — trade-priced for high-volume use",
  ],
};

const ProductPageTier = () => {
  const [qty, setQty] = useState(1);
  const currentTier = tiers.find((t) => qty >= t.min && qty <= t.max)!;
  const baseSaving = ((tiers[0].price - currentTier.price) / tiers[0].price) * 100;

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-28">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Fixings", to: "#" }, { label: "Screws", to: "/category" }, { label: "Pozi Bulk" }]} />

      <ProductLayout
        product={product}
        loyaltyPrice={exVat(currentTier.price) * qty}
        stockBadge={
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--trust-green))]" />
            <span className="text-sm font-semibold text-[hsl(var(--trust-green))]">In Stock</span>
            
          </div>
        }
        priceBlock={
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(currentTier.price * qty)}</span>
              <span className="text-xs text-muted-foreground">inc VAT</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{fmtGBP(exVat(currentTier.price) * qty)} ex VAT · {qty > 1 ? `${qty} boxes` : "per box"}</p>

            {/* Tier table */}
            <div className="mt-3 bg-[hsl(var(--brand-bg))] rounded-lg overflow-hidden border border-border">
              <div className="flex items-center gap-2 px-3 py-2 bg-[hsl(var(--brand-mid))]/10 border-b border-border">
                <Tag className="w-3.5 h-3.5 text-[hsl(var(--brand-mid))]" />
                <span className="font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
                  Volume Pricing (inc VAT)
                </span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[hsl(var(--brand-mid))]/5 border-b border-border">
                    <th className="px-3 py-2 text-left font-heading text-[12px] font-semibold text-[hsl(var(--brand-dark))] uppercase tracking-wider">QTY</th>
                    <th className="px-3 py-2 text-right font-heading text-[12px] font-semibold text-[hsl(var(--brand-dark))] uppercase tracking-wider">Price (each Inc. VAT)</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t) => {
                    const active = currentTier.min === t.min;
                    return (
                      <tr
                        key={t.min}
                        className={`border-t border-border ${active ? "bg-[hsl(var(--brand-mid))]/5" : ""}`}
                      >
                        <td className="px-3 py-2.5 text-foreground">
                          {t.label}
                        </td>
                        <td className="px-3 py-2.5 text-right">
                          <span className={`font-bold ${active ? "text-[hsl(var(--brand-mid))]" : "text-foreground"}`}>
                            {fmtGBP(t.price)}
                          </span>
                          {active && <ArrowLeft className="inline-block w-4 h-4 ml-1.5 text-[hsl(var(--brand-mid))]" />}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        }
        optionsBlock={
          <div className="flex items-center gap-3 pt-1">
            <span className="text-sm font-medium text-foreground">Qty:</span>
            <div className="flex items-center border border-border rounded-md">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="touch-target px-3" aria-label="Decrease"><Minus className="w-4 h-4" /></button>
              <span className="w-10 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="touch-target px-3" aria-label="Increase"><Plus className="w-4 h-4" /></button>
            </div>
            <span className="text-xs text-muted-foreground">boxes</span>
          </div>
        }
      />

      <MobileFooter />
      <StickyAddToCart total={exVat(currentTier.price) * qty} qty={qty} />
    </div>
  );
};

export default ProductPageTier;
