import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";
import USPMarquee from "@/components/USPMarquee";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import AddToBasketSheet from "@/components/AddToBasketSheet";
import legraboxImg from "@/assets/blum/products/legrabox-orion-500.jpg";
import legraboxC from "@/assets/blum/products/legrabox-c-stainless.jpg";
import legraboxFront from "@/assets/blum/products/legrabox-front-bracket.jpg";
import tandem from "@/assets/blum/products/tandem-runners.jpg";
import servo from "@/assets/blum/products/servo-drive.jpg";

const item = {
  name: "LEGRABOX Orion Grey 500mm M-Height Drawer Kit (No Back) Pack of 40",
  sku: "770M5002S-OG-40",
  image: legraboxImg,
  qty: 1,
  price: 1718.0,
};

const recommendations = [
  { id: "r1", name: "LEGRABOX C-Height Stainless Steel Side", image: legraboxC, price: 42.95 },
  { id: "r2", name: "LEGRABOX Front Fixing Bracket (Pair)", image: legraboxFront, price: 8.5 },
  { id: "r3", name: "TANDEM Drawer Runners 500mm", image: tandem, price: 32.4 },
  { id: "r4", name: "SERVO-DRIVE for LEGRABOX", image: servo, price: 215.0 },
];

const AddToBasketDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-12">
      <MobileHeader />
      <USPMarquee />
      <PageBreadcrumb crumbs={[{ label: "Demo" }, { label: "Add to Basket Overlay" }]} />

      <div className="px-4 py-6">
        <h1 className="font-heading text-xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
          Add to Basket Overlay
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Mobile-first bottom sheet pattern. Slides up after the customer adds an item, confirms
          the action, surfaces frequently bought with products, and offers fast checkout including Apple Pay.
        </p>

        <div className="mt-6 bg-card border border-border rounded-lg p-4">
          <div className="flex items-start gap-3">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover" />
            <div className="flex-1">
              <p className="text-[14px] text-foreground leading-snug">{item.name}</p>
              <p className="text-[12px] text-muted-foreground mt-1">SKU: {item.sku}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 w-full bg-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-dark))] text-primary-foreground font-heading font-medium uppercase tracking-wider text-[14px] py-3.5 rounded-md flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Basket
          </button>

          <p className="text-[12px] text-muted-foreground mt-3 text-center">
            Tap to trigger the overlay. Swipe down, tap outside, or use ✕ to dismiss.
          </p>
        </div>
      </div>

      <MobileFooter />

      <AddToBasketSheet
        open={open}
        onClose={() => setOpen(false)}
        item={item}
        basketCount={4}
        basketSubtotal={1842.85}
        recommendations={recommendations}
      />
    </div>
  );
};

export default AddToBasketDemo;
