/** Format a number as £ with thousands separators and 2 decimals */
export const fmtGBP = (n: number) =>
  `£${n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** Add 20% VAT */
export const incVat = (n: number) => n * 1.2;
