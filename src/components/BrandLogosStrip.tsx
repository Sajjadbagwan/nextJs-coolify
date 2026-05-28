import { Link } from "react-router-dom";
import festool from "@/assets/brands/festool.png";
import blum from "@/assets/brands/blum.svg";
import mirka from "@/assets/brands/mirka.webp";
import lamello from "@/assets/brands/lamello.png";
import wesco from "@/assets/brands/wesco.webp";
import carlisleBrass from "@/assets/brands/carlisle-brass.png";

type Brand = { name: string; logo: string };

const brands: Brand[] = [
  { name: "Lamello", logo: lamello },
  { name: "Mirka", logo: mirka },
  { name: "Blum", logo: blum },
  { name: "Festool", logo: festool },
  { name: "Wesco", logo: wesco },
  { name: "Carlisle Brass", logo: carlisleBrass },
];

const BrandLogosStrip = () => (
  <section className="bg-white py-8 border-y border-border">
    <div className="px-5 flex items-center justify-between mb-5">
      <div>
        <h2 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-none">
          Shop by Brand
        </h2>
        <p className="text-xs text-muted-foreground mt-1">Trusted brands the trade rely on</p>
      </div>
      <Link
        to="#"
        className="font-heading text-xs font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider whitespace-nowrap"
      >
        View All →
      </Link>
    </div>

    <div className="grid grid-cols-3 gap-2.5 px-5">
      {brands.map((b) => (
        <Link
          key={b.name}
          to="#"
          aria-label={`Shop ${b.name}`}
          className="h-20 rounded-lg border border-border bg-white flex items-center justify-center p-3 active:scale-95 transition-transform shadow-sm"
        >
          <img
            src={b.logo}
            alt={`${b.name} logo`}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </Link>
      ))}
    </div>
  </section>
);

export default BrandLogosStrip;
