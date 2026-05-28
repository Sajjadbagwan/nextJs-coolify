import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Info, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import logo from "@/assets/isaac-lord-logo.svg";

type AccountType = "trade" | "private";

const tradeBenefits = [
  "Trade pricing & volume discounts",
  "30-day credit account (subject to approval)",
  "Dedicated trade account manager",
  "VAT invoices & order history",
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-xs uppercase tracking-widest text-[hsl(var(--brand-dark))] font-medium mt-6 mb-3">
    {children}
  </h2>
);

const Field = ({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-[12px] uppercase tracking-wider font-heading text-[hsl(var(--brand-dark))]">
      {label}
      {required && <span className="text-destructive ml-0.5">*</span>}
    </Label>
    {children}
  </div>
);

const CreateAccountPage = () => {
  const [type, setType] = useState<AccountType>("private");
  const [showInfo, setShowInfo] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [bizType, setBizType] = useState<string>("");
  const [vatRegistered, setVatRegistered] = useState<string>("");

  return (
    <div className="min-h-screen bg-[hsl(var(--brand-bg))] w-full max-w-[640px] mx-auto pb-10">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/login" aria-label="Back" className="text-[hsl(var(--brand-mid))] -ml-1">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <Link to="/" aria-label="Home">
            <img src={logo} alt="Isaac Lord" className="h-8 w-auto" />
          </Link>
          <div className="w-6" />
        </div>
      </header>

      <div className="px-4 py-5">
        <h1 className="font-heading text-2xl font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
          Create Account
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Choose your account type to get started.
        </p>

        {/* Account type toggle */}
        <div className="mt-5 flex items-center gap-2">
          <div className="flex-1 grid grid-cols-2 gap-2">
            <button
              onClick={() => setType("trade")}
              className={`h-12 rounded-md border-2 font-heading text-xs uppercase tracking-wider font-medium transition-colors ${
                type === "trade"
                  ? "bg-[hsl(var(--brand-mid))] text-white border-[hsl(var(--brand-mid))]"
                  : "bg-background text-[hsl(var(--brand-mid))] border-[hsl(var(--brand-mid))]"
              }`}
            >
              Trade Account
            </button>
            <button
              onClick={() => setType("private")}
              className={`h-12 rounded-md border-2 font-heading text-xs uppercase tracking-wider font-medium transition-colors ${
                type === "private"
                  ? "bg-[hsl(var(--brand-mid))] text-white border-[hsl(var(--brand-mid))]"
                  : "bg-background text-[hsl(var(--brand-mid))] border-[hsl(var(--brand-mid))]"
              }`}
            >
              Private Account
            </button>
          </div>
          <button
            onClick={() => setShowInfo(true)}
            aria-label="What account is correct for me?"
            className="text-[hsl(var(--brand-mid))] flex items-center justify-center p-2"
          >
            <Info className="w-6 h-6" />
          </button>
        </div>

        {/* Account type info sheet */}
        <Sheet open={showInfo} onOpenChange={setShowInfo}>
          <SheetContent
            side="bottom"
            className="rounded-t-2xl max-h-[85vh] overflow-y-auto p-0 mx-auto max-w-[640px]"
          >
            <div className="pt-2 pb-1 flex justify-center">
              <span className="block w-10 h-1.5 rounded-full bg-muted-foreground/30" />
            </div>
            <SheetHeader className="px-5 pt-2 pb-3 text-left border-b border-border">
              <SheetTitle className="font-heading uppercase tracking-wide text-[hsl(var(--brand-dark))] text-base">
                What account is correct for me?
              </SheetTitle>
            </SheetHeader>
            <div className="px-5 py-5 space-y-5">
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-[hsl(var(--brand-dark))] font-medium">
                  Trade Account
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  This account is for individuals purchasing on behalf of their own business or the company they work for. By providing your VAT or company registration number, you will automatically receive trade pricing.
                </p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-[hsl(var(--brand-dark))] font-medium">
                  Private Account
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  This account is intended for individuals making personal purchases, not for business purposes. Discounts are applied based on the quantity tiers displayed for each product.
                </p>
              </div>
              <Button
                type="button"
                onClick={() => setShowInfo(false)}
                className="w-full h-12 bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-dark))]/90 text-white font-heading uppercase tracking-wider"
              >
                Got it
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Trade benefits banner */}
        {type === "trade" && (
          <div className="mt-4 bg-[hsl(var(--brand-dark))] text-white rounded-lg p-4">
            <p className="font-heading text-[12px] uppercase tracking-widest text-white/70 font-medium">
              Trade Account Benefits
            </p>
            <ul className="mt-2 space-y-1.5">
              {tradeBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs">
                  <Check className="w-4 h-4 text-[hsl(var(--trust-green))] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <form className="space-y-4 mt-6">
          {/* ABOUT YOU */}
          <SectionTitle>{type === "trade" ? "About You" : "Your Details"}</SectionTitle>

          <div className="grid grid-cols-2 gap-3">
            <Field id="firstName" label="First Name" required>
              <Input id="firstName" autoComplete="given-name" className="h-12 bg-background" />
            </Field>
            <Field id="lastName" label="Last Name" required>
              <Input id="lastName" autoComplete="family-name" className="h-12 bg-background" />
            </Field>
          </div>

          <Field id="email" label="Email" required>
            <Input id="email" type="email" inputMode="email" autoComplete="email" className="h-12 bg-background" />
          </Field>

          <Field id="phone" label="Telephone No." required>
            <Input id="phone" type="tel" inputMode="tel" autoComplete="tel" className="h-12 bg-background" />
          </Field>

          <Field id="password" label="Password" required>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              className="h-12 bg-background"
            />
          </Field>

          <Field id="confirmPassword" label="Confirm Password" required>
            <Input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Re-enter your password"
              className="h-12 bg-background"
            />
          </Field>

          {/* TRADE ONLY: Business */}
          {type === "trade" && (
            <>
              <SectionTitle>About Your Business</SectionTitle>

              <Field id="company" label="Company Name" required>
                <Input id="company" autoComplete="organization" className="h-12 bg-background" />
              </Field>

              <Field id="trading" label="Trading Name (if different)">
                <Input id="trading" className="h-12 bg-background" />
              </Field>

              <SectionTitle>Business Type & Financials</SectionTitle>

              <Field id="bizType" label="Type of Business" required>
                <Select value={bizType} onValueChange={setBizType}>
                  <SelectTrigger id="bizType" className="h-12 bg-background">
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="limited">Limited Company</SelectItem>
                    <SelectItem value="sole">Sole Trader</SelectItem>
                    <SelectItem value="llp">Limited Liability Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {bizType === "limited" && (
                <Field id="companyNo" label="Company Number" required>
                  <Input id="companyNo" className="h-12 bg-background" placeholder="e.g. 12345678" />
                </Field>
              )}

              <Field id="vat" label="Are you VAT Registered?" required>
                <Select value={vatRegistered} onValueChange={setVatRegistered}>
                  <SelectTrigger id="vat" className="h-12 bg-background">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {vatRegistered === "yes" && (
                <Field id="vatNo" label="VAT Number" required>
                  <Input id="vatNo" className="h-12 bg-background" placeholder="GB123456789" />
                </Field>
              )}
            </>
          )}

          {/* ADDRESS */}
          <SectionTitle>{type === "trade" ? "Business Address" : "Your Address"}</SectionTitle>

          <Field id="country" label="Country" required>
            <Select defaultValue="gb">
              <SelectTrigger id="country" className="h-12 bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gb">United Kingdom</SelectItem>
                <SelectItem value="ie">Ireland</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field id="address1" label="Address" required>
            <Input id="address1" placeholder="Start typing your address" autoComplete="address-line1" className="h-12 bg-background" />
          </Field>

          <Field id="address2" label="Address Line 2">
            <Input id="address2" autoComplete="address-line2" className="h-12 bg-background" />
          </Field>

          <Field id="address3" label="Address Line 3">
            <Input id="address3" className="h-12 bg-background" />
          </Field>

          <Field id="city" label="Village / City / Town" required>
            <Input id="city" autoComplete="address-level2" className="h-12 bg-background" />
          </Field>

          <Field id="county" label="County">
            <Input id="county" autoComplete="address-level1" className="h-12 bg-background" />
          </Field>

          <Field id="postcode" label="Post Code" required>
            <Input id="postcode" autoComplete="postal-code" className="h-12 bg-background uppercase" />
          </Field>

          {/* Marketing */}
          <div className="mt-5 space-y-3">
            <label className="flex items-start gap-2.5 text-sm text-[hsl(var(--brand-dark))]">
              <Checkbox id="marketing" className="mt-0.5" />
              <span className="text-xs leading-relaxed">
                Send me offers, new product launches and trade tips by email.
              </span>
            </label>
            <label className="flex items-start gap-2.5 text-sm text-[hsl(var(--brand-dark))]">
              <Checkbox id="terms" className="mt-0.5" required />
              <span className="text-xs leading-relaxed">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="underline text-[hsl(var(--brand-mid))]"
                >
                  Terms & Conditions
                </button>
                .
              </span>
            </label>
          </div>

          {/* Terms & Conditions sheet */}
          <Sheet open={showTerms} onOpenChange={setShowTerms}>
            <SheetContent
              side="bottom"
              className="rounded-t-2xl max-h-[85vh] flex flex-col p-0 mx-auto max-w-[640px]"
            >
              <div className="pt-2 pb-1 flex justify-center flex-shrink-0">
                <span className="block w-10 h-1.5 rounded-full bg-muted-foreground/30" />
              </div>
              <SheetHeader className="px-5 pt-2 pb-3 text-left border-b border-border flex-shrink-0">
                <SheetTitle className="font-heading uppercase tracking-wide text-[hsl(var(--brand-dark))] text-base">
                  Terms & Conditions
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  By creating an account with Isaac Lord, you agree to be bound by these Terms & Conditions, our Privacy Policy and our Cookie Policy.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">Account use.</strong> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">Pricing & availability.</strong> All prices are shown in GBP and are subject to change without notice. Trade pricing is applied to approved trade accounts only.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">Orders.</strong> All orders are subject to acceptance and product availability. We reserve the right to refuse any order.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">Returns.</strong> Please refer to our Returns Policy for full details on how to return products.
                </p>
                <p>
                  <strong className="text-[hsl(var(--brand-dark))]">Data.</strong> Your personal data is processed in accordance with our Privacy Policy. We will never share your details with third parties without your consent.
                </p>
                <p>
                  Full Terms & Conditions are available on our website. Please read them carefully before creating your account.
                </p>
              </div>
              <div className="px-5 py-3 border-t border-border flex-shrink-0">
                <Button
                  type="button"
                  onClick={() => setShowTerms(false)}
                  className="w-full h-12 bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-dark))]/90 text-white font-heading uppercase tracking-wider"
                >
                  Close
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            type="submit"
            className="w-full h-12 mt-2 bg-[hsl(var(--brand-mid))] hover:bg-[hsl(var(--brand-mid))]/90 text-white font-heading uppercase tracking-wider"
          >
            {type === "trade" ? "Register Trade Account" : "Create Account"}
          </Button>

        </form>

        <p className="text-sm text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[hsl(var(--brand-mid))] font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccountPage;
