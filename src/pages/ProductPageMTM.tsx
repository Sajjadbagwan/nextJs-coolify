import { useState } from "react";
import { Minus, Plus, ChevronDown, Ruler } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductLayout from "@/components/ProductLayout";
import StickyAddToCart from "@/components/StickyAddToCart";
import { fmtGBP } from "@/lib/format";
import drawerBaseImg from "@/assets/blum/products/legrabox-drawerbase.png";
import legraboxC from "@/assets/blum/products/legrabox-c-stainless.jpg";
import legraboxFront from "@/assets/blum/products/legrabox-front-bracket.jpg";

// Step 1 — pick a nominal length (drives valid cabinet width range)
const nominalLengths = ["270mm", "300mm", "350mm", "400mm", "450mm", "500mm", "550mm", "600mm"];

// Cabinet width ranges allowed per nominal length (mm, inside cabinet)
const widthRangeFor = (nl: string): { min: number; max: number } => {
  const n = parseInt(nl, 10);
  return { min: 200, max: n + 200 };
};

// Flat per-base price (inc VAT)
const UNIT_INC = 18.95;

const exVat = (n: number) => n / 1.2;

const product = {
  brand: "Blum",
  name: "LEGRABOX Bottom of Drawer — Made to Measure",
  sku: "LBXBASE300D",
  description:
    "Made-to-measure LEGRABOX drawer base panels, cut to your exact cabinet width. Choose your nominal drawer length, then enter the inside cabinet width in millimetres — we'll cut and dispatch within 3 working days. Each base is supplied ready to drop into your LEGRABOX sides.",
  images: [drawerBaseImg, legraboxC, legraboxFront],
  specs: [
    { label: "Range", value: "LEGRABOX pure / free" },
    { label: "Material", value: "18mm white melamine MFC" },
    { label: "Edging", value: "ABS edged on visible sides" },
    { label: "Cut Tolerance", value: "± 0.5 mm" },
    { label: "Lead Time", value: "3 working days" },
  ],
  features: [
    "Made-to-measure in our UK cutting facility",
    "Cut to ± 0.5 mm tolerance for a perfect fit",
    "Edged in matching ABS on all visible faces",
    "Compatible with LEGRABOX pure and free",
    "Dispatched within 3 working days",
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

const ProductPageMTM = () => {
  const [length, setLength] = useState<string | null>(null);
  const [widthInput, setWidthInput] = useState("");
  const [qty, setQty] = useState(1);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const widthNum = parseInt(widthInput, 10);
  const range = length ? widthRangeFor(length) : null;
  const widthValid =
    !!range && !isNaN(widthNum) && widthNum >= range.min && widthNum <= range.max;
  const configured = !!length && widthValid;

  const unitInc = UNIT_INC;
  const totalInc = unitInc * qty;

  const setOpen = (i: number) => (v: boolean) => setOpenIdx(v ? i : null);

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-28">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Blum", to: "#" }, { label: "LEGRABOX", to: "/category" }, { label: "Bottom of Drawer · Made to Measure" }]} />

      <ProductLayout
        product={product}
        loyaltyPrice={exVat(unitInc) * qty}
        stockBadge={
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--trust-green))] animate-pulse" />
            <span className="text-sm font-semibold text-[hsl(var(--trust-green))]">Made to Order</span>
            
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
              Enter your measurements below to see pricing.
            </p>
          )
        }
        optionsBlock={
          <div className="space-y-3 pt-1">
            <p className="font-heading text-[12px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider">
              Please configure your options:
            </p>

            {/* Step 1 — Nominal length dropdown */}
            <SelectRow
              label="Select Nominal Length"
              value={length}
              options={nominalLengths}
              onSelect={(v) => { setLength(v); setWidthInput(""); }}
              open={openIdx === 0}
              setOpen={setOpen(0)}
            />

            {/* Step 2 — free-text cabinet width (revealed after step 1) */}
            <div>
              <label
                className={`block ${!length ? "opacity-50" : ""}`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-heading text-[12px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[hsl(var(--brand-mid))]" />
                    Cabinet Width (mm)
                  </span>
                  {range && (
                    <span className="text-[12px] text-muted-foreground">
                      {range.min} – {range.max} mm
                    </span>
                  )}
                </div>
                <div className="flex items-stretch border rounded-md overflow-hidden border-border bg-card">
                  <input
                    type="number"
                    inputMode="numeric"
                    disabled={!length}
                    value={widthInput}
                    onChange={(e) => setWidthInput(e.target.value)}
                    placeholder={length ? `e.g. ${widthRangeFor(length).min + 100}` : "Select nominal length first"}
                    className="flex-1 min-w-0 px-3 py-3 text-sm bg-transparent focus:outline-none disabled:cursor-not-allowed"
                  />
                  <span className="bg-[hsl(var(--brand-dark))] text-primary-foreground px-4 flex items-center justify-center text-sm font-medium">
                    mm
                  </span>
                </div>
                {length && widthInput && !widthValid && (
                  <p className="text-[12px] text-[hsl(var(--sale-red))] mt-1.5">
                    Enter a width between {range!.min} and {range!.max} mm
                  </p>
                )}
              </label>
            </div>


            {/* Qty — under the pricing grid */}
            {configured && (
              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm font-medium text-foreground">Qty:</span>
                <div className="flex items-center border border-border rounded-md">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="touch-target px-3" aria-label="Decrease"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="touch-target px-3" aria-label="Increase"><Plus className="w-4 h-4" /></button>
                </div>
                <span className="text-xs text-muted-foreground">bases</span>
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

export default ProductPageMTM;
