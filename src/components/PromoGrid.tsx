import { Link } from "react-router-dom";
import promoSpring from "@/assets/promo-spring.jpg";
import heroDovetail from "@/assets/hero-dovetail.jpg";
import heroMirka from "@/assets/hero-mirka.jpg";

const promos = [
  {
    image: promoSpring,
    label: "New In",
    title: "Spring Workwear",
    href: "#",
  },
  {
    image: heroDovetail,
    label: "Made to Order",
    title: "Dovetail Drawers",
    href: "#",
  },
  {
    image: heroMirka,
    label: "Lower Prices",
    title: "Mirka Abrasives",
    href: "#",
  },
];

const PromoGrid = () => (
  <section className="bg-background px-5 py-8">
    <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-5">
      Featured Offers
    </h2>
    <div className="space-y-3">
      {/* Big top promo */}
      <Link to={promos[0].href} className="block relative rounded-lg overflow-hidden active:scale-[0.99] transition-transform">
        <img src={promos[0].image} alt={promos[0].title} className="w-full h-48 object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-dark))]/95 via-[hsl(var(--brand-dark))]/55 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="inline-block bg-[hsl(var(--brand-light-blue))] text-white font-heading text-[12px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm">
            {promos[0].label}
          </span>
          <h3 className="font-heading text-white text-xl font-medium uppercase tracking-wide leading-tight mt-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {promos[0].title}
          </h3>
        </div>
      </Link>

      {/* Two-up below */}
      <div className="grid grid-cols-2 gap-3">
        {promos.slice(1).map((p) => (
          <Link key={p.title} to={p.href} className="block relative rounded-lg overflow-hidden active:scale-[0.97] transition-transform">
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
    </div>
  </section>
);

export default PromoGrid;
