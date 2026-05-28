import { Truck, Award, Phone, MapPin } from "lucide-react";

const usps = [
  { icon: Truck, title: "Free UK Delivery", desc: "On all orders over £40 inc VAT" },
  { icon: Award, title: "130+ Years Trading", desc: "Trusted trade supplier since 1892" },
  { icon: Phone, title: "Expert Trade Advice", desc: "Call our team on 01494 835200" },
  { icon: MapPin, title: "UK Distribution Centre", desc: "Same-day dispatch before 3pm" },
];

const WhyIsaacLord = () => (
  <section className="bg-[hsl(var(--brand-bg))] px-5 py-8">
    <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-none mb-1">
      Why Isaac Lord
    </h2>
    <p className="text-xs text-muted-foreground mb-5">A trusted name in trade since 1947</p>
    <div className="grid grid-cols-2 gap-3">
      {usps.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="bg-card border border-border rounded-lg p-3">
          <div className="w-8 h-8 rounded-full bg-[hsl(var(--brand-mid))]/10 flex items-center justify-center mb-2">
            <Icon className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
          </div>
          <h3 className="font-heading text-[12px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-tight">
            {title}
          </h3>
          <p className="text-[12px] text-muted-foreground mt-1 leading-snug">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyIsaacLord;
