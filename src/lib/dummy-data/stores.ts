// PURPOSE: Dummy store records (from the Brightway Portal design). This is the
// ONLY place store sample data should live — components import from here.
// TODO: Replace with useStores()/Supabase data when the backend is ready.

import type { Store } from "@/types";

export const stores: Store[] = [
  {
    id: "s1",
    name: "Al-Noor Mart",
    owner: "Samyan Ahmed",
    status: "active",
    monthlyVolume: 48250,
    feeRate: 2.5,
  },
  {
    id: "s2",
    name: "City Grocery",
    owner: "Maria Santos",
    status: "active",
    monthlyVolume: 31780,
    feeRate: 2.75,
  },
  {
    id: "s3",
    name: "Metro Pharmacy",
    owner: "David Chen",
    status: "inactive",
    monthlyVolume: 19400,
    feeRate: 3.0,
  },
  {
    id: "s4",
    name: "Sunrise Bakery",
    owner: "Aisha Khan",
    status: "active",
    monthlyVolume: 12900,
    feeRate: 2.9,
  },
];

/** The store the demo "Store Admin" account is scoped to. */
export const STORE_ADMIN_ID = "s1";
