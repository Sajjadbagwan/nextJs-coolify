import { Heart, Package, Minus, Plus, Mail } from "lucide-react";
import { useState } from "react";
import AccountLayout from "./AccountLayout";
import { fmtGBP } from "@/lib/format";

interface Fav {
  sku: string;
  name: string;
  price: number;
  stock: "In Stock" | "Awaiting Delivery" | "Out of Stock";
}

const initialFavs: Fav[] = [
  { sku: "LAM-ZP2", name: "Lamello Zeta P2 Cordless Biscuit Jointer DP Set in Systainer incl 2 x 18V 4Ah", price: 1867.20, stock: "In Stock" },
  { sku: "SEN-LUKA", name: "Sensio Luka Illuminated Cabinet with Alexa Built In: 700x660mm", price: 642.62, stock: "Awaiting Delivery" },
  { sku: "MAK-DHP484", name: "Makita DHP484 18V LXT Brushless Combi Drill", price: 159.00, stock: "In Stock" },
  { sku: "BLM-LBX", name: "Blum LEGRABOX Pure Drawer Set 500mm Orion Grey", price: 64.85, stock: "Out of Stock" },
];

const stockColor: Record<Fav["stock"], string> = {
  "In Stock": "bg-[hsl(var(--trust-green))] text-white",
  "Awaiting Delivery": "bg-[hsl(var(--sale-red))] text-white",
  "Out of Stock": "bg-muted-foreground text-white",
};

const USER_EMAIL = "t2@cda.group";

const AccountFavourites = () => {
  const [favs, setFavs] = useState(initialFavs);
  const [qtys, setQtys] = useState<Record<string, number>>(
    Object.fromEntries(initialFavs.map((f) => [f.sku, 1])),
  );
  const [notifyEmails, setNotifyEmails] = useState<Record<string, string>>(
    Object.fromEntries(initialFavs.map((f) => [f.sku, USER_EMAIL])),
  );
  const [notifySubmitted, setNotifySubmitted] = useState<Record<string, boolean>>({});

  const remove = (sku: string) => setFavs((f) => f.filter((x) => x.sku !== sku));
  const setQty = (sku: string, q: number) =>
    setQtys((s) => ({ ...s, [sku]: Math.max(1, q) }));

  return (
    <AccountLayout title="Favourites" backTo="/account">
      <div className="px-4 pt-4 pb-8">
        {favs.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-10 h-10 text-muted-foreground mx-auto mb-3" strokeWidth={1.5} />
            <p className="font-heading text-[16px] uppercase tracking-wide text-[hsl(var(--brand-dark))]">
              No favourites yet
            </p>
            <p className="text-[14px] text-muted-foreground mt-1">
              Tap the heart on any product to save it here.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[12px] text-muted-foreground mb-3">{favs.length} saved items</p>
            <div className="space-y-3">
              {favs.map((p) => (
                <div key={p.sku} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className={`text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 flex items-center justify-between ${stockColor[p.stock]}`}>
                    <span>{p.stock}</span>
                    <button
                      onClick={() => remove(p.sku)}
                      aria-label="Remove from favourites"
                      className="text-white"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                    </button>
                  </div>
                  <div className="p-3 flex gap-3">
                    <div className="w-20 h-20 flex-shrink-0 bg-[hsl(var(--brand-bg))] rounded flex items-center justify-center">
                      <Package className="w-7 h-7 text-muted-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] text-foreground leading-snug line-clamp-2 mb-1">{p.name}</div>
                      <div className="text-[12px] text-muted-foreground">
                        From <span className="font-heading text-[14px] text-[hsl(var(--brand-dark))] font-medium">{fmtGBP(p.price)}</span> <span className="text-[12px]">each (inc. VAT)</span>
                      </div>
                    </div>
                  </div>
                  {p.stock === "Out of Stock" ? (
                    <div className="px-3 pb-3">
                      <div className="bg-[hsl(var(--brand-bg))] rounded-lg p-3 border border-border">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--brand-mid))]/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-4 h-4 text-[hsl(var(--brand-mid))]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading text-[12px] font-medium text-[hsl(var(--brand-dark))] uppercase tracking-wide">
                              Notify Me When Back
                            </h3>
                            {notifySubmitted[p.sku] ? (
                              <p className="mt-2 text-[12px] text-[hsl(var(--trust-green))] font-medium">
                                ✓ You'll be notified at {notifyEmails[p.sku]}
                              </p>
                            ) : (
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  if (notifyEmails[p.sku]) {
                                    setNotifySubmitted((s) => ({ ...s, [p.sku]: true }));
                                  }
                                }}
                                className="mt-2 flex gap-2"
                              >
                                <input
                                  type="email"
                                  required
                                  value={notifyEmails[p.sku] || ""}
                                  onChange={(e) =>
                                    setNotifyEmails((s) => ({ ...s, [p.sku]: e.target.value }))
                                  }
                                  placeholder="your@email.com"
                                  size={1}
                                  className="flex-1 min-w-0 h-9 px-2.5 text-[12px] bg-card border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))]"
                                />
                                <button
                                  type="submit"
                                  className="bg-[hsl(var(--brand-mid))] text-primary-foreground font-heading text-[12px] font-medium uppercase tracking-wider px-3 rounded"
                                >
                                  Notify
                                </button>
                              </form>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px-3 pb-3 flex gap-2">
                      <div className="flex items-center border border-border rounded h-10">
                        <button
                          onClick={() => setQty(p.sku, qtys[p.sku] - 1)}
                          className="w-9 h-full flex items-center justify-center text-[hsl(var(--brand-dark))] active:bg-[hsl(var(--brand-bg))]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          value={qtys[p.sku]}
                          onChange={(e) => setQty(p.sku, parseInt(e.target.value) || 1)}
                          className="w-10 text-center text-[14px] font-medium bg-transparent focus:outline-none"
                        />
                        <button
                          onClick={() => setQty(p.sku, qtys[p.sku] + 1)}
                          className="w-9 h-full flex items-center justify-center text-[hsl(var(--brand-dark))] active:bg-[hsl(var(--brand-bg))]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button className="flex-1 h-10 bg-[hsl(var(--brand-dark))] text-white text-[12px] font-medium uppercase tracking-wide rounded active:bg-[hsl(var(--brand-mid))]">
                        Add to Basket
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </AccountLayout>
  );
};

export default AccountFavourites;
