import { useState } from "react";
import { SlidersHorizontal, ArrowUpDown, X, Check, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductCard, { type ProductCardData } from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import imgLegrabox500 from "@/assets/blum/products/legrabox-orion-500.jpg";
import imgTandembox from "@/assets/blum/products/tandembox-antaro-white.jpg";
import imgMerivobox from "@/assets/blum/products/merivobox-grey.jpg";
import imgRunners from "@/assets/blum/products/tandem-runners.jpg";
import imgFrontBracket from "@/assets/blum/products/legrabox-front-bracket.jpg";
import imgAmbia from "@/assets/blum/products/ambia-line-divider.jpg";
import imgLegraboxC from "@/assets/blum/products/legrabox-c-stainless.jpg";
import imgServo from "@/assets/blum/products/servo-drive.jpg";

const products: ProductCardData[] = [
  { id: "legrabox-orion-500-m", name: "Blum LEGRABOX Orion Grey 500mm M-Height Drawer Kit (No Back) – Pack of 40", price: "£42.95", image: imgLegrabox500, badge: "Bestseller", stock: "in-stock" },
  { id: "legrabox-orion-450-m", name: "Blum LEGRABOX Orion Grey 450mm M-Height Drawer Kit (No Back)", price: "£40.50", image: imgLegrabox500, stock: "in-stock" },
  { id: "tandembox-antaro-450-d-white", name: "Blum TANDEMBOX Antaro D-Height 450mm Silk White Drawer Kit", price: "£38.50", oldPrice: "£44.00", image: imgTandembox, badge: "Sale", stock: "in-stock" },
  { id: "merivobox-m-indium-500", name: "Blum MERIVOBOX M-Height Indium Grey 500mm Drawer Kit", price: "£36.20", image: imgMerivobox, stock: "low-stock" },
  { id: "legrabox-c-stainless-500", name: "Blum LEGRABOX C-Height Stainless Steel 500mm High-Fronted Drawer Kit", price: "£58.00", image: imgLegraboxC, stock: "in-stock" },
  { id: "tandem-plus-blumotion-500-30kg", name: "Blum TANDEM Plus BLUMOTION 30kg 500mm Soft-Close Concealed Runners (Pair)", price: "£24.95", image: imgRunners, stock: "in-stock" },
  { id: "legrabox-front-fixing-bracket", name: "Blum LEGRABOX Front Fixing Bracket Set with Expando Connectors (Pair)", price: "£4.20", image: imgFrontBracket, stock: "in-stock" },
  { id: "ambia-line-cross-divider", name: "Blum AMBIA-LINE Cross Divider Wood Insert for LEGRABOX Drawers", price: "£12.40", image: imgAmbia, stock: "awaiting" },
  { id: "servo-drive-uno", name: "Blum SERVO-DRIVE uno Touch-to-Open Set for Single Drawer / Bin Pull-Out", price: "£189.00", image: imgServo, stock: "in-stock" },
  { id: "legrabox-orion-550-k", name: "Blum LEGRABOX Orion Grey 550mm K-Height Drawer Kit with Side Gallery", price: "£48.75", image: imgLegrabox500, stock: "in-stock" },
];

// Match desktop filter set – same order, same values
const filters: { name: string; values: string[] }[] = [
  { name: "Brand", values: ["Blum"] },
  { name: "Range", values: ["LEGRABOX", "TANDEMBOX Antaro", "TANDEMBOX Intivo", "MERIVOBOX", "METABOX", "MOVENTO", "TANDEM"] },
  { name: "Drawer Height", values: ["M (90.5mm)", "K (128.5mm)", "C (177mm)", "F (239.5mm)", "D (83mm)", "B (54mm)"] },
  { name: "Nominal Length", values: ["270mm", "300mm", "350mm", "400mm", "450mm", "500mm", "550mm", "600mm", "650mm"] },
  { name: "Colour / Finish", values: ["Orion Grey", "Silk White", "Stainless Steel", "Carbon Black", "Indium Grey", "Terra Black"] },
  { name: "Load Capacity", values: ["30kg", "40kg", "50kg", "70kg"] },
  { name: "Soft Close", values: ["BLUMOTION (Soft-Close)", "TIP-ON (Push-to-Open)", "SERVO-DRIVE (Electric)"] },
  { name: "Pack Size", values: ["Single", "Pair", "Pack of 10", "Pack of 40"] },
  { name: "Availability", values: ["In Stock", "Low Stock", "Awaiting Stock"] },
];

const sortOptions = ["Most Popular", "Price: Low to High", "Price: High to Low", "Newest", "Name A–Z", "Top Rated"];

const CategoryListing = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState(sortOptions[0]);
  const [active, setActive] = useState<string[]>(["LEGRABOX", "M (90.5mm)"]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);

  const toggle = (v: string) =>
    setActive((a) => (a.includes(v) ? a.filter((x) => x !== v) : [...a, v]));

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-8">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Blum", to: "#" }, { label: "Box Systems", to: "/category-landing" }, { label: "Drawer Kits" }]} />

      {/* Title */}
      <div className="px-4 py-4">
        <h1 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-tight">
          Blum Box Systems – Drawer Kits
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          Showing {products.length} of 142 products
        </p>
      </div>

      {/* Trade-account signposting (guest users) */}
      <div className="mx-4 mb-4">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--brand-dark))] to-[hsl(var(--brand-mid))] text-white shadow-md">
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/5" />
          <div className="absolute -right-2 -bottom-10 w-24 h-24 rounded-full bg-white/5" />

          <div className="relative p-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
              <UserPlus className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-heading font-semibold uppercase tracking-wide leading-none">
                  Trade Prices
                </p>
              </div>
              <p className="text-[12px] text-white/85 mt-1.5 leading-snug">
                Exclusive discounts, bulk pricing & 30-day credit terms.
              </p>
            </div>
            <Link
              to="#"
              className="flex-shrink-0 bg-white text-[hsl(var(--brand-dark))] text-[12px] font-heading font-bold uppercase tracking-wider px-3 py-2 rounded active:bg-white/90"
            >
              Apply →
            </Link>
          </div>
        </div>
      </div>

      {/* Active filter chips */}
      {active.length > 0 && (
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-none">
          {active.map((a) => (
            <button
              key={a}
              onClick={() => toggle(a)}
              className="flex-shrink-0 flex items-center gap-1.5 bg-[hsl(var(--brand-mid))]/10 text-[hsl(var(--brand-mid))] text-[12px] font-medium px-3 py-1.5 rounded-full"
            >
              {a}
              <X className="w-3 h-3" />
            </button>
          ))}
          <button
            onClick={() => setActive([])}
            className="flex-shrink-0 text-[12px] text-muted-foreground underline px-2"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Sticky filter/sort bar (2-up, no view switcher) */}
      <div className="sticky top-16 z-30 bg-background border-y border-border">
        <div className="grid grid-cols-2 divide-x divide-border">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center justify-center gap-2 py-3 text-[12px] font-heading font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider active:bg-muted"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filter
          </button>
          <button
            onClick={() => setSortOpen(true)}
            className="flex items-center justify-center gap-2 py-3 text-[12px] font-heading font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wider active:bg-muted"
          >
            <ArrowUpDown className="w-4 h-4" /> Sort: <span className="normal-case font-normal text-muted-foreground truncate max-w-[100px]">{sort}</span>
          </button>
        </div>
      </div>

      {/* Products – grid only */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3 items-stretch">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Load more */}
        <button className="w-full mt-6 border border-[hsl(var(--brand-mid))] text-[hsl(var(--brand-mid))] font-heading font-medium uppercase tracking-wider text-xs py-3.5 rounded">
          Load More Products
        </button>
      </section>

      {/* SEO / Category text content */}
      <section className="px-4 pb-6">
        <div className="bg-muted/40 rounded-lg p-4 border border-border">
          <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-2">
            About Blum Box Systems
          </h2>
          <div className="text-[12px] text-foreground/80 leading-relaxed space-y-2">
            <p>
              Blum's box systems are the gold standard for kitchen and furniture drawers across the UK.
              From the slim-line, premium <strong>LEGRABOX</strong> through to the trade-favourite
              <strong> TANDEMBOX Antaro</strong> and the cost-effective <strong>METABOX</strong>,
              every drawer kit ships with Blum's lifetime guarantee and BLUMOTION soft-close as standard.
            </p>
            <p>
              As an authorised Blum distributor since 1968, Isaac Lord stocks the full range of drawer
              kits, runners, front and back fixings, inner drawers and AMBIA-LINE / ORGA-LINE
              accessories — with next-day delivery on stocked lines and bulk trade pricing on packs of 40.
            </p>
            <p>
              Not sure which drawer height or runner length you need? Use the filters above to narrow by
              range, height (M, K, C, F), nominal length and finish, or
              <Link to="#" className="text-[hsl(var(--brand-mid))] underline ml-1">contact our trade team</Link>
              for free project quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-background flex flex-col">
            <div className="bg-[hsl(var(--brand-dark))] px-4 h-16 flex items-center justify-between flex-shrink-0">
              <h2 className="font-heading text-base font-medium text-white uppercase tracking-wide">Filter</h2>
              <button onClick={() => setFilterOpen(false)} className="text-white p-2"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {/* Price range slider */}
              <details open className="border-b border-border">
                <summary className="px-4 py-3.5 font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide cursor-pointer">
                  Price (ex VAT)
                </summary>
                <div className="px-4 pb-4 pt-1">
                  <Slider
                    min={0}
                    max={500}
                    step={5}
                    value={priceRange}
                    onValueChange={(v) => setPriceRange([v[0], v[1]] as [number, number])}
                    className="my-3"
                  />
                  <div className="flex items-center justify-between text-[12px] text-foreground">
                    <span>£{priceRange[0]}</span>
                    <span className="text-muted-foreground">to</span>
                    <span>£{priceRange[1]}{priceRange[1] === 500 ? "+" : ""}</span>
                  </div>
                </div>
              </details>

              {filters.map((f) => (
                <details key={f.name} open className="border-b border-border">
                  <summary className="px-4 py-3.5 font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide cursor-pointer">
                    {f.name}
                  </summary>
                  <div className="pb-3">
                    {f.values.map((v) => (
                      <label key={v} className="flex items-center gap-3 px-4 py-2.5 active:bg-muted">
                        <span className={`w-5 h-5 rounded border-2 flex items-center justify-center ${active.includes(v) ? "bg-[hsl(var(--brand-mid))] border-[hsl(var(--brand-mid))]" : "border-border"}`}>
                          {active.includes(v) && <Check className="w-3 h-3 text-white" />}
                        </span>
                        <input type="checkbox" checked={active.includes(v)} onChange={() => toggle(v)} className="sr-only" />
                        <span className="text-sm text-foreground">{v}</span>
                      </label>
                    ))}
                  </div>
                </details>
              ))}
            </div>
            <div className="border-t border-border p-3 flex gap-2 safe-bottom">
              <button onClick={() => { setActive([]); setPriceRange([0, 250]); }} className="flex-1 border border-border text-[hsl(var(--brand-dark))] font-heading text-[12px] font-medium uppercase py-3 rounded">Reset</button>
              <button onClick={() => setFilterOpen(false)} className="flex-1 bg-[hsl(var(--brand-mid))] text-white font-heading text-[12px] font-medium uppercase py-3 rounded">Show {products.length}</button>
            </div>
          </div>
        </div>
      )}

      {/* Sort sheet */}
      {sortOpen && (
        <div className="fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setSortOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl pb-4 safe-bottom">
            <div className="flex justify-center pt-2 pb-1"><div className="w-10 h-1 rounded-full bg-border" /></div>
            <h3 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide px-5 py-3">Sort By</h3>
            {sortOptions.map((o) => (
              <button
                key={o}
                onClick={() => { setSort(o); setSortOpen(false); }}
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm text-foreground active:bg-muted border-t border-border"
              >
                {o}
                {sort === o && <Check className="w-4 h-4 text-[hsl(var(--brand-mid))]" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <MobileFooter />
    </div>
  );
};

export default CategoryListing;
