import { Link } from "react-router-dom";
import { Lock, ChevronLeft } from "lucide-react";
import logo from "@/assets/isaac-lord-logo.svg";

interface Props {
  step: 1 | 2 | 3;
  backTo?: string;
  backLabel?: string;
}

const steps = [
  { n: 1, label: "Address" },
  { n: 2, label: "Shipping" },
  { n: 3, label: "Payment" },
];

const CheckoutHeader = ({ step, backTo, backLabel }: Props) => (
  <header className="bg-background border-b border-border">
    <div className="px-4 py-3 flex items-center justify-between">
      <Link to="/basket" aria-label="Home">
        <img src={logo} alt="Isaac Lord" className="h-8 w-auto" />
      </Link>
      <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground font-medium">
        <Lock className="w-3.5 h-3.5 text-[hsl(var(--trust-green))]" />
        Secure Checkout
      </div>
    </div>
    {backTo && (
      <div className="px-4 pb-2">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1 text-xs text-[hsl(var(--brand-mid))] font-medium"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          {backLabel ?? "Back"}
        </Link>
      </div>
    )}
    <div className="px-4 pb-3">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => {
          const active = s.n === step;
          const done = s.n < step;
          return (
            <div key={s.n} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold ${
                    active
                      ? "bg-[hsl(var(--brand-mid))] text-white"
                      : done
                      ? "bg-[hsl(var(--trust-green))] text-white"
                      : "bg-border text-muted-foreground"
                  }`}
                >
                  {done ? "✓" : s.n}
                </div>
                <span
                  className={`text-[12px] uppercase tracking-wider font-heading mt-1 ${
                    active ? "text-[hsl(var(--brand-dark))] font-medium" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 mb-4 ${done ? "bg-[hsl(var(--trust-green))]" : "bg-border"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  </header>
);

export default CheckoutHeader;
