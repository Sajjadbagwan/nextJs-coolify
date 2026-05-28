import { useParams, Link } from "react-router-dom";
import {
  Package,
  MapPin,
  Download,
  RotateCcw,
} from "lucide-react";
import AccountLayout from "./AccountLayout";
import { findOrder } from "./orders";
import { fmtGBP } from "@/lib/format";

const AccountOrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const order = id ? findOrder(id) : undefined;

  if (!order) {
    return (
      <AccountLayout title="Order not found" backTo="/account/orders" backLabel="Orders">
        <div className="px-4 py-10 text-center">
          <p className="text-[14px] text-muted-foreground">We couldn't find that order.</p>
          <Link
            to="/account/orders"
            className="inline-block mt-4 px-5 h-11 leading-[44px] bg-[hsl(var(--brand-dark))] text-white text-[14px] font-medium uppercase tracking-wide rounded"
          >
            Back to orders
          </Link>
        </div>
      </AccountLayout>
    );
  }

  const subtotal = order.items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 8.95;
  const vat = subtotal * 0.2;

  return (
    <AccountLayout title={`Order ${order.id}`} backTo="/account/orders" backLabel="Orders">
      <div className="px-4 pt-4 pb-8 space-y-5">
        {/* Order date */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-[12px] uppercase tracking-widest text-muted-foreground mb-1">Order Date</div>
          <div className="font-heading text-[16px] font-medium text-[hsl(var(--brand-dark))]">
            {new Date(order.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>

        {/* Shipping */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
            <span className="font-heading text-[12px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))]">
              Delivery Address
            </span>
          </div>
          <p className="text-[14px] text-foreground leading-relaxed">{order.shipTo}</p>
        </div>

        {/* Items */}
        <div>
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))] mb-2 px-1">
            Items ({order.itemCount})
          </h2>
          <div className="bg-card border border-border rounded-lg divide-y divide-border">
            {order.items.map((it) => (
              <div key={it.sku} className="p-3 flex gap-3">
                <div className="w-16 h-16 flex-shrink-0 bg-[hsl(var(--brand-bg))] rounded flex items-center justify-center">
                  <Package className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] text-foreground leading-snug line-clamp-2">{it.name}</div>
                  <div className="text-[12px] text-muted-foreground mt-0.5">SKU: {it.sku}</div>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[12px] text-muted-foreground">Qty {it.qty}</span>
                    <span className="text-[14px] font-heading font-medium text-[hsl(var(--brand-dark))]">
                      {fmtGBP(it.price * it.qty)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-[14px]">
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal (ex. VAT)</span>
            <span>{fmtGBP(subtotal)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span>{fmtGBP(shipping)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>VAT (20%)</span>
            <span>{fmtGBP(vat)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border font-heading text-[15px] font-medium text-[hsl(var(--brand-dark))]">
            <span>Total</span>
            <span>{fmtGBP(order.total)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button className="w-full h-12 bg-[hsl(var(--brand-dark))] text-white font-heading text-[14px] font-medium uppercase tracking-wide rounded flex items-center justify-center gap-2 active:bg-[hsl(var(--brand-mid))]">
            <RotateCcw className="w-4 h-4" /> Reorder All Items
          </button>
          <button className="w-full h-11 border border-border bg-card text-[hsl(var(--brand-dark))] text-[12px] font-medium uppercase tracking-wide rounded flex items-center justify-center gap-1.5 active:bg-[hsl(var(--brand-bg))]">
            <Download className="w-4 h-4" /> Download Invoice
          </button>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AccountOrderDetail;
