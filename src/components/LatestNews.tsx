import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import storeImg from "@/assets/store-interior.webp";
import heroFestool from "@/assets/hero-festool.jpg";
import heroDovetail from "@/assets/hero-dovetail.jpg";

const news = [
  {
    image: heroFestool,
    date: "12 Apr 2026",
    category: "Product News",
    title: "Festool Saw Blades Back in Stock",
    excerpt: "Our most popular Festool blades have returned — get yours before they go.",
  },
  {
    image: storeImg,
    date: "02 Apr 2026",
    category: "Trade Counter",
    title: "New Self-Service Trade Counter",
    excerpt: "Pop in and grab what you need with our refreshed High Wycombe trade counter.",
  },
  {
    image: heroDovetail,
    date: "20 Mar 2026",
    category: "Made to Order",
    title: "Shepherd Hills Dovetail Drawers",
    excerpt: "Hand-crafted, made-to-measure dovetail drawers now available to order online.",
  },
];

const LatestNews = () => (
  <section className="bg-[hsl(var(--brand-bg))] py-5">
    <div className="px-4 flex items-center justify-between mb-3">
      <h2 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
        Latest News
      </h2>
      <Link to="#" className="font-heading text-xs font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
        View All →
      </Link>
    </div>

    {/* Horizontal scroll cards — mobile best practice */}
    <div className="overflow-x-auto scrollbar-none">
      <div className="flex gap-3 px-4 pb-1 snap-x snap-mandatory">
        {news.map((n) => (
          <Link
            key={n.title}
            to="#"
            className="flex-shrink-0 w-[78%] bg-white rounded border border-border overflow-hidden snap-start active:scale-[0.98] transition-transform"
          >
            <img src={n.image} alt={n.title} className="w-full h-36 object-cover" loading="lazy" />
            <div className="p-3">
              <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{n.date}</span>
                <span>·</span>
                <span className="font-heading uppercase tracking-wider text-[hsl(var(--brand-mid))] font-medium">
                  {n.category}
                </span>
              </div>
              <h3 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-snug mt-1.5">
                {n.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                {n.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 mt-2 font-heading text-[12px] font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider">
                Read More <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default LatestNews;
