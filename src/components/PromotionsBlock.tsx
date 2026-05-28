import { Truck, Tag, Users, Wrench } from "lucide-react";

const promos = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "On all orders over £40",
  },
  {
    icon: Tag,
    title: "Price Match",
    desc: "We won't be beaten on price",
  },
  {
    icon: Users,
    title: "Trade Accounts",
    desc: "Exclusive trade pricing",
  },
  {
    icon: Wrench,
    title: "Expert Advice",
    desc: "30+ years in the trade",
  },
];

const PromotionsBlock = () => (
<section className="bg-white px-5 py-8">
    <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-none mb-1">
      Why Isaac Lord
    </h2>
    <p className="text-xs text-muted-foreground mb-5">A trusted name in trade since 1947</p>
    <div className="grid grid-cols-2 gap-3">
      {promos.map((p) => (
        <div
          key={p.title}
          className="bg-[hsl(var(--brand-bg))] rounded p-3 flex flex-col items-start gap-2 border border-border"
        >
          <div className="w-10 h-10 rounded-full bg-[hsl(var(--brand-dark))] flex items-center justify-center">
            <p.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-tight">
              {p.title}
            </h3>
            <p className="text-[12px] text-muted-foreground mt-0.5 leading-snug">
              {p.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PromotionsBlock;
