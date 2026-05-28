import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductLayout from "@/components/ProductLayout";
import StickyAddToCart from "@/components/StickyAddToCart";
import { fmtGBP, incVat } from "@/lib/format";
import legraboxImg from "@/assets/blum/products/legrabox-orion-500.jpg";
import legraboxC from "@/assets/blum/products/legrabox-c-stainless.jpg";
import legraboxFront from "@/assets/blum/products/legrabox-front-bracket.jpg";

const product = {
  brand: "Blum",
  name: "LEGRABOX Orion Grey 500mm M-Height Drawer Kit (No Back) Pack of 40",
  sku: "770M5002S-OG-40",
  description:
    "Bulk pack of 40 LEGRABOX M-height drawer kits in Orion Grey, 500mm length. Each kit comprises a pair of sides with integrated BLUMOTION soft-close, ready to assemble. Backs and fronts sold separately.",
  images: [legraboxImg, legraboxC, legraboxFront],
  specs: [
    { label: "Range", value: "LEGRABOX pure" },
    { label: "Height", value: "M (90.5mm)" },
    { label: "Nominal Length", value: "500mm" },
    { label: "Colour", value: "Orion Grey Matt" },
    { label: "Load Rating", value: "40 kg" },
    { label: "Pack Size", value: "40 kits" },
  ],
  features: [
    "Integrated BLUMOTION soft-close on every kit",
    "Tool-free TIP-ON optional add-on compatibility",
    "Tested to 100,000 opening cycles",
    "Genuine Blum Austria-manufactured product",
    "Bulk pack saves up to 18% vs. single-unit pricing",
  ],
  downloads: [
    { label: "LEGRABOX pure datasheet (PDF)", size: "1.4 MB" },
    { label: "Drilling pattern guide (PDF)", size: "920 KB" },
    { label: "Assembly instructions (PDF)", size: "2.1 MB" },
  ],
};

const ProductPageSimple = () => {
  const [qty, setQty] = useState(1);
  const price = 1718.0;

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-28">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Blum", to: "#" }, { label: "LEGRABOX", to: "/category" }, { label: "500mm Pack" }]} />

      <ProductLayout
        product={product}
        loyaltyPrice={price}
        stockBadge={
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--trust-green))] animate-pulse" />
            <span className="text-sm font-semibold text-[hsl(var(--trust-green))]">In Stock</span>
            <span className="text-xs text-muted-foreground">· Ships same day if ordered by 3pm</span>
          </div>
        }
        priceBlock={
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(incVat(price))}</span>
              <span className="text-xs text-muted-foreground">inc VAT</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{fmtGBP(price)} ex VAT</p>
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
            <span className="text-xs text-muted-foreground">packs</span>
          </div>
        }
      />

      <MobileFooter />
      <StickyAddToCart total={price * qty} qty={qty} />
    </div>
  );
};

export default ProductPageSimple;
