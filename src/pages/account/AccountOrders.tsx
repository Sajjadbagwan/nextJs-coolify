import { Link } from "react-router-dom";
import { ChevronRight, Package, RotateCcw } from "lucide-react";
import AccountLayout from "./AccountLayout";
import { orders } from "./orders";
import { fmtGBP } from "@/lib/format";

const AccountOrders = () => {
  return (
    <AccountLayout title="Order History" backTo="/account">
      <div className="px-4 pt-4 pb-8">
        {orders.length === 0 ? (
          <div className="text-center py-12 px-4">
            <Package className="w-10 h-10 text-muted-foreground mx-auto mb-3" strokeWidth={1.5} />
            <p className="font-heading text-[16px] uppercase tracking-wide text-[hsl(var(--brand-dark))]">
              No orders yet
            </p>
            <p className="text-[14px] text-muted-foreground mt-1">Your orders will appear here once placed.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((o) => (
              <div key={o.id} className="bg-card border border-border rounded-lg overflow-hidden">
                <Link to={`/account/orders/${o.id}`} className="block p-4 active:bg-[hsl(var(--brand-bg))]">
                  <div className="mb-2">
                    <div className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
                      Order {o.id}
                    </div>
                    <div className="text-[12px] text-muted-foreground mt-0.5">
                      {new Date(o.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[14px] pt-2 border-t border-border">
                    <span className="text-muted-foreground">
                      {o.itemCount} {o.itemCount === 1 ? "item" : "items"}
                    </span>
                    <span className="font-heading font-medium text-[hsl(var(--brand-dark))]">
                      {fmtGBP(o.total)}
                    </span>
                  </div>
                </Link>

                <div className="grid grid-cols-2 border-t border-border">
                  <Link
                    to={`/account/orders/${o.id}`}
                    className="flex items-center justify-center gap-1.5 py-3 text-[12px] font-medium uppercase tracking-wide text-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-bg))] border-r border-border"
                  >
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <button className="flex items-center justify-center gap-1.5 py-3 text-[12px] font-medium uppercase tracking-wide text-white bg-[hsl(var(--brand-dark))] active:bg-[hsl(var(--brand-mid))]">
                    <RotateCcw className="w-3.5 h-3.5" /> Reorder
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AccountLayout>
  );
};

export default AccountOrders;
