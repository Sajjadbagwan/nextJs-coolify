import { useState } from "react";
import { ArrowLeft, ShoppingCart, Minus, Plus, Truck, RotateCcw, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import productDrill from "@/assets/product-drill.jpg";
import RecentlyViewed from "@/components/RecentlyViewed";
import ProductLoyaltyAd from "@/components/ProductLoyaltyAd";
import { fmtGBP, incVat } from "@/lib/format";

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const [specsOpen, setSpecsOpen] = useState(false);
  const [descOpen, setDescOpen] = useState(true);

  const product = {
    name: "Festool T 18+3 HPC 4.0 I-Plus Cordless Drill",
    price: 329.0,
    oldPrice: 369.0,
    sku: "576446",
    brand: "Festool",
    inStock: true,
    images: [productDrill, productDrill, productDrill],
    description:
      "The Festool T 18+3 cordless drill is the perfect tool for demanding drilling and screwdriving tasks. With its powerful EC-TEC brushless motor and compact design, it delivers outstanding performance in any situation. Includes 2x 4.0Ah batteries, charger, and Systainer.",
    specs: [
      { label: "Voltage", value: "18V" },
      { label: "Battery", value: "4.0 Ah Li-Ion" },
      { label: "Max Torque", value: "60 Nm" },
      { label: "Weight", value: "1.7 kg" },
      { label: "Chuck", value: "13mm keyless" },
      { label: "Speed", value: "0-400 / 0-1400 RPM" },
    ],
  };

  const [activeImg, setActiveImg] = useState(0);
  const saving = product.oldPrice - product.price;

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto pb-28">
      <MobileHeader />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-4 py-2 bg-muted">
        <Link to="/" className="text-primary touch-target flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-xs">Back</span>
        </Link>
        <span className="text-xs text-muted-foreground">/ Powertools / Drills</span>
      </div>

      {/* Image gallery */}
      <div className="relative bg-card">
        <img
          src={product.images[activeImg]}
          alt={product.name}
          className="w-full h-72 object-contain p-4"
          width={512}
          height={512}
        />
        {saving > 0 && (
          <span className="absolute top-3 left-3 bg-sale text-sale-foreground text-xs font-bold px-2 py-1 rounded-md">
            Save £{saving.toFixed(0)}
          </span>
        )}
        <div className="flex justify-center gap-2 pb-3">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-2 h-2 rounded-full ${i === activeImg ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>

      {/* Product info */}
      <div className="px-4 py-4 space-y-3">
        <div>
          <p className="text-xs text-primary font-semibold uppercase">{product.brand}</p>
          <h1 className="text-lg font-bold text-foreground leading-snug mt-0.5">
            {product.name}
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Product Code: {product.sku}</p>
        </div>

        {/* Price */}
        <div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-foreground">
              {fmtGBP(incVat(product.price))}
            </span>
            <span className="text-xs text-muted-foreground mb-1">inc VAT</span>
            {product.oldPrice && (
              <span className="text-sm font-bold text-sale ml-1">
                Save £{saving.toFixed(0)}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {fmtGBP(product.price)} ex VAT
            {product.oldPrice && (
              <span className="line-through ml-2">{fmtGBP(product.oldPrice)}</span>
            )}
          </p>
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-trust" />
          <span className="text-sm font-medium text-trust">In Stock</span>
          <span className="text-xs text-muted-foreground">· Usually dispatched same day</span>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">Qty:</span>
          <div className="flex items-center border border-border rounded-lg">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="touch-target flex items-center justify-center px-3" aria-label="Decrease quantity">
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-sm font-medium">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="touch-target flex items-center justify-center px-3" aria-label="Increase quantity">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="flex flex-col items-center gap-1 p-2 bg-muted rounded-lg">
            <Truck className="w-5 h-5 text-primary" />
            <span className="text-[12px] text-center font-medium text-muted-foreground">Free Delivery £40+</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-muted rounded-lg">
            <RotateCcw className="w-5 h-5 text-primary" />
            <span className="text-[12px] text-center font-medium text-muted-foreground">30 Day Returns</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-muted rounded-lg">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-[12px] text-center font-medium text-muted-foreground">Price Match</span>
          </div>
        </div>

        <ProductLoyaltyAd price={product.price} />

        {/* Description accordion */}
        <div className="border-t border-border">
          <button onClick={() => setDescOpen(!descOpen)} className="flex items-center justify-between w-full py-3 touch-target">
            <span className="text-sm font-bold text-foreground">Description</span>
            {descOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {descOpen && (
            <p className="text-sm text-muted-foreground leading-relaxed pb-3">{product.description}</p>
          )}
        </div>

        {/* Specs accordion */}
        <div className="border-t border-border">
          <button onClick={() => setSpecsOpen(!specsOpen)} className="flex items-center justify-between w-full py-3 touch-target">
            <span className="text-sm font-bold text-foreground">Specifications</span>
            {specsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {specsOpen && (
            <div className="pb-3 space-y-2">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-medium text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <RecentlyViewed />

      <MobileFooter />

      {/* Sticky Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border px-4 py-3 safe-bottom max-w-lg mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[12px] uppercase tracking-wider text-muted-foreground">Total inc VAT</p>
            <span className="text-lg font-bold text-foreground">
              {fmtGBP(incVat(product.price * qty))}
            </span>
            {qty > 1 && (
              <span className="text-xs text-muted-foreground ml-1">({qty})</span>
            )}
          </div>
          <button className="flex-1 bg-primary text-primary-foreground font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 touch-target active:scale-[0.97] transition-transform">
            <ShoppingCart className="w-5 h-5" />
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
