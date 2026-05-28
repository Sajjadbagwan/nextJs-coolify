import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, User } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import MobileFooter from "@/components/MobileFooter";

interface Props {
  title: string;
  backTo?: string;
  backLabel?: string;
  children: ReactNode;
  /** Optional eyebrow shown above title, e.g. "PRIVATE ACCOUNT" */
  eyebrow?: string;
}

const AccountLayout = ({ title, backTo, backLabel = "Account", children, eyebrow = "Private Account" }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background w-full max-w-[640px] mx-auto overflow-x-hidden flex flex-col">
      <MobileHeader />

      {/* Account hero strip */}
      <div className="bg-[hsl(var(--brand-dark))] text-primary-foreground px-4 pt-4 pb-5">
        {backTo ? (
          <button
            onClick={() => navigate(backTo)}
            className="flex items-center gap-1 text-[14px] text-white/80 mb-2 -ml-1 touch-target"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-[hsl(var(--brand-light-blue))] font-medium mb-2">
            <User className="w-3.5 h-3.5" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-heading text-[22px] font-medium uppercase tracking-wide leading-tight">
          {title}
        </h1>
      </div>

      <main className="flex-1">{children}</main>

      <MobileFooter />
    </div>
  );
};

export default AccountLayout;
