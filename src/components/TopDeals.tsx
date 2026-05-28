import ProductCard, { type ProductCardData } from "./ProductCard";
import productDrill from "@/assets/product-drill.jpg";
import catCabinet from "@/assets/cat-cabinet.jpg";
import catFixings from "@/assets/cat-fixings.jpg";
import catAbrasives from "@/assets/cat-abrasives.jpg";

const deals: ProductCardData[] = [
  {
    id: "blum-runner",
    name: "Blum TANDEM Drawer Runner Set",
    price: "£24.50",
    oldPrice: "£32.00",
    image: catCabinet,
    badge: "Sale",
  },
  {
    id: "mirka-disc",
    name: "Mirka Abranet 150mm Discs (50pk)",
    price: "£32.99",
    oldPrice: "£39.99",
    image: catAbrasives,
    badge: "Sale",
  },
  {
    id: "festool-router",
    name: "Festool OF 1010 Router 240V",
    price: "£449.00",
    oldPrice: "£499.00",
    image: productDrill,
    badge: "Sale",
  },
  {
    id: "reisser-pack",
    name: "Reisser Cutter Screws Trade Pack 1000pk",
    price: "£44.99",
    oldPrice: "£59.99",
    image: catFixings,
    badge: "Bulk Buy",
  },
];

const TopDeals = () => (
  <section className="bg-[hsl(var(--brand-bg))] py-8 px-5">
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
        Top Deals This Week
      </h2>
      <a href="#" className="font-heading text-xs font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
        View All →
      </a>
    </div>

    {/* Horizontal scroll for variety */}
    <div className="overflow-x-auto scrollbar-none -mx-5 px-5">
      <div className="flex gap-3 snap-x snap-mandatory pb-2">
        {deals.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            className="flex-shrink-0 w-[68%] snap-start"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TopDeals;
