import { Truck, MapPin, PoundSterling, ShieldCheck } from "lucide-react";

const items = [
  { icon: MapPin, text: "Click & Collect" },
  { icon: Truck, text: "Free Delivery" },
  { icon: PoundSterling, text: "Trade Prices" },
  { icon: ShieldCheck, text: "Price Match Guarantee" },
];

const USPMarquee = () => (
  <div className="bg-[hsl(var(--brand-bg))] border-y border-border overflow-hidden">
    <div className="animate-marquee flex whitespace-nowrap py-2.5">
      {/* Duplicate items for seamless loop */}
      {[...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center gap-2 mx-6 flex-shrink-0">
          <item.icon className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
          <span className="font-heading text-xs font-medium text-[hsl(var(--brand-dark))] uppercase tracking-[0.08em]">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default USPMarquee;
