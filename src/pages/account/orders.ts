export type OrderStatus = "Delivered" | "Dispatched" | "Processing" | "Cancelled";

export interface OrderItem {
  sku: string;
  name: string;
  qty: number;
  price: number;
  image?: string;
}

export interface Order {
  id: string;
  date: string; // ISO
  status: OrderStatus;
  total: number;
  itemCount: number;
  shipTo: string;
  items: OrderItem[];
}

export const orders: Order[] = [
  {
    id: "IL-104582",
    date: "2026-04-12",
    status: "Delivered",
    total: 247.18,
    itemCount: 4,
    shipTo: "42 Wilbury Way, Hitchin SG4 0AP",
    items: [
      { sku: "BLM-CL110", name: "Blum CLIP top BLUMOTION 110° Hinge (pair)", qty: 10, price: 4.95 },
      { sku: "MAK-DHP484", name: "Makita DHP484 18V Combi Drill", qty: 1, price: 159.00 },
      { sku: "MIR-DEROS5", name: "Mirka DEROS 5650CV Sander", qty: 1, price: 38.20 },
      { sku: "REI-4X40", name: "Reisser R2 Wood Screws 4x40mm (200pk)", qty: 1, price: 0.55 },
    ],
  },
  {
    id: "IL-104511",
    date: "2026-03-28",
    status: "Delivered",
    total: 89.40,
    itemCount: 2,
    shipTo: "42 Wilbury Way, Hitchin SG4 0AP",
    items: [
      { sku: "DEW-DCD796", name: "DeWalt DCD796 Brushless Combi Drill (Body)", qty: 1, price: 79.00 },
      { sku: "ABR-P120", name: "Mirka Abranet P120 Discs (50pk)", qty: 1, price: 10.40 },
    ],
  },
  {
    id: "IL-104387",
    date: "2026-02-14",
    status: "Dispatched",
    total: 412.00,
    itemCount: 6,
    shipTo: "42 Wilbury Way, Hitchin SG4 0AP",
    items: [
      { sku: "BSC-GBH", name: "Bosch GBH 18V-26 SDS+ Drill", qty: 1, price: 220.00 },
      { sku: "HAF-HDL", name: "Häfele Bow Handle Brushed Steel 128mm", qty: 20, price: 9.60 },
    ],
  },
  {
    id: "IL-104201",
    date: "2026-01-09",
    status: "Cancelled",
    total: 32.10,
    itemCount: 1,
    shipTo: "42 Wilbury Way, Hitchin SG4 0AP",
    items: [
      { sku: "CAR-K87", name: "Carhartt K87 Pocket T-Shirt — Navy L", qty: 1, price: 32.10 },
    ],
  },
];

export const findOrder = (id: string) => orders.find((o) => o.id === id);
