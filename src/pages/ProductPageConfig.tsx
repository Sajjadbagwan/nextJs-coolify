import { useState } from "react";
import { Minus, Plus, ChevronDown, Tag, ArrowLeft } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductLayout from "@/components/ProductLayout";
import StickyAddToCart from "@/components/StickyAddToCart";
import { fmtGBP } from "@/lib/format";
import legraboxInternalGlass from "@/assets/blum/products/legrabox-internal-glass-orion.jpg";
import legraboxC from "@/assets/blum/products/legrabox-c-stainless.jpg";
import legraboxFront from "@/assets/blum/products/legrabox-front-bracket.jpg";

// Progressive option steps (matches desktop)
const assemblyOpts = ["Pre-Assembled", "Flat-Pack"];
const nominalLengths = ["270mm", "300mm", "350mm", "400mm", "450mm", "500mm", "550mm", "600mm"];
const cabinetWidths = ["300mm", "400mm", "450mm", "500mm", "600mm", "800mm", "900mm", "1000mm", "1200mm"];
const loadRatings = ["40kg", "70kg"];

// Tiered pricing (inc VAT, per drawer)
const tiers = [
  { label: "1 - 2", min: 1, max: 2, price: 83.57 },
  { label: "3 - 4", min: 3, max: 4, price: 80.51 },
  { label: "5+", min: 5, max: Infinity, price: 78.83 },
];

const exVat = (n: number) => n / 1.2;

const product = {
  brand: "Blum",
  name: "LEGRABOX M-Height (90.5mm) Internal Drawer with Glass — Orion Grey",
  sku: "LBX-M-INT-GLS-OG",
  description:
    "LEGRABOX M-height internal drawer with clear glass design elements in Orion Grey. Configure assembly, nominal length, cabinet width and load rating to suit your build — each drawer is supplied as a complete kit with sides, back, front fixings and integrated BLUMOTION soft-close. Volume discounts apply automatically.",
  images: [legraboxInternalGlass, legraboxC, legraboxFront],
  specs: [
    { label: "Range", value: "LEGRABOX free" },
    { label: "Height", value: "M (90.5mm)" },
    { label: "Colour", value: "Orion Grey Matt" },
    { label: "Design Element", value: "Clear Glass" },
    { label: "BLUMOTION", value: "Yes — integrated" },
    { label: "Material", value: "Steel with powder finish" },
  ],
  features: [
    "Genuine Blum LEGRABOX M-height internal drawer",
    "Clear glass design elements for a premium finish",
    "Integrated BLUMOTION soft-close as standard",
    "Choose Pre-Assembled or Flat-Pack to suit your workflow",
    "Tested to 100,000 opening cycles",
  ],
};

interface SelectRowProps {
  label: string;
  value: string | null;
  options: string[];
  onSelect: (v: string) => void;
  disabled?: boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const SelectRow = ({ label, value, options, onSelect, disabled, open, setOpen }: SelectRowProps) => (
  <div>
    <button
      onClick={() => !disabled && setOpen(!open)}
      disabled={disabled}
      className={`w-full flex items-center justify-between border rounded-md overflow-hidden transition-colors ${
        disabled ? "border-border bg-muted/30 opacity-50" : "border-border bg-card"
      }`}
    >
      <span className={`flex-1 text-left px-3 py-3 text-sm ${value ? "text-foreground font-medium" : "text-muted-foreground"}`}>
        {value ?? label}
      </span>
      <span className="bg-[hsl(var(--brand-dark))] text-primary-foreground px-3 py-3 flex items-center justify-center">
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </span>
    </button>
    {open && !disabled && (
      <div className="mt-1 border border-border rounded-md bg-card overflow-hidden">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => {
              onSelect(o);
              setOpen(false);
            }}
            className={`w-full text-left px-3 py-2.5 text-sm border-b border-border last:border-b-0 ${
              value === o ? "bg-[hsl(var(--brand-mid))]/10 text-[hsl(var(--brand-mid))] font-medium" : "text-foreground"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    )}
  </div>
);

const ProductPageConfig = () => {
  const [assembly, setAssembly] = useState<string | null>(null);
  const [length, setLength] = useState<string | null>(null);
  const [width, setWidth] = useState<string | null>(null);
  const [load, setLoad] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const currentTier = tiers.find((t) => qty >= t.min && qty <= t.max)!;
  const unitInc = currentTier.price;
  const totalInc = unitInc * qty;
  const configured = !!(assembly && length && width && load);

  const setOpen = (i: number) => (v: boolean) => setOpenIdx(v ? i : null);

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-28">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Blum", to: "#" }, { label: "LEGRABOX", to: "/category" }, { label: "Internal Drawer with Glass" }]} />

      <ProductLayout
        product={product}
        loyaltyPrice={exVat(unitInc) * qty}
        stockBadge={
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--trust-green))] animate-pulse" />
            <span className="text-sm font-semibold text-[hsl(var(--trust-green))]">In Stock</span>
          </div>
        }
        priceBlock={
          configured ? (
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[hsl(var(--brand-dark))]">{fmtGBP(totalInc)}</span>
                <span className="text-xs text-muted-foreground">inc VAT</span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              Configure your options below to see pricing.
            </p>
          )
        }
        optionsBlock={
          <div className="space-y-3 pt-1">
            <p className="font-heading text-[12px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider">
              Please configure your options:
            </p>

            <SelectRow
              label="Select Assembly"
              value={assembly}
              options={assemblyOpts}
              onSelect={(v) => { setAssembly(v); setLength(null); setWidth(null); setLoad(null); }}
              open={openIdx === 0}
              setOpen={setOpen(0)}
            />
            <SelectRow
              label="Select Nominal Length"
              value={length}
              options={nominalLengths}
              onSelect={(v) => { setLength(v); setWidth(null); setLoad(null); }}
              disabled={!assembly}
              open={openIdx === 1}
              setOpen={setOpen(1)}
            />
            <SelectRow
              label="Select Cabinet Width"
              value={width}
              options={cabinetWidths}
              onSelect={(v) => { setWidth(v); setLoad(null); }}
              disabled={!length}
              open={openIdx === 2}
              setOpen={setOpen(2)}
            />
            <SelectRow
              label="Select Load Rating"
              value={load}
              options={loadRatings}
              onSelect={setLoad}
              disabled={!width}
              open={openIdx === 3}
              setOpen={setOpen(3)}
            />

            {/* Tier table — appears once configured */}
            {configured && (
              <div className="mt-2 bg-[hsl(var(--brand-bg))] rounded-lg overflow-hidden border border-border">
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
                        <tr key={t.min} className={`border-t border-border ${active ? "bg-[hsl(var(--brand-mid))]/5" : ""}`}>
                          <td className="px-3 py-2.5 text-foreground">{t.label}</td>
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
            )}

            {/* Qty — sits under the pricing grid */}
            {configured && (
              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm font-medium text-foreground">Qty:</span>
                <div className="flex items-center border border-border rounded-md">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="touch-target px-3" aria-label="Decrease"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="touch-target px-3" aria-label="Increase"><Plus className="w-4 h-4" /></button>
                </div>
                <span className="text-xs text-muted-foreground">drawers</span>
              </div>
            )}
          </div>
        }
      />

      <MobileFooter />
      <StickyAddToCart total={exVat(unitInc) * qty} qty={qty} />
    </div>
  );
};

export default ProductPageConfig;
