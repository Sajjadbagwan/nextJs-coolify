import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import catPowertools from "@/assets/cat-powertools.jpg";
import catCabinet from "@/assets/cat-cabinet.jpg";
import catFixings from "@/assets/cat-fixings.jpg";
import catAbrasives from "@/assets/cat-abrasives.jpg";
import brandBlum from "@/assets/brand-blum.jpg";
import brandHafele from "@/assets/brand-hafele.jpg";

const categories = [
  { name: "Blum", image: brandBlum },
  { name: "Powertools", image: catPowertools },
  { name: "Fixings & Jointing", image: catFixings },
  { name: "Powertool Accessories", image: catCabinet },
  { name: "Cabinet Hardware", image: brandHafele },
  { name: "Abrasives", image: catAbrasives },
];

const CategoryGrid = () => (
  <section className="bg-background py-8 px-5">
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
        Shop by Category
      </h2>
      <Link to="#" className="font-heading text-xs font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
        View All →
      </Link>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to="#"
          className="relative block rounded overflow-hidden border border-border active:scale-[0.97] transition-transform aspect-[4/3]"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={512}
            height={384}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-dark))]/95 via-[hsl(var(--brand-dark))]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
            <span className="font-heading text-base font-medium text-white uppercase tracking-wide leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
              {cat.name}
            </span>
            <ChevronRight className="w-4 h-4 text-white flex-shrink-0" />
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryGrid;
