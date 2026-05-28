import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Mail, Lock } from "lucide-react";
import CheckoutHeader from "@/components/CheckoutHeader";
import CheckoutOrderSummary from "@/components/CheckoutOrderSummary";
import ApplePayMark from "@/components/ApplePayMark";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const CheckoutShipping = () => {
  const navigate = useNavigate();
  const [emailOptIn, setEmailOptIn] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-32">
      <CheckoutHeader step={1} backTo="/basket" backLabel="Back to basket" />
      <CheckoutOrderSummary />

      {/* Express checkout */}
      <section className="px-4 pt-5">
        <button
          type="button"
          aria-label="Pay with Apple Pay"
          className="w-full bg-black active:bg-black/80 text-white py-3.5 rounded-md flex items-center justify-center active:scale-[0.98] transition-transform"
        >
          <ApplePayMark className="h-5 w-auto" fill="white" />
        </button>
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading">Or begin checkout</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </section>

      {/* Contact */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">Contact</h2>
          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="text-xs text-[hsl(var(--brand-mid))] font-medium underline"
          >
            Have an account? Log in
          </button>
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-12 pl-9 pr-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
          />
        </div>
        <label className="flex items-center gap-2 mt-3 text-sm text-foreground">
          <input
            type="checkbox"
            checked={emailOptIn}
            onChange={(e) => setEmailOptIn(e.target.checked)}
            className="w-4 h-4 accent-[hsl(var(--brand-mid))]"
          />
          Email me with news and offers
        </label>
      </section>

      {/* Shipping address */}
      <section className="px-4 mt-6">
        <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-3">
          Shipping Address
        </h2>
        <div className="space-y-3">
          <select className="w-full h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]">
            <option>United Kingdom</option>
            <option>Ireland</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="First name" className="h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
            <input placeholder="Last name" className="h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
          </div>
          <input placeholder="Start typing your address" className="w-full h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
          <input placeholder="Address line 2 (optional)" className="w-full h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="City" className="h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
            <input placeholder="County" className="h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Postcode" className="h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
            <input placeholder="Company (optional)" className="h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
          </div>
          <input type="tel" placeholder="Phone (for delivery updates)" className="w-full h-12 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border safe-bottom">
        <div className="max-w-[640px] mx-auto px-4 py-3 space-y-2">
          <button
            onClick={() => navigate("/checkout/shipping-method")}
            className="w-full bg-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-dark))] text-primary-foreground font-heading font-medium uppercase tracking-wider text-[14px] py-4 rounded-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            Continue to Shipping <ChevronRight className="w-4 h-4" />
          </button>
          <Link to="/basket" className="block text-center text-xs text-muted-foreground underline">
            Return to basket
          </Link>
        </div>
      </div>
      {/* Login bottom sheet */}
      <Sheet open={loginOpen} onOpenChange={setLoginOpen}>
        <SheetContent
          side="bottom"
          className="rounded-t-2xl max-h-[85vh] flex flex-col p-0 mx-auto max-w-[640px]"
        >
          <div className="pt-2 pb-1 flex justify-center flex-shrink-0">
            <span className="block w-10 h-1.5 rounded-full bg-muted-foreground/30" />
          </div>
          <SheetHeader className="px-5 pt-2 pb-3 text-left border-b border-border flex-shrink-0">
            <SheetTitle className="font-heading uppercase tracking-wide text-[hsl(var(--brand-dark))] text-base">
              Log in to your account
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3">
            <p className="text-xs text-muted-foreground">
              Sign in for faster checkout, saved addresses and order history.
            </p>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-12 pl-9 pr-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                placeholder="Password"
                className="w-full h-12 pl-9 pr-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
              />
            </div>
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                onClick={() => setLoginOpen(false)}
                className="text-xs text-[hsl(var(--brand-mid))] underline"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="button"
              onClick={() => {
                setLoginOpen(false);
                navigate("/checkout/payment-logged-in");
              }}
              className="w-full h-12 bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-dark))]/90 text-white font-heading uppercase tracking-wider"
            >
              Log in
            </Button>
            <div className="flex items-center gap-3 py-1">
              <div className="flex-1 h-px bg-border" />
              <span className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading">Or</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setLoginOpen(false);
                navigate("/create-account");
              }}
              className="w-full h-12 font-heading uppercase tracking-wider border-[hsl(var(--brand-dark))] text-[hsl(var(--brand-dark))]"
            >
              Create an account
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CheckoutShipping;
