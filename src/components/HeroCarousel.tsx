import { useState, useEffect, useCallback } from "react";
import heroFestool from "@/assets/hero-festool.jpg";
import heroDovetail from "@/assets/hero-dovetail.jpg";
import heroMirka from "@/assets/hero-mirka.jpg";
import promoSpring from "@/assets/promo-spring.jpg";

const slides = [
  {
    image: promoSpring,
    label: "LATEST SPRING STYLES",
    title: "Carhartt New Collection",
    cta: "Shop Now",
  },
  {
    image: heroFestool,
    label: "FESTOOL SAW BLADES BACK IN STOCK",
    title: "Premium Power Tools",
    cta: "Shop Now",
  },
  {
    image: heroDovetail,
    label: "SHEPHERD HILLS DOVETAIL DRAWERS",
    title: "Handcrafted Quality",
    cta: "View Range",
  },
  {
    image: heroMirka,
    label: "MIRKA GOLDFLEX SOFT",
    title: "Lower Prices on Premium Sanding",
    cta: "Shop Now",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt={slide.label}
                className="w-full h-52 object-cover"
                width={800}
                height={600}
                {...(i === 0 ? {} : { loading: "lazy" as const })}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-dark))]/95 via-[hsl(var(--brand-dark))]/55 to-[hsl(var(--brand-dark))]/10" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-[hsl(var(--brand-light-blue))] text-white font-heading text-[12px] font-semibold tracking-[0.15em] uppercase px-2 py-1 rounded-sm">
                  {slide.label}
                </span>
                <h2 className="font-heading text-white text-2xl font-medium mt-2 leading-tight uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {slide.title}
                </h2>
                <button className="mt-3 bg-white hover:bg-[hsl(var(--brand-light-blue))] hover:text-white text-[hsl(var(--brand-dark))] font-heading font-semibold text-sm px-6 py-2.5 rounded touch-target uppercase tracking-wider transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-2 right-3 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary-foreground w-4" : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
