import storeImg from "@/assets/store-interior.webp";

const AboutBlock = () => (
  <section className="bg-background px-4 py-6">
    <div className="rounded-lg overflow-hidden">
      <img
        src={storeImg}
        alt="Isaac Lord Store"
        className="w-full h-44 object-cover"
        loading="lazy"
        width={800}
        height={600}
      />
    </div>
    <div className="mt-4">
      <h2 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
        About Isaac Lord
      </h2>
      <div className="w-12 h-1 bg-[hsl(var(--brand-mid))] mt-2 mb-3 rounded-full" />
      <p className="text-sm text-muted-foreground leading-relaxed">
        Isaac Lord has been a leading distributor of fittings, hardware and tools
        to the furniture and joinery industry for over 130 years. We are committed
        to selling only the highest quality products at competitive prices.
      </p>
      <a
        href="#"
        className="inline-block mt-3 font-heading text-sm font-medium text-[hsl(var(--brand-mid))] uppercase tracking-wider"
      >
        Learn More →
      </a>
    </div>
  </section>
);

export default AboutBlock;
