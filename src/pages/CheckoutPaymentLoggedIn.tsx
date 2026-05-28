import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Pencil, ShieldCheck, CreditCard, Plus } from "lucide-react";
import CheckoutHeader from "@/components/CheckoutHeader";
import CheckoutOrderSummary from "@/components/CheckoutOrderSummary";
import { VisaLogo, MastercardLogo, AmexLogo } from "@/components/PaymentLogos";
import ApplePayMark from "@/components/ApplePayMark";
import { fmtGBP } from "@/lib/format";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import BillingAddressForm from "@/components/BillingAddressForm";

type BillingMode = "same" | "saved" | "new";

const SAVED_ADDRESSES = [
  {
    id: "a1",
    name: "Stuart Alldis",
    lines: ["CDA, 1st Floor, 42 Wilbury Way", "Hitchin", "Hertfordshire, SG4 0AP, United Kingdom"],
    phone: "07881 111 111",
    isDefault: true,
  },
  {
    id: "a2",
    name: "Stuart Alldis",
    lines: ["CDA Test 240426", "42 Wilbury Way", "Hitchin", "Hertfordshire, SG4 0AP, United Kingdom"],
    phone: "020 3780 0808",
    isDefault: false,
  },
];

const CheckoutPaymentLoggedIn = () => {
  const [method, setMethod] = useState<"card" | "applepay">("card");
  const [billingMode, setBillingMode] = useState<BillingMode>("same");
  const [selectedAddress, setSelectedAddress] = useState<string>(
    SAVED_ADDRESSES.find((a) => a.isDefault)?.id ?? SAVED_ADDRESSES[0].id,
  );
  const [openSheet, setOpenSheet] = useState<null | "terms" | "privacy">(null);

  const total = 352.73;

  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden pb-40">
      <CheckoutHeader step={3} backTo="/checkout/shipping-method" backLabel="Back to shipping" />
      <CheckoutOrderSummary />

      {/* Saved info */}
      <section className="px-4 pt-5 space-y-2">
        {[
          { label: "Contact", value: "stuart.alldis@cda.group", to: "/checkout/shipping" },
          { label: "Ship to", value: "CDA, 42 Wilbury Way, Hitchin, SG4 0AP", to: "/checkout/shipping" },
          { label: "Method", value: "Free — Next Working Day Delivery", to: "/checkout/shipping-method" },
        ].map((row) => (
          <div key={row.label} className="border border-border rounded-lg p-3 flex items-start justify-between gap-3">
            <div className="text-sm min-w-0">
              <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading mb-1">{row.label}</p>
              <p className="text-foreground leading-snug truncate">{row.value}</p>
            </div>
            <Link to={row.to} className="text-[hsl(var(--brand-mid))] text-xs font-medium uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
              <Pencil className="w-3 h-3" /> Edit
            </Link>
          </div>
        ))}
      </section>

      {/* Payment */}
      <section className="px-4 mt-6">
        <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-1">Payment</h2>
        <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[hsl(var(--trust-green))]" /> All transactions are secure and encrypted
        </p>

        <div className="space-y-2">
          <label className={`block rounded-lg border-2 transition-colors ${method === "applepay" ? "border-[hsl(var(--brand-mid))] bg-[hsl(var(--brand-bg))]" : "border-border"}`}>
            <div className="flex items-center gap-3 p-3 cursor-pointer">
              <input type="radio" checked={method === "applepay"} onChange={() => setMethod("applepay")} className="w-4 h-4 accent-[hsl(var(--brand-mid))]" />
              <span className="flex-1 text-[14px] font-medium text-foreground">Apple Pay</span>
              <ApplePayMark className="h-5 w-auto" fill="black" />
            </div>
            {method === "applepay" && (
              <div className="px-3 pb-3 text-[12px] text-muted-foreground">
                You'll confirm payment with Face ID / Touch ID after you place your order.
              </div>
            )}
          </label>

          <label className={`block rounded-lg border-2 transition-colors ${method === "card" ? "border-[hsl(var(--brand-mid))] bg-[hsl(var(--brand-bg))]" : "border-border"}`}>
            <div className="flex items-center gap-3 p-3 cursor-pointer">
              <input type="radio" checked={method === "card"} onChange={() => setMethod("card")} className="w-4 h-4 accent-[hsl(var(--brand-mid))]" />
              <span className="flex-1 text-[14px] font-medium text-foreground flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Pay by Debit / Credit Card
              </span>
              <div className="flex gap-1"><VisaLogo /><MastercardLogo /><AmexLogo /></div>
            </div>
            {method === "card" && (
              <div className="px-3 pb-3 space-y-2">
                <input placeholder="Card number" inputMode="numeric" className="w-full h-11 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
                <div className="grid grid-cols-2 gap-2">
                  <input placeholder="MM / YY" inputMode="numeric" className="h-11 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
                  <input placeholder="CVC" inputMode="numeric" className="h-11 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
                </div>
                <input placeholder="Name on card" className="w-full h-11 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]" />
              </div>
            )}
          </label>
        </div>
      </section>

      {/* Billing address */}
      <section className="px-4 mt-6">
        <h2 className="font-heading text-base font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide mb-1">Billing Address</h2>
        <p className="text-xs text-muted-foreground mb-3">Select the address that matches your card or payment method</p>

        <div className="space-y-2">
          <label className={`flex items-center gap-3 p-3 rounded-lg border-2 ${billingMode === "same" ? "border-[hsl(var(--brand-mid))] bg-[hsl(var(--brand-bg))]" : "border-border"}`}>
            <input type="radio" checked={billingMode === "same"} onChange={() => setBillingMode("same")} className="w-4 h-4 accent-[hsl(var(--brand-mid))]" />
            <span className="text-[14px] font-medium">Same as shipping address</span>
          </label>
          <label className={`flex items-center gap-3 p-3 rounded-lg border-2 ${billingMode !== "same" ? "border-[hsl(var(--brand-mid))] bg-[hsl(var(--brand-bg))]" : "border-border"}`}>
            <input type="radio" checked={billingMode !== "same"} onChange={() => setBillingMode("saved")} className="w-4 h-4 accent-[hsl(var(--brand-mid))]" />
            <span className="text-[14px] font-medium">Use a different billing address</span>
          </label>
        </div>

        {billingMode !== "same" && (
          <div className="mt-4 space-y-3">
            <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-heading">Saved addresses</p>
            <div className="space-y-2">
              {SAVED_ADDRESSES.map((addr) => {
                const active = billingMode === "saved" && selectedAddress === addr.id;
                return (
                  <label
                    key={addr.id}
                    className={`flex gap-3 p-3 rounded-lg border-2 cursor-pointer ${active ? "border-[hsl(var(--brand-mid))] bg-[hsl(var(--brand-bg))]" : "border-border"}`}
                  >
                    <input
                      type="radio"
                      checked={active}
                      onChange={() => {
                        setBillingMode("saved");
                        setSelectedAddress(addr.id);
                      }}
                      className="w-4 h-4 mt-0.5 accent-[hsl(var(--brand-mid))]"
                    />
                    <div className="text-[14px] text-foreground leading-snug min-w-0">
                      <p className="font-medium">{addr.name}</p>
                      {addr.lines.map((l) => (
                        <p key={l} className="text-muted-foreground">{l}</p>
                      ))}
                      <p className="text-muted-foreground">{addr.phone}</p>
                      {addr.isDefault && (
                        <p className="text-[12px] text-[hsl(var(--brand-mid))] font-medium mt-1">(Default Billing)</p>
                      )}
                    </div>
                  </label>
                );
              })}

              <label className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer ${billingMode === "new" ? "border-[hsl(var(--brand-mid))] bg-[hsl(var(--brand-bg))]" : "border-border"}`}>
                <input
                  type="radio"
                  checked={billingMode === "new"}
                  onChange={() => setBillingMode("new")}
                  className="w-4 h-4 accent-[hsl(var(--brand-mid))]"
                />
                <span className="text-[14px] font-medium flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5" /> Use a new billing address
                </span>
              </label>
            </div>

            {billingMode === "new" && <BillingAddressForm />}
          </div>
        )}
      </section>

      <p className="px-4 mt-6 text-[12px] text-muted-foreground leading-relaxed">
        By clicking below and completing your order, you agree to purchase your item(s) from Isaac Lord as merchant of record for this transaction, on Isaac Lord{" "}
        <button type="button" onClick={() => setOpenSheet("terms")} className="underline text-[hsl(var(--brand-mid))]">Terms &amp; Conditions</button> and{" "}
        <button type="button" onClick={() => setOpenSheet("privacy")} className="underline text-[hsl(var(--brand-mid))]">Privacy Policy</button>.
      </p>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border safe-bottom">
        <div className="max-w-[640px] mx-auto px-4 py-3 space-y-2">
          {method === "applepay" ? (
            <button
              type="button"
              aria-label={`Pay ${fmtGBP(total)} with Apple Pay`}
              className="w-full bg-black active:bg-black/80 text-white py-4 rounded-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <ApplePayMark className="h-5 w-auto" fill="white" />
              <span className="text-[14px] font-medium">· {fmtGBP(total)}</span>
            </button>
          ) : (
            <button className="w-full bg-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-dark))] text-primary-foreground font-heading font-medium uppercase tracking-wider text-[14px] py-4 rounded-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              <Lock className="w-4 h-4" /> Place Order · {fmtGBP(total)}
            </button>
          )}
          <Link to="/basket" className="block text-center text-xs text-muted-foreground underline">
            Return to basket
          </Link>
        </div>
      </div>

      <Sheet open={openSheet !== null} onOpenChange={(o) => !o && setOpenSheet(null)}>
        <SheetContent side="bottom" className="rounded-t-2xl max-h-[85vh] flex flex-col p-0 mx-auto max-w-[640px]">
          <div className="pt-2 pb-1 flex justify-center flex-shrink-0">
            <span className="block w-10 h-1.5 rounded-full bg-muted-foreground/30" />
          </div>
          <SheetHeader className="px-5 pt-2 pb-3 text-left border-b border-border flex-shrink-0">
            <SheetTitle className="font-heading uppercase tracking-wide text-[hsl(var(--brand-dark))] text-base">
              {openSheet === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
            {openSheet === "privacy" ? (
              <>
                <p>This Privacy Policy explains how Isaac Lord collects, uses and protects your personal information when you shop with us or use our website.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Information we collect.</strong> Name, contact details, billing and delivery addresses, payment information, order history and device/browser data.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">How we use it.</strong> To process and deliver your orders, manage your account, provide customer support and — with your consent — send marketing communications.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Payments.</strong> Card details are processed securely by our PCI-compliant payment provider. We do not store full card numbers on our systems.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Sharing.</strong> We share data only with trusted partners required to fulfil your order (couriers, payment providers) and never sell your data to third parties.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Your rights.</strong> You can access, correct or delete your personal data at any time by contacting us.</p>
                <p>Full Privacy Policy is available on our website.</p>
              </>
            ) : (
              <>
                <p>By placing an order with Isaac Lord, you agree to be bound by these Terms & Conditions, our Privacy Policy and our Cookie Policy.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Pricing & availability.</strong> All prices are in GBP and subject to change. Trade pricing applies to approved trade accounts only.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Orders.</strong> All orders are subject to acceptance and product availability. We reserve the right to refuse any order.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Payment.</strong> Payment is taken at the point of order. All transactions are secure and encrypted.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Delivery.</strong> Delivery times are estimates. Risk passes to you on delivery.</p>
                <p><strong className="text-[hsl(var(--brand-dark))]">Returns.</strong> Please refer to our Returns Policy for full details on how to return products.</p>
                <p>Full Terms & Conditions are available on our website. Please read them carefully before placing your order.</p>
              </>
            )}
          </div>
          <div className="px-5 py-3 border-t border-border flex-shrink-0">
            <Button
              type="button"
              onClick={() => setOpenSheet(null)}
              className="w-full h-12 bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-dark))]/90 text-white font-heading uppercase tracking-wider"
            >
              Close
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CheckoutPaymentLoggedIn;
