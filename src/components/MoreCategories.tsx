import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import catJoinery from "@/assets/cat-joinery.jpg";
import catWorkwear from "@/assets/cat-workwear.jpg";
import catHandtools from "@/assets/cat-handtools.jpg";
import catCabinet from "@/assets/cat-cabinet.jpg";

const categories = [
  { name: "Cabinet Hardware", count: "420+ products", image: catCabinet,   href: "#" },
  { name: "Joinery & Doors",  count: "180+ products", image: catJoinery,   href: "#" },
  { name: "Workwear & PPE",   count: "260+ products", image: catWorkwear,  href: "#" },
  { name: "Hand Tools",       count: "350+ products", image: catHandtools, href: "#" },
];

const MoreCategories = () => (
  <section className="bg-[hsl(var(--brand-bg))] py-8 px-5">
    <div className="flex items-end justify-between mb-5">
      <div>
        <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-none">
          More to Explore
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5">Browse our most popular departments</p>
      </div>
      <Link to="#" className="font-heading text-xs font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider whitespace-nowrap">
        All →
      </Link>
    </div>

    <div className="space-y-3">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={cat.href}
          className="flex items-center bg-card rounded-lg overflow-hidden border border-border active:scale-[0.98] transition-transform shadow-sm"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-24 h-24 object-cover flex-shrink-0"
            loading="lazy"
            width={400}
            height={400}
          />
          <div className="flex-1 px-4 py-3 min-w-0">
            <h3 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-tight truncate">
              {cat.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{cat.count}</p>
            <span className="font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] mt-1.5 uppercase tracking-wider inline-block">
              Shop Now
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
        </Link>
      ))}
    </div>
  </section>
);

export default MoreCategories;
