import { Plus, MapPin, Pencil, Trash2 } from "lucide-react";
import AccountLayout from "./AccountLayout";

const defaultBilling = {
  name: "Stuart Alldis",
  lines: ["CDA, 1st Floor", "42 Wilbury Way", "Hitchin", "Hertfordshire", "SG4 0AP", "United Kingdom"],
};
const defaultShipping = defaultBilling;
const additional = [
  {
    name: "Stuart Alldis",
    lines: ["CDA, 1st Floor", "42 Wilbury Way", "Hitchin", "SG4 0AP", "United Kingdom"],
  },
];

const AddressCard = ({
  badge,
  name,
  lines,
  showRemove,
}: {
  badge?: string;
  name: string;
  lines: string[];
  showRemove?: boolean;
}) => (
  <div className="bg-card border border-border rounded-lg overflow-hidden">
    {badge && (
      <div className="bg-[hsl(var(--brand-bg))] px-4 py-2 font-heading text-[12px] font-medium uppercase tracking-widest text-[hsl(var(--brand-dark))] flex items-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-[hsl(var(--brand-mid))]" />
        {badge}
      </div>
    )}
    <div className="p-4">
      <div className="font-heading text-[14px] font-medium text-[hsl(var(--brand-dark))] mb-1">{name}</div>
      <div className="text-[14px] text-foreground space-y-0.5">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-2 border-t border-border">
      <button className="flex items-center justify-center gap-1.5 py-3 text-[12px] font-medium uppercase tracking-wide text-[hsl(var(--brand-mid))] active:bg-[hsl(var(--brand-bg))] border-r border-border">
        <Pencil className="w-3.5 h-3.5" /> Edit
      </button>
      {showRemove ? (
        <button className="flex items-center justify-center gap-1.5 py-3 text-[12px] font-medium uppercase tracking-wide text-[hsl(var(--sale-red))] active:bg-[hsl(var(--brand-bg))]">
          <Trash2 className="w-3.5 h-3.5" /> Remove
        </button>
      ) : (
        <button className="py-3 text-[12px] font-medium uppercase tracking-wide text-muted-foreground active:bg-[hsl(var(--brand-bg))]">
          Set Default
        </button>
      )}
    </div>
  </div>
);

const AccountAddresses = () => {
  return (
    <AccountLayout title="Address Book" backTo="/account">
      <div className="px-4 pt-4 pb-8 space-y-4">
        <AddressCard badge="Default Billing" name={defaultBilling.name} lines={defaultBilling.lines} />
        <AddressCard badge="Default Shipping" name={defaultShipping.name} lines={defaultShipping.lines} />

        <div className="pt-2">
          <h2 className="font-heading text-[14px] font-medium uppercase tracking-wider text-[hsl(var(--brand-dark))] mb-3 px-1">
            Additional Addresses
          </h2>
          <div className="space-y-3">
            {additional.map((a, i) => (
              <AddressCard key={i} name={a.name} lines={a.lines} showRemove />
            ))}
          </div>
        </div>

        <button className="w-full h-12 border-2 border-dashed border-[hsl(var(--brand-mid))] text-[hsl(var(--brand-mid))] rounded-lg flex items-center justify-center gap-2 font-heading text-[14px] font-medium uppercase tracking-wide active:bg-[hsl(var(--brand-bg))]">
          <Plus className="w-4 h-4" /> Add New Address
        </button>
      </div>
    </AccountLayout>
  );
};

export default AccountAddresses;
