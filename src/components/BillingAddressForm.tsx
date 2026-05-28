const inputCls =
  "w-full h-11 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-light-blue))] placeholder:text-muted-foreground";

const BillingAddressForm = () => {
  return (
    <div className="space-y-2 mt-3">
      <div className="grid grid-cols-2 gap-2">
        <input placeholder="First name" className={inputCls} />
        <input placeholder="Last name" className={inputCls} />
      </div>
      <select className={`${inputCls} appearance-none bg-no-repeat bg-[right_0.75rem_center]`} defaultValue="GB">
        <option value="GB">United Kingdom</option>
        <option value="IE">Ireland</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <input placeholder="Address (Start typing your address)" className={inputCls} />
      <input placeholder="Apartment, Suite, etc. (optional)" className={inputCls} />
      <div className="grid grid-cols-2 gap-2">
        <input placeholder="City" className={inputCls} />
        <input placeholder="County" className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input placeholder="Postcode" className={inputCls} />
        <input placeholder="Company name (optional)" className={inputCls} />
      </div>
      <input placeholder="Phone" inputMode="tel" className={inputCls} />
    </div>
  );
};

export default BillingAddressForm;
