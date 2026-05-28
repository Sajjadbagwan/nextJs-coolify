import { Link } from "react-router-dom";
import ProductCard, { type ProductCardData } from "./ProductCard";
import productDrill from "@/assets/product-drill.jpg";
import catCabinet from "@/assets/cat-cabinet.jpg";
import catFixings from "@/assets/cat-fixings.jpg";
import catAbrasives from "@/assets/cat-abrasives.jpg";

const products: ProductCardData[] = [
  {
    id: "festool-t18",
    name: "Festool T 18+3 Cordless Drill",
    price: "£329.00",
    oldPrice: "£369.00",
    image: productDrill,
    badge: "Bestseller",
  },
  {
    id: "blum-clip-top",
    name: "Blum CLIP top BLUMOTION 110° Hinge",
    price: "£8.50",
    image: catCabinet,
  },
  {
    id: "reisser-screws",
    name: "Reisser R2 Cutter Screws 4x50mm (200pk)",
    price: "£12.99",
    oldPrice: "£15.49",
    image: catFixings,
    badge: "Sale",
  },
  {
    id: "mirka-goldflex",
    name: "Mirka Goldflex Soft 115x125mm P320",
    price: "£18.95",
    image: catAbrasives,
  },
];

const FeaturedProducts = () => (
  <section className="bg-background py-8 px-5">
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
        Popular Products
      </h2>
      <Link to="#" className="font-heading text-xs font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
        View All →
      </Link>
    </div>

    <div className="grid grid-cols-2 gap-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
