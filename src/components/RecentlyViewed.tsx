import { Link } from "react-router-dom";
import ProductCard, { type ProductCardData } from "@/components/ProductCard";
import legraboxOrion from "@/assets/blum/products/legrabox-orion-500.jpg";
import tandembox from "@/assets/blum/products/tandembox-antaro-white.jpg";
import merivobox from "@/assets/blum/products/merivobox-grey.jpg";
import tandem from "@/assets/blum/products/tandem-runners.jpg";
import servo from "@/assets/blum/products/servo-drive.jpg";

const items: ProductCardData[] = [
  { id: "rv-1", name: "LEGRABOX C-Height 500mm Stainless", price: "£48.20", image: legraboxOrion },
  { id: "rv-2", name: "TANDEMBOX K-Height 350mm Silk White", price: "£29.95", oldPrice: "£34.50", image: tandembox, badge: "Sale" },
  { id: "rv-3", name: "MERIVOBOX M-Height Indium Grey", price: "£36.20", image: merivobox },
  { id: "rv-4", name: "TANDEM Plus BLUMOTION 500mm Pair", price: "£28.40", image: tandem },
  { id: "rv-5", name: "Blum SERVO-DRIVE Drive Unit", price: "£184.00", image: servo },
];

const RecentlyViewed = () => (
  <section className="bg-background py-8 px-5">
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
        Recently Viewed
      </h2>
      <Link to="/category" className="font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
        View All →
      </Link>
    </div>
    <div className="overflow-x-auto scrollbar-none -mx-5 px-5">
      <div className="flex gap-3 snap-x snap-mandatory pb-2">
        {items.map((p) => (
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

export default RecentlyViewed;
