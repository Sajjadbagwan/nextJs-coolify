import { Award, Info } from "lucide-react";
import AccountLayout from "./AccountLayout";

const AccountLoyalty = () => {
  return (
    <AccountLayout title="Loyalty Points" backTo="/account">
      <div className="px-4 pt-4 pb-8 space-y-5">
        {/* Header card */}
        <div className="bg-[hsl(var(--brand-dark))] text-white rounded-lg p-5 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-[hsl(var(--brand-mid))]/40 rounded-full" />
          <div className="absolute -right-2 -bottom-10 w-24 h-24 bg-[hsl(var(--brand-light-blue))]/30 rounded-full" />
          <div className="relative">
            <div className="flex items-center gap-2 text-[hsl(var(--brand-light-blue))] mb-1">
              <Award className="w-4 h-4" />
              <span className="text-[12px] uppercase tracking-widest font-medium">My Points & Rewards</span>
            </div>
            <div className="font-heading text-[42px] leading-none font-medium mt-3">10,000</div>
            <div className="text-[12px] text-white/70 uppercase tracking-wider mt-1">Available Balance</div>
            <div className="mt-3 inline-block bg-white text-[hsl(var(--brand-dark))] px-3 py-1.5 rounded text-[12px] font-heading font-medium uppercase tracking-wide">
              ≈ £100.00 to spend
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-[12px] uppercase tracking-widest text-muted-foreground">Total Earned</div>
            <div className="font-heading text-[22px] font-medium text-[hsl(var(--brand-dark))] mt-1">10,000</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-[12px] uppercase tracking-widest text-muted-foreground">Total Spent</div>
            <div className="font-heading text-[22px] font-medium text-muted-foreground mt-1">0</div>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-[hsl(var(--brand-bg))] rounded-lg p-4">
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))] mb-3">
            Reward Information
          </h2>
          <div className="space-y-3 text-[14px] text-foreground">
            <div>
              <div className="font-medium text-[hsl(var(--brand-dark))] mb-1">Current Exchange Rates</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Earn 1 point for every £1 spent</li>
                <li>• Redeem 100 points for £1 discount</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-[hsl(var(--brand-dark))] mb-1">Balance & Redemption</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Minimum 100 points to redeem</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 text-[12px] text-muted-foreground bg-card border border-border rounded-lg p-3">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-[hsl(var(--brand-mid))]" />
          <p>
            Loyalty points expire 12 months after being earned. (e.g. points earned in March
            expire end of February the following year.)
          </p>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AccountLoyalty;
