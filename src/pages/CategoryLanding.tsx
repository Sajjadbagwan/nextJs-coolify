import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductCard, { type ProductCardData } from "@/components/ProductCard";
import blumLogo from "@/assets/brands/blum.svg"; // still used in brands strip
import festool from "@/assets/brands/festool.png";
import mirka from "@/assets/brands/mirka.webp";
import lamello from "@/assets/brands/lamello.png";
import wesco from "@/assets/brands/wesco.webp";
import carlisleBrass from "@/assets/brands/carlisle-brass.png";
import catCabinet from "@/assets/cat-cabinet.jpg";
import productDrill from "@/assets/product-drill.jpg";
import catFixings from "@/assets/cat-fixings.jpg";
import catAbrasives from "@/assets/cat-abrasives.jpg";
import heroDovetail from "@/assets/hero-dovetail.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import imgDrawerKits from "@/assets/blum/drawer-kits.jpg";
import imgDrawerSides from "@/assets/blum/drawer-sides.jpg";
import imgRunners from "@/assets/blum/runners.jpg";
import imgFrontFix from "@/assets/blum/front-fixings.jpg";
import imgBackFix from "@/assets/blum/back-fixings.jpg";
import imgSpareParts from "@/assets/blum/spare-parts.jpg";
import imgInnerDrawers from "@/assets/blum/inner-drawers.jpg";
import imgAccessories from "@/assets/blum/accessories.jpg";

// Top sliders – the 3 hero box systems (LEGRABOX, TANDEMBOX Antaro, METABOX)
const heroRanges = [
  {
    name: "LEGRABOX",
    tagline: "Slim-line. Premium finish.",
    image: catCabinet,
    accent: "Premium",
  },
  {
    name: "TANDEMBOX Antaro",
    tagline: "The trade favourite.",
    image: catFixings,
    accent: "Bestseller",
  },
  {
    name: "METABOX",
    tagline: "Reliable & cost-effective.",
    image: catAbrasives,
    accent: "Value",
  },
];

// Product type categories within Box Systems
const productCategories = [
  { name: "Drawer Kits", count: 142, image: imgDrawerKits },
  { name: "Drawer Sides", count: 98, image: imgDrawerSides },
  { name: "Runners", count: 64, image: imgRunners },
  { name: "Front Fixings", count: 48, image: imgFrontFix },
  { name: "Back Fixings", count: 32, image: imgBackFix },
  { name: "Spare Parts", count: 213, image: imgSpareParts },
  { name: "Inner Drawers", count: 56, image: imgInnerDrawers },
  { name: "Accessories", count: 87, image: imgAccessories },
];

// Ad blocks
const adBlocks = [
  {
    label: "Organise",
    title: "Drawer Dividers & AMBIA-LINE",
    image: catFixings,
  },
  {
    label: "Smart Bins",
    title: "Waste Bin Solutions",
    image: catCabinet,
  },
  {
    label: "Touch to Open",
    title: "SERVO-DRIVE Electric",
    image: productDrill,
  },
  {
    label: "Ready to Fit",
    title: "Pre-Assembled Drawer Kits",
    image: catAbrasives,
  },
];

const moreAdBlocks = [
  {
    label: "Trade Discount",
    title: "Bulk Buy Box Systems",
    image: heroWorkshop,
  },
  {
    label: "Free Service",
    title: "Drawer Configuration Help",
    image: heroDovetail,
  },
];

// Brands within this category (matches BrandLogosStrip styling)
const brands = [
  { name: "Blum", logo: blumLogo },
  { name: "Lamello", logo: lamello },
  { name: "Hafele", logo: carlisleBrass },
  { name: "Festool", logo: festool },
  { name: "Mirka", logo: mirka },
  { name: "Wesco", logo: wesco },
];

const featured: ProductCardData[] = [
  {
    id: "legrabox-orion-500",
    name: "LEGRABOX Orion Grey 500mm M-Height Drawer Kit",
    price: "£42.95",
    image: catCabinet,
    badge: "Bestseller",
  },
  {
    id: "tandembox-450",
    name: "TANDEMBOX Antaro D-Height 450mm",
    price: "£38.50",
    oldPrice: "£44.00",
    image: catFixings,
    badge: "Sale",
  },
  {
    id: "merivobox-m-grey",
    name: "MERIVOBOX M-Height Indium Grey 500mm",
    price: "£36.20",
    image: catAbrasives,
  },
  {
    id: "blum-front-fix",
    name: "Blum Front Fixing Bracket Symmetric",
    price: "£3.45",
    image: productDrill,
  },
];

const recentlyViewed: ProductCardData[] = [
  {
    id: "rv-1",
    name: "LEGRABOX C-Height 500mm Stainless",
    price: "£48.20",
    image: catCabinet,
  },
  {
    id: "rv-2",
    name: "TANDEMBOX K-Height 350mm Silk White",
    price: "£29.95",
    oldPrice: "£34.50",
    image: catFixings,
    badge: "Sale",
  },
  {
    id: "rv-3",
    name: "Blum BLUMOTION Soft Close Runner",
    price: "£18.40",
    image: catAbrasives,
  },
  {
    id: "rv-4",
    name: "AMBIA-LINE Cross Divider 500mm",
    price: "£12.99",
    image: productDrill,
  },
];

const CategoryLanding = () => (
  <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-12">
    <MobileHeader />
    <USPMarquee />
    <PageBreadcrumb crumbs={[{ label: "Blum", to: "#" }, { label: "Box Systems" }]} />

    {/* Brand hero */}
    <section className="relative bg-gradient-to-br from-[hsl(var(--brand-dark))] to-[hsl(var(--brand-mid))] px-5 py-8 text-primary-foreground">
      <h1 className="font-heading text-3xl font-medium uppercase tracking-tight leading-tight">
        Blum Box Systems
      </h1>
      <p className="text-sm opacity-90 mt-3 leading-relaxed max-w-[90%]">
        Premium drawer systems engineered for a lifetime of smooth, silent
        motion. Configure LEGRABOX, TANDEMBOX & METABOX to fit any kitchen.
      </p>
      <div className="mt-5">
        <button className="bg-white text-[hsl(var(--brand-dark))] font-heading font-medium uppercase tracking-wider text-[12px] px-5 py-2.5 rounded">
          View All Products
        </button>
      </div>
    </section>

    {/* SEO copy moved to bottom of page */}

    {/* Three-up hero ranges – horizontal scroller for mobile */}
    <section className="py-6 bg-[hsl(var(--brand-bg))]">
      <div className="px-5 flex items-center justify-between mb-4">
        <h2 className="font-heading text-lg font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
          Choose Your System
        </h2>
      </div>
      <div className="overflow-x-auto scrollbar-none -mx-0 px-5">
        <div className="flex gap-3 snap-x snap-mandatory pb-2">
          {heroRanges.map((r) => (
            <Link
              key={r.name}
              to="/category"
              className="flex-shrink-0 w-[78%] snap-start relative rounded-lg overflow-hidden bg-card border border-border active:scale-[0.98] transition-transform"
            >
              <div className="aspect-[4/3] bg-[hsl(var(--brand-bg))] overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-3">
                <h3 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-tight">
                  {r.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{r.tagline}</p>
                <div className="flex items-center gap-1 mt-2 text-[hsl(var(--brand-mid))] font-heading text-[12px] font-medium uppercase tracking-wider">
                  Shop Range <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Product type categories */}
    <section className="px-4 py-6">
      <h2 className="font-heading text-lg font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-4 px-1">
        Shop by Product Type
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {productCategories.map((c) => (
          <Link
            key={c.name}
            to="/category"
            className="bg-card rounded-lg border border-border overflow-hidden active:scale-[0.98] transition-transform"
          >
            <div className="aspect-[4/3] bg-[hsl(var(--brand-bg))] overflow-hidden">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-3">
              <h3 className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-tight">
                {c.name}
              </h3>
              <p className="text-[12px] text-muted-foreground mt-1">{c.count} products</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Ad blocks – key sub-areas */}
    <section className="bg-[hsl(var(--brand-bg))] px-5 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-lg font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
          Explore Solutions
        </h2>
        <Link to="/category" className="font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {adBlocks.map((p) => (
          <Link
            key={p.title}
            to="#"
            className="block relative rounded-lg overflow-hidden active:scale-[0.97] transition-transform"
          >
            <img src={p.image} alt={p.title} className="w-full h-36 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-dark))]/95 via-[hsl(var(--brand-dark))]/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-2.5">
              <span className="inline-block bg-[hsl(var(--brand-light-blue))] text-white font-heading text-[12px] font-semibold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded-sm">
                {p.label}
              </span>
              <h3 className="font-heading text-white text-sm font-medium uppercase tracking-wide leading-tight mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {p.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Featured products */}
    <section className="px-4 py-6">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="font-heading text-lg font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
          Featured
        </h2>
        <Link to="/category" className="font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {featured.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>

    {/* Brands within this category */}
    <section className="bg-white py-8 border-y border-border">
      <div className="px-5 flex items-center justify-between mb-5">
        <div>
          <h2 className="font-heading text-lg font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-none">
            Brands in This Category
          </h2>
          <p className="text-xs text-muted-foreground mt-1">Trade-trusted partners</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 px-5">
        {brands.map((b) => (
          <Link
            key={b.name}
            to="#"
            aria-label={`Shop ${b.name}`}
            className="h-20 rounded-lg border border-border bg-white flex items-center justify-center p-3 active:scale-95 transition-transform shadow-sm"
          >
            <img
              src={b.logo}
              alt={`${b.name} logo`}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </Link>
        ))}
      </div>
    </section>

    {/* Video block */}
    <section className="px-5 py-8 bg-[hsl(var(--brand-bg))]">
      <p className="font-heading text-[12px] uppercase tracking-widest text-[hsl(var(--brand-mid))] mb-2">
        Watch & Learn
      </p>
      <h2 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-tight leading-tight mb-4">
        See LEGRABOX in Motion
      </h2>
      <div className="relative rounded-lg overflow-hidden bg-[hsl(var(--brand-dark))] aspect-video">
        <img
          src={heroDovetail}
          alt="Blum LEGRABOX video"
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <button
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center group"
        >
          <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-active:scale-95 transition-transform">
            <Play className="w-6 h-6 text-[hsl(var(--brand-dark))] fill-[hsl(var(--brand-dark))] ml-1" />
          </span>
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[hsl(var(--brand-dark))]/90 to-transparent">
          <p className="text-white text-xs font-medium">2:14 · Blum Official</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Watch how LEGRABOX combines slim sides with whisper-silent BLUMOTION
        soft-close — the benchmark for premium drawer systems.
      </p>
    </section>

    {/* More ad blocks */}
    <section className="px-5 py-8">
      <h2 className="font-heading text-lg font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-4">
        Trade Services
      </h2>
      <div className="space-y-3">
        {moreAdBlocks.map((p) => (
          <Link
            key={p.title}
            to="#"
            className="block relative rounded-lg overflow-hidden active:scale-[0.99] transition-transform"
          >
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-dark))]/95 via-[hsl(var(--brand-dark))]/55 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <span className="inline-block bg-[hsl(var(--brand-light-blue))] text-white font-heading text-[12px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm">
                {p.label}
              </span>
              <h3 className="font-heading text-white text-lg font-medium uppercase tracking-wide leading-tight mt-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {p.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Why Blum / USPs */}
    <section className="bg-[hsl(var(--brand-bg))] px-5 py-6">
      <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-4">
        Why Choose Blum
      </h2>
      <div className="space-y-3">
        {[
          { t: "Lifetime Guarantee", d: "Tested for 100,000 cycles — built to last decades." },
          { t: "Whisper-Silent BLUMOTION", d: "Integrated soft-close on every runner & hinge." },
          { t: "Made in Austria", d: "Engineered & manufactured in Höchst since 1952." },
        ].map((u) => (
          <div key={u.t} className="bg-card rounded-md p-4 border border-border flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[hsl(var(--brand-mid))]/10 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--brand-mid))]" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">{u.t}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{u.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Recently Viewed – horizontal scroller, matches TopDeals widget styling */}
    <section className="bg-background py-8 px-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
          Recently Viewed
        </h2>
      </div>
      <div className="overflow-x-auto scrollbar-none -mx-5 px-5">
        <div className="flex gap-3 snap-x snap-mandatory pb-2">
          {recentlyViewed.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              className="flex-shrink-0 w-[68%] snap-start"
            />
          ))}
        </div>
      </div>
    </section>

    {/* Buying guide */}
    <section className="px-5 py-6 border-t border-border">
      <p className="font-heading text-[12px] uppercase tracking-widest text-[hsl(var(--brand-mid))] mb-2">
        Buying Guide
      </p>
      <h2 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-tight leading-tight mb-3">
        Choosing the Right Drawer System
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        From slim-line LEGRABOX to heavy-duty TANDEMBOX, our team can help
        you spec the perfect runner depth, height and load rating for your
        project.
      </p>
      <Link to="#" className="inline-flex items-center gap-2 mt-4 text-[hsl(var(--brand-mid))] font-heading text-[12px] font-medium uppercase tracking-wider">
        Read Guide <ChevronRight className="w-3.5 h-3.5" />
      </Link>
    </section>

    {/* SEO intro text – moved to bottom for SEO purposes */}
    <section className="px-5 py-6 bg-card border-t border-border">
      <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-3">
        About Blum Box Systems
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          Isaac Lord is a long-standing authorised Blum distributor, supplying
          the trade with the full range of Blum box systems including LEGRABOX,
          TANDEMBOX Antaro and METABOX. Every drawer system is engineered in
          Austria for a lifetime of smooth, silent motion — tested to over
          100,000 opening cycles.
        </p>
        <p>
          Whether you're fitting out a single kitchen or specifying for a large
          development, our team can help you select the right runner length,
          drawer height and load rating. We hold huge UK stock, offer next-day
          delivery on most lines, and provide free configuration support.
        </p>
      </div>
    </section>

    <MobileFooter />
  </div>
);

export default CategoryLanding;
