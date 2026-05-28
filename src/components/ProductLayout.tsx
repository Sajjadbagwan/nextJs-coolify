import { ReactNode, useState } from "react";
import { Heart, Share2, ChevronUp, ChevronDown, Truck, RotateCcw, ShieldCheck, HelpCircle, ShieldCheck as Shield, Building2 } from "lucide-react";
import productDrill from "@/assets/product-drill.jpg";
import ProductLoyaltyAd from "@/components/ProductLoyaltyAd";
import RecentlyViewed from "@/components/RecentlyViewed";
import WhyIsaacLord from "@/components/WhyIsaacLord";
import { getBrandLogo } from "@/lib/brand-logos";

export interface ProductMeta {
  brand: string;
  name: string;
  sku: string;
  /** kept optional for backwards compat but no longer rendered */
  rating?: number;
  reviews?: number;
  images?: string[];
  description: string;
  specs: { label: string; value: string }[];
  features?: string[];
  downloads?: { label: string; size?: string }[];
}

interface Props {
  product: ProductMeta;
  /** stock badge area (above price) */
  stockBadge: ReactNode;
  /** price block (variant-specific) */
  priceBlock: ReactNode;
  /** options/qty area (variant-specific) */
  optionsBlock?: ReactNode;
  /** ex-VAT base price used for loyalty points estimate */
  loyaltyPrice: number;
}

const defaultFeatures = [
  "Engineered for trade and professional installations",
  "Sourced direct from the manufacturer",
  "Genuine OEM part with full UK warranty",
  "In stock at our UK distribution centre",
];

const defaultDownloads = [
  { label: "Product datasheet (PDF)", size: "1.2 MB" },
  { label: "Installation guide (PDF)", size: "860 KB" },
];

const ProductLayout = ({ product, stockBadge, priceBlock, optionsBlock, loyaltyPrice }: Props) => {
  const images = product.images?.length ? product.images : [productDrill, productDrill, productDrill];
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<Record<string, boolean>>({ Description: true });

  const features = product.features ?? defaultFeatures;
  const downloads = product.downloads ?? defaultDownloads;
  const brandLogo = getBrandLogo(product.brand);

  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  const sections: { title: string; body: ReactNode }[] = [
    {
      title: "Description",
      body: (
        <div className="pb-3 space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          {features.length > 0 && (
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-[hsl(var(--brand-mid))] mt-1">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ),
    },
    {
      title: "Technical",
      body: (
        <div className="pb-3 divide-y divide-border">
          {product.specs.map((s) => (
            <div key={s.label} className="flex justify-between py-2 text-sm">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-medium text-foreground text-right">{s.value}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "FAQ's",
      body: (
        <div className="pb-3 space-y-2.5">
          {[
            { q: "Is this product genuine and UK stock?", a: `Yes — we are an authorised ${product.brand} stockist. All items are genuine, UK-stocked and backed by the full manufacturer warranty.` },
            { q: "Can I get a trade discount?", a: "Yes — apply for a free trade account for tiered discounts, 30-day credit terms and dedicated account management." },
            { q: "Do you offer technical support?", a: "Our product specialists can help with sizing, configuration and installation. Call 01494 835200 or use live chat." },
          ].map((f) => (
            <details key={f.q} className="border border-border rounded-md p-3 bg-[hsl(var(--brand-bg))]">
              <summary className="cursor-pointer text-sm font-medium text-foreground flex items-start gap-2 list-none">
                <HelpCircle className="w-4 h-4 text-[hsl(var(--brand-mid))] flex-shrink-0 mt-0.5" />
                <span>{f.q}</span>
              </summary>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed pl-6">{f.a}</p>
            </details>
          ))}
        </div>
      ),
    },
    {
      title: "Brand",
      body: (
        <div className="pb-3 text-sm text-muted-foreground space-y-2 leading-relaxed">
          <div className="flex items-center gap-2">
            {brandLogo ? (
              <img src={brandLogo} alt={`${product.brand} logo`} className="h-8 w-auto object-contain" />
            ) : (
              <>
                <Building2 className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
                <span className="font-medium text-foreground">{product.brand}</span>
              </>
            )}
          </div>
          <p>{product.brand} is a globally trusted manufacturer of professional-grade hardware and tooling, recognised for engineering quality and long-term reliability.</p>
          <p>Isaac Lord has been a long-standing UK distribution partner — stocking the full range with same-day dispatch from our distribution centre.</p>
          <button className="mt-2 font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
            Shop all {product.brand} →
          </button>
        </div>
      ),
    },
    {
      title: "Warranty",
      body: (
        <div className="pb-3 text-sm text-muted-foreground space-y-2 leading-relaxed">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
            <span className="font-medium text-foreground">Manufacturer-backed warranty</span>
          </div>
          <p>All {product.brand} products carry the full manufacturer warranty against defects in materials and workmanship.</p>
          <p>Isaac Lord is an authorised {product.brand} stockist — register your product with the manufacturer to activate cover.</p>
          <p className="text-xs">For warranty claims, contact our trade desk on <a href="tel:01494835200" className="text-[hsl(var(--brand-mid))] underline">01494 835200</a>.</p>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Image gallery */}
      <div className="relative bg-card">
        <img
          src={images[active]}
          alt={product.name}
          className="w-full h-80 object-contain p-4"
          width={512}
          height={512}
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button aria-label="Wishlist" className="w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center active:scale-95">
            <Heart className="w-4 h-4 text-[hsl(var(--brand-dark))]" />
          </button>
          <button aria-label="Share" className="w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center active:scale-95">
            <Share2 className="w-4 h-4 text-[hsl(var(--brand-dark))]" />
          </button>
        </div>
        <div className="flex justify-center gap-1.5 pb-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-[hsl(var(--brand-mid))]" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="px-4 pb-4 flex gap-2 overflow-x-auto scrollbar-none">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 flex-shrink-0 rounded border-2 overflow-hidden bg-white ${i === active ? "border-[hsl(var(--brand-mid))]" : "border-border"}`}
          >
            <img src={src} alt="" className="w-full h-full object-contain p-1" />
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="px-4 space-y-3">
        <div>
          {brandLogo ? (
            <a href="#" aria-label={`Shop ${product.brand}`} className="inline-block">
              <img
                src={brandLogo}
                alt={`${product.brand} logo`}
                className="h-8 w-auto object-contain"
              />
            </a>
          ) : (
            <p className="text-[12px] uppercase tracking-widest text-[hsl(var(--brand-mid))] font-heading font-medium">
              {product.brand}
            </p>
          )}
          <h1 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] leading-tight mt-2">
            {product.name}
          </h1>
          <p className="text-[12px] text-muted-foreground mt-2">Product Code: {product.sku}</p>
        </div>

        {stockBadge}
        {priceBlock}
        {optionsBlock}

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="flex flex-col items-center gap-1 p-2.5 bg-[hsl(var(--brand-bg))] rounded">
            <Truck className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
            <span className="text-[12px] text-center font-medium text-foreground leading-tight">Free £40+</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2.5 bg-[hsl(var(--brand-bg))] rounded">
            <RotateCcw className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
            <span className="text-[12px] text-center font-medium text-foreground leading-tight">30-Day Returns</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2.5 bg-[hsl(var(--brand-bg))] rounded">
            <ShieldCheck className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
            <span className="text-[12px] text-center font-medium text-foreground leading-tight">Price Match</span>
          </div>
        </div>

        {/* Loyalty advert */}
        <ProductLoyaltyAd price={loyaltyPrice} />

        {/* Accordions */}
        {sections.map((a) => {
          const isOpen = !!open[a.title];
          return (
            <div key={a.title} className="border-t border-border">
              <button onClick={() => toggle(a.title)} className="flex items-center justify-between w-full py-3.5 touch-target">
                <span className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">{a.title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-[hsl(var(--brand-mid))]" /> : <ChevronDown className="w-4 h-4 text-[hsl(var(--brand-mid))]" />}
              </button>
              {isOpen && a.body}
            </div>
          );
        })}
      </div>

      <RecentlyViewed />
      <WhyIsaacLord />
      
    </>
  );
};

export default ProductLayout;
