import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logo from "@/assets/isaac-lord-logo.svg";

const pages = [
  { to: "/home", label: "Homepage" },
  { to: "/category-landing", label: "Category Landing" },
  { to: "/category", label: "Category Listing" },
  { to: "/product-simple", label: "Product · Simple" },
  { to: "/product-tier", label: "Product · Tier Pricing" },
  { to: "/product-config", label: "Product · Configurable" },
  { to: "/product-out-of-stock", label: "Product · Out of Stock" },
  { to: "/product-made-to-measure", label: "Product · Made to Measure" },
  { to: "/add-to-basket-overlay", label: "Add to Basket Overlay" },
  { to: "/basket", label: "Basket" },
  { to: "/checkout/shipping", label: "Checkout · Step 1" },
  { to: "/checkout/shipping-method", label: "Checkout · Step 2" },
  { to: "/checkout/payment", label: "Checkout · Step 3 (Guest)" },
  { to: "/checkout/payment-logged-in", label: "Checkout · Step 3 (Logged in)" },
  { to: "/login", label: "Login" },
  { to: "/create-account", label: "Create Account" },
  { to: "/account", label: "Account · Dashboard (Private)" },
  { to: "/trade", label: "Account · Dashboard (Trade)" },
  { to: "/account/orders", label: "Account · Order History" },
  { to: "/account/orders/IL-104582", label: "Account · Order Detail" },
  { to: "/account/favourites", label: "Account · Favourites" },
  { to: "/account/loyalty", label: "Account · Loyalty Points" },
  { to: "/account/addresses", label: "Account · Address Book" },
  { to: "/account/profile", label: "Account · Edit Profile" },
  { to: "/account/trade-upgrade", label: "Account · Apply for Trade" },
  { to: "/trade/apply-credit", label: "Account · Trade · Apply for Credit" },
  { to: "/account/logout", label: "Account · Log Out" },
];

const DemoIndex = () => (
  <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden">
    <header className="bg-[hsl(var(--brand-dark))] px-4 py-6 flex flex-col items-center gap-3">
      <img src={logo} alt="Isaac Lord" className="h-10 w-auto brightness-0 invert" />
      <div className="text-center">
        <p className="font-heading text-[12px] uppercase tracking-widest text-white/60 font-medium">
          Client Demo
        </p>
        <h1 className="font-heading text-xl font-medium text-white uppercase tracking-wide mt-1">
          Mobile Theme Preview
        </h1>
      </div>
    </header>

    <section className="px-4 py-6">
      <p className="text-sm text-muted-foreground mb-4">
        Tap any page below to view the design.
      </p>
      <div className="grid grid-cols-1 gap-2">
        {pages.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-4 active:scale-[0.99] transition-transform"
          >
            <div className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
              {p.label}
            </div>
            <ChevronRight className="w-5 h-5 text-[hsl(var(--brand-mid))]" />
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default DemoIndex;
