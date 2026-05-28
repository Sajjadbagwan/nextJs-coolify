import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import AccountLayout from "./AccountLayout";

const AccountLogout = () => {
  const navigate = useNavigate();
  return (
    <AccountLayout title="Log Out" backTo="/account">
      <div className="px-4 pt-8 pb-8">
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[hsl(var(--brand-bg))] flex items-center justify-center">
            <LogOut className="w-6 h-6 text-[hsl(var(--brand-mid))]" strokeWidth={1.5} />
          </div>
          <h2 className="font-heading text-[18px] font-medium uppercase tracking-wide text-[hsl(var(--brand-dark))] mb-2">
            Are you sure you want to log out?
          </h2>
          <p className="text-[14px] text-muted-foreground mb-6">
            You'll need to sign in again to access your account.
          </p>
          <div className="space-y-2">
            <button
              onClick={() => navigate("/login")}
              className="w-full h-12 bg-[hsl(var(--brand-dark))] text-white font-heading text-[14px] font-medium uppercase tracking-wide rounded active:bg-[hsl(var(--brand-mid))]"
            >
              Yes, Log Me Out
            </button>
            <button
              onClick={() => navigate("/account")}
              className="w-full h-12 border border-border bg-card text-[hsl(var(--brand-dark))] font-heading text-[14px] font-medium uppercase tracking-wide rounded active:bg-[hsl(var(--brand-bg))]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AccountLogout;
