interface Props {
  /** ex-VAT price for points calculation */
  price: number;
}

const ProductLoyaltyAd = ({ price }: Props) => {
  const points = Math.floor(price);
  return (
    <div className="flex items-center gap-3 rounded-md bg-[hsl(var(--brand-dark))] px-4 py-3 text-primary-foreground">
      {/* Scalloped badge with tick — mirrors desktop icon */}
      <div className="flex-shrink-0 w-12 h-12 relative flex items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-primary-foreground" fill="none">
          <path
            d="M24 2 l3.4 3.1 4.5-1.3 2 4.3 4.6.6.5 4.6 4.3 2-1.3 4.5L45.1 24l-3.1 3.4 1.3 4.5-4.3 2-.5 4.6-4.6.6-2 4.3-4.5-1.3L24 45.1l-3.4-3.1-4.5 1.3-2-4.3-4.6-.6-.5-4.6-4.3-2 1.3-4.5L2.9 24l3.1-3.4-1.3-4.5 4.3-2 .5-4.6 4.6-.6 2-4.3 4.5 1.3z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m17 24 5 5 9-10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-heading text-[14px] font-medium uppercase tracking-wider leading-tight">
          Earn{" "}
          <span className="text-[hsl(var(--brand-light-blue))]">{points.toLocaleString()}</span>{" "}
          points when you buy this product
        </p>
        <p className="text-[12px] text-primary-foreground/80 mt-1">
          Simply login / register when you checkout
        </p>
      </div>
    </div>
  );
};

export default ProductLoyaltyAd;
