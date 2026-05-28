import { useState } from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export type StockStatus = "in-stock" | "low-stock" | "awaiting" | "out-of-stock";

export interface ProductCardData {
  id: string;
  name: string;
  price: string; // ex VAT, e.g. "£42.95"
  oldPrice?: string;
  image: string;
  badge?: string;
  stock?: StockStatus;
}

interface Props {
  product: ProductCardData;
  className?: string;
}

const stockMeta: Record<StockStatus, { label: string; cls: string }> = {
  "in-stock": { label: "In Stock", cls: "text-[hsl(var(--trust-green))]" },
  "low-stock": { label: "Low Stock", cls: "text-[hsl(var(--sale-red))]" },
  "awaiting": { label: "Awaiting Stock", cls: "text-amber-600" },
  "out-of-stock": { label: "Out of Stock", cls: "text-muted-foreground" },
};

const incVat = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  if (isNaN(n)) return null;
  return `£${(n * 1.2).toFixed(2)}`;
};

const ProductCard = ({ product, className = "" }: Props) => {
  const [qty, setQty] = useState(1);
  const onSale = product.badge?.toLowerCase().includes("sale") || !!product.oldPrice;
  const stock = product.stock ?? "in-stock";
  const sm = stockMeta[stock];
  const vat = incVat(product.price);

  return (
    <Link
      to={`/product/${product.id}`}
      className={`flex flex-col bg-card rounded-lg border border-border overflow-hidden active:scale-[0.98] transition-transform shadow-sm ${className}`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover"
          loading="lazy"
          width={512}
          height={512}
        />
        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-[12px] font-bold px-2 py-0.5 rounded ${
              onSale
                ? "bg-[hsl(var(--sale-red))] text-white"
                : "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col flex-1">
        {/* Title – never truncated, allow as many lines as needed */}
        <h3 className="text-[14px] font-medium text-foreground leading-snug">
          {product.name}
        </h3>

        {/* Spacer pushes price/stock/cta to the bottom so all cards align */}
        <div className="flex-1" />

        <div className="flex items-baseline gap-2 mt-2">
          <span
            className={`text-base font-bold ${
              onSale ? "text-[hsl(var(--sale-red))]" : "text-foreground"
            }`}
          >
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[12px] text-muted-foreground line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
        {vat && (
          <p className="text-[12px] text-muted-foreground mt-0.5">
            {vat} <span className="uppercase">inc VAT</span>
          </p>
        )}

        {/* Stock status */}
        <p className={`text-[12px] font-medium mt-1 flex items-center gap-1 ${sm.cls}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {sm.label}
        </p>

        {/* Qty + Add to Basket */}
        <div
          className="flex items-stretch gap-1.5 mt-2.5"
          onClick={(e) => e.preventDefault()}
        >
          <div className="flex items-center border border-border rounded overflow-hidden">
            <button
              type="button"
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-7 h-9 flex items-center justify-center text-foreground active:bg-muted"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-[12px] font-semibold">{qty}</span>
            <button
              type="button"
              onClick={() => setQty(qty + 1)}
              className="w-7 h-9 flex items-center justify-center text-foreground active:bg-muted"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            type="button"
            className="flex-1 bg-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-dark))] text-primary-foreground text-[12px] font-heading font-medium rounded flex items-center justify-center gap-1.5 uppercase tracking-wider px-2"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
