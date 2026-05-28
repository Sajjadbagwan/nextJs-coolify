import { useState } from "react";
import { Mail } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductLayout from "@/components/ProductLayout";
import StickyAddToCart from "@/components/StickyAddToCart";
import { fmtGBP, incVat } from "@/lib/format";
import bulkImg from "@/assets/products/reisser-pan-pozi-bulk.jpg";
import closeupImg from "@/assets/products/reisser-pan-pozi-closeup.jpg";
import singleImg from "@/assets/products/reisser-pan-pozi-single.jpg";

const PRICE = 232.37; // ex VAT, per box

const product = {
  brand: "Reisser",
  name: "5.0 x 20 Pan Pozi Yellow Screw — Bulk 8000 per Box",
  sku: "5020PYBBOX",
  description:
    "Reisser pan-head pozi-drive screws with a yellow zinc passivated finish, supplied in bulk boxes of 8,000. The sharp twin-thread starts cleanly in softwood, MDF and chipboard, and the pan head sits flush against fittings, brackets and hinges — ideal for cabinet assembly, joinery and high-volume production.",
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

const ProductPageOutOfStock = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-28">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Fixings", to: "#" }, { label: "Screws", to: "/category" }, { label: "Pozi Bulk" }]} />

      <ProductLayout
        product={product}
        loyaltyPrice={PRICE}
        stockBadge={
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--sale-red))]" />
            <span className="text-sm font-semibold text-[hsl(var(--sale-red))]">Out of Stock</span>
          </div>
        }
        priceBlock={
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(incVat(PRICE))}</span>
              <span className="text-xs text-muted-foreground">inc VAT</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{fmtGBP(PRICE)} ex VAT · per box</p>
          </div>
        }
        optionsBlock={
          <div className="space-y-3 pt-1">
            <div className="bg-[hsl(var(--brand-bg))] rounded-lg p-4 border border-border">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[hsl(var(--brand-mid))]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
                    Notify Me When Back
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">We'll email you the moment stock arrives. No spam.</p>

                  {submitted ? (
                    <p className="mt-3 text-sm text-[hsl(var(--trust-green))] font-medium">✓ You'll be notified at {email}</p>
                  ) : (
                    <form
                      onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
                      className="mt-3 flex gap-2"
                    >
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        size={1}
                        className="flex-1 min-w-0 h-10 px-3 text-sm bg-card border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
                      />
                      <button type="submit" className="bg-[hsl(var(--brand-mid))] text-primary-foreground font-heading text-[12px] font-medium uppercase tracking-wider px-4 rounded">
                        Notify
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        }
      />

      <MobileFooter />
      <StickyAddToCart total={PRICE} qty={1} outOfStock />
    </div>
  );
};

export default ProductPageOutOfStock;
