// PURPOSE: Dummy TPN (terminal) records (from the design). One terminal is at
// ~80% of its monthly limit to exercise the volume-warning UI. This is the ONLY
// place TPN sample data should live.
// TODO: Replace with API data when the backend is ready.

import type { TPN } from "@/types";

export const tpns: TPN[] = [
  {
    id: "tpn-1",
    tpnNumber: "TPN-88213004",
    storeName: "Al-Noor Mart",
    status: "active",
    monthlyVolume: 48250,
    monthlyLimit: 60000, // 80% -> warning
  },
  {
    id: "tpn-2",
    tpnNumber: "TPN-88213011",
    storeName: "City Grocery",
    status: "active",
    monthlyVolume: 31780,
    monthlyLimit: 50000,
  },
  {
    id: "tpn-3",
    tpnNumber: "TPN-88213027",
    storeName: "Metro Pharmacy",
    status: "inactive",
    monthlyVolume: 19400,
    monthlyLimit: 40000,
  },
  {
    id: "tpn-4",
    tpnNumber: "TPN-88213035",
    storeName: "Sunrise Bakery",
    status: "active",
    monthlyVolume: 12900,
    monthlyLimit: 35000,
  },
];
