import { Link } from "react-router-dom";
import {
  Package,
  Heart,
  Award,
  MapPin,
  UserCog,
  Briefcase,
  LogOut,
  ChevronRight,
} from "lucide-react";
import AccountLayout from "./AccountLayout";

const tiles = [
  { to: "/account/orders", label: "Order History", icon: Package, desc: "Track & reorder" },
  { to: "/account/addresses", label: "Address Book", icon: MapPin, desc: "Delivery & billing" },
  { to: "/account/favourites", label: "Favourites", icon: Heart, desc: "Saved products" },
  { to: "/account/profile", label: "Edit Profile", icon: UserCog, desc: "Name, email, password" },
  { to: "/account/loyalty", label: "Loyalty Points", icon: Award, desc: "Balance & rewards" },
  { to: "/account/trade-upgrade", label: "Apply for Trade Account", icon: Briefcase, desc: "Upgrade your account" },
];

const AccountDashboard = () => {
  return (
    <AccountLayout title="Hi Stuart, welcome back">
      <div className="px-4 pt-5 pb-8">
        <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
          From your account dashboard you can view recent orders, manage addresses,
          and update your details.
        </p>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <Link to="/account/orders" className="bg-[hsl(var(--brand-bg))] rounded-lg p-3 active:scale-[0.98] transition-transform">
            <div className="font-heading text-2xl text-[hsl(var(--brand-dark))] font-medium">12</div>
            <div className="text-[12px] uppercase tracking-wider text-muted-foreground mt-0.5">Orders</div>
          </Link>
          <Link to="/account/loyalty" className="bg-[hsl(var(--brand-bg))] rounded-lg p-3 active:scale-[0.98] transition-transform">
            <div className="font-heading text-2xl text-[hsl(var(--brand-dark))] font-medium">10,000</div>
            <div className="text-[12px] uppercase tracking-wider text-muted-foreground mt-0.5">Loyalty Points</div>
          </Link>
          <Link to="/account/favourites" className="bg-[hsl(var(--brand-bg))] rounded-lg p-3 active:scale-[0.98] transition-transform">
            <div className="font-heading text-2xl text-[hsl(var(--brand-dark))] font-medium">8</div>
            <div className="text-[12px] uppercase tracking-wider text-muted-foreground mt-0.5">Favourites</div>
          </Link>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-2 gap-3">
          {tiles.map(({ to, label, icon: Icon, desc }) => (
            <Link
              key={to}
              to={to}
              className="bg-card border border-border rounded-lg p-4 flex flex-col gap-2 active:scale-[0.98] transition-transform"
            >
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--brand-bg))] flex items-center justify-center">
                <Icon className="w-5 h-5 text-[hsl(var(--brand-mid))]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide leading-tight">
                  {label}
                </div>
                <div className="text-[12px] text-muted-foreground mt-0.5">{desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <Link
          to="/account/logout"
          className="mt-4 flex items-center justify-between bg-card border border-border rounded-lg px-4 py-4 active:scale-[0.99] transition-transform"
        >
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-[hsl(var(--brand-mid))]" strokeWidth={1.5} />
            <span className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
              Log Out
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
        </Link>
      </div>
    </AccountLayout>
  );
};

export default AccountDashboard;
