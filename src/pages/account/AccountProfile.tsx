import { useState } from "react";
import { Info, X, Lock } from "lucide-react";
import AccountLayout from "./AccountLayout";

const Field = ({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label className="block text-[12px] font-medium text-[hsl(var(--brand-dark))]">
      {label}
      {required && <span className="text-[hsl(var(--sale-red))] ml-0.5">*</span>}
      {hint}
    </label>
    {children}
  </div>
);

const inputCls =
  "w-full h-12 px-3 rounded border border-border bg-card text-[14px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]";

const AccountProfile = () => {
  const [emailHelpOpen, setEmailHelpOpen] = useState(false);

  return (
    <AccountLayout title="Edit Profile" backTo="/account">
      <div className="px-4 pt-4 pb-8 space-y-6">
        <section className="space-y-4">
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))]">
            Your Details
          </h2>
          <Field label="First Name" required>
            <input defaultValue="Stuart" className={inputCls} />
          </Field>
          <Field label="Last Name" required>
            <input defaultValue="Alldis" className={inputCls} />
          </Field>
          <Field
            label="Email Address"
            required
            hint={
              <span className="ml-2 inline-flex items-center gap-1 align-middle text-[12px] uppercase tracking-wider font-medium text-muted-foreground bg-[hsl(var(--brand-bg))] border border-border rounded px-1.5 py-0.5">
                <Lock className="w-2.5 h-2.5" /> Locked
              </span>
            }
          >
            <div className="relative">
              <input
                value="t2@cda.group"
                readOnly
                disabled
                aria-readonly="true"
                className={`${inputCls} bg-[hsl(var(--brand-bg))] text-muted-foreground pr-10 cursor-not-allowed border-dashed`}
              />
              <Lock className="w-4 h-4 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <button
              type="button"
              onClick={() => setEmailHelpOpen(true)}
              className="mt-1.5 inline-flex items-center gap-1 text-[12px] text-[hsl(var(--brand-mid))] font-medium underline-offset-2 hover:underline"
            >
              <Info className="w-3 h-3" />
              Why can't I edit my email?
            </button>
          </Field>
          <Field label="Mobile Number" required>
            <input defaultValue="07881111111" type="tel" className={inputCls} />
          </Field>
        </section>

        <section className="space-y-4 pt-4 border-t border-border">
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))]">
            Change Your Password
          </h2>
          <Field label="Existing Password" required>
            <input type="password" placeholder="Enter current password" className={inputCls} />
          </Field>
          <Field label="New Password" required>
            <input type="password" placeholder="Enter new password" className={inputCls} />
          </Field>
          <Field label="Confirm New Password" required>
            <input type="password" placeholder="Confirm new password" className={inputCls} />
          </Field>
        </section>

        <button className="w-full h-12 bg-[hsl(var(--brand-dark))] text-white font-heading text-[14px] font-medium uppercase tracking-wide rounded active:bg-[hsl(var(--brand-mid))]">
          Save Changes
        </button>
      </div>

      {/* Email help overlay */}
      {emailHelpOpen && (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-foreground/60" onClick={() => setEmailHelpOpen(false)} />
          <div className="relative bg-background w-full max-w-[640px] rounded-t-xl sm:rounded-xl p-5 mx-auto">
            <button
              onClick={() => setEmailHelpOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 p-1 touch-target"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-heading text-[16px] font-medium uppercase tracking-wide text-[hsl(var(--brand-dark))] mb-2 pr-8">
              Email address
            </h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Your email address is used to log in and is linked to your order history. If
              you need to change it, please contact our customer service team on
              <a href="tel:01494835200" className="text-[hsl(var(--brand-mid))] font-medium"> 01494 835200</a>
              {" "}or email us, and we'll update it securely for you.
            </p>
            <button
              onClick={() => setEmailHelpOpen(false)}
              className="mt-4 w-full h-11 bg-[hsl(var(--brand-dark))] text-white font-heading text-[14px] font-medium uppercase tracking-wide rounded"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </AccountLayout>
  );
};

export default AccountProfile;
