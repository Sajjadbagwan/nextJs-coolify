import { useState } from "react";
import { X } from "lucide-react";
import AccountLayout from "./AccountLayout";

const inputCls =
  "w-full h-12 px-3 rounded border border-border bg-card text-[14px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]";
const selectCls = inputCls + " appearance-none bg-card";

const AccountTradeUpgrade = () => {
  const [businessType, setBusinessType] = useState("");
  const [vatRegistered, setVatRegistered] = useState("");
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <AccountLayout title="Trade Account Upgrade" backTo="/account">
      <div className="px-4 pt-4 pb-8 space-y-5">
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          To upgrade to a trade account, please complete the form below about your business.
        </p>

        <section className="space-y-3">
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))]">
            About Your Business
          </h2>
          <input placeholder="Company Name" className={inputCls} />
          <input placeholder="Telephone Number*" type="tel" className={inputCls} />
          <select defaultValue="UK" className={selectCls}>
            <option value="UK">United Kingdom</option>
            <option>Ireland</option>
          </select>
          <input placeholder="Address Line 1* (Start typing your address)" className={inputCls} />
          <input placeholder="Address Line 2*" className={inputCls} />
          <input placeholder="Address Line 3" className={inputCls} />
          <input placeholder="Village / City / Town*" className={inputCls} />
          <input placeholder="County" className={inputCls} />
          <input placeholder="Post Code*" className={inputCls} />
        </section>

        <section className="space-y-3 pt-2">
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))]">
            Business Type & Financials
          </h2>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className={selectCls}
          >
            <option value="">Type of Business*</option>
            <option value="partnership">Partnership</option>
            <option value="ltd">Limited Company</option>
            <option value="sole">Sole Trader</option>
            <option value="llp">Limited Liability Partnership</option>
          </select>

          {businessType === "ltd" && (
            <input placeholder="Company Number*" className={inputCls} />
          )}

          <select
            value={vatRegistered}
            onChange={(e) => setVatRegistered(e.target.value)}
            className={selectCls}
          >
            <option value="">Are you VAT Registered?*</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          {vatRegistered === "yes" && (
            <input placeholder="VAT Number*" className={inputCls} />
          )}
        </section>

        <section className="space-y-3 pt-2">
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))]">
            Lastly
          </h2>
          <label className="flex items-start gap-3 text-[14px] text-foreground">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-[hsl(var(--brand-dark))]" />
            <span>
              I agree to the{" "}
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="text-[hsl(var(--brand-mid))] underline font-medium"
              >
                terms and conditions
              </button>
              <span className="text-[hsl(var(--sale-red))]">*</span>
            </span>
          </label>
        </section>

        <button className="w-full h-12 bg-[hsl(var(--brand-dark))] text-white font-heading text-[14px] font-medium uppercase tracking-wide rounded active:bg-[hsl(var(--brand-mid))]">
          Register Trade Account
        </button>
      </div>

      {termsOpen && (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-foreground/60" onClick={() => setTermsOpen(false)} />
          <div className="relative bg-background w-full max-w-[640px] rounded-t-xl sm:rounded-xl mx-auto max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h3 className="font-heading text-[16px] font-medium uppercase tracking-wide text-[hsl(var(--brand-dark))]">
                Terms & Conditions
              </h3>
              <button onClick={() => setTermsOpen(false)} aria-label="Close" className="p-1 touch-target">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-4 overflow-y-auto text-[14px] text-foreground leading-relaxed space-y-3">
              <p>By registering for a trade account with Isaac Lord, you agree to the following terms:</p>
              <p>
                Trade applications are subject to verification. We may request supporting
                documentation including proof of trade, VAT registration, and company
                incorporation details.
              </p>
              <p>
                Trade pricing is for business use only and not for resale unless agreed in
                writing. All prices shown to trade customers are exclusive of VAT.
              </p>
              <p>
                Payment terms are strictly 30 days from invoice date for credit accounts.
                Pro-forma accounts require payment in advance.
              </p>
              <p>Full terms available on our website.</p>
            </div>
            <div className="px-5 py-4 border-t border-border">
              <button
                onClick={() => setTermsOpen(false)}
                className="w-full h-11 bg-[hsl(var(--brand-dark))] text-white font-heading text-[14px] font-medium uppercase tracking-wide rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AccountLayout>
  );
};

export default AccountTradeUpgrade;
