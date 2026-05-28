import brandBlum from "@/assets/brand-blum.jpg";
import brandHafele from "@/assets/brand-hafele.jpg";
import heroFestool from "@/assets/hero-festool.jpg";
import promoSpring from "@/assets/promo-spring.jpg";

const brands = [
  {
    name: "Hafele Fixings and Fittings",
    image: brandHafele,
    desc: "Explore the full Hafele range of furniture fittings, accessories, and architectural hardware.",
  },
  {
    name: "Festool Powertools",
    image: heroFestool,
    desc: "Premium power tools for demanding professionals. Drills, saws, sanders and more.",
  },
  {
    name: "Carhartt Workwear",
    image: promoSpring,
    desc: "Tough, durable workwear built for the job site. New Spring collection now available.",
  },
];

const BrandShowcase = () => (
  <section className="bg-[hsl(var(--brand-bg))] py-5 px-4">
    <div className="flex items-center justify-between mb-3">
      <h2 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
        Our Brands
      </h2>
      <a href="#" className="font-heading text-xs font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
        View All →
      </a>
    </div>
    <div className="space-y-3">
      {brands.map((brand) => (
        <a
          key={brand.name}
          href="#"
          className="flex bg-card rounded-lg overflow-hidden border border-border active:scale-[0.98] transition-transform"
        >
          <img
            src={brand.image}
            alt={brand.name}
            className="w-28 h-28 object-cover flex-shrink-0"
            loading="lazy"
            width={512}
            height={512}
          />
          <div className="flex-1 p-3 flex flex-col justify-center">
            <h3 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-snug">
              {brand.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
              {brand.desc}
            </p>
            <span className="font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] mt-1.5 uppercase tracking-wider">
              Shop Now →
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default BrandShowcase;
