// PURPOSE: Dummy deposit records (from the design) for the demo store (Al-Noor
// Mart), mixing Paid and Pending. This is the ONLY place deposit sample data
// should live.
// TODO: Replace with the deposit calculation engine / API when ready.

import type { Deposit } from "@/types";

export const deposits: Deposit[] = [
  { id: "d1", storeId: "s1", date: "Jul 01", gross: 8940.0, fee: 223.5, net: 8689.68, status: "Pending", datePaid: null },
  { id: "d2", storeId: "s1", date: "Jun 30", gross: 7620.4, fee: 190.51, net: 7407.03, status: "Paid", datePaid: "Jul 01" },
  { id: "d3", storeId: "s1", date: "Jun 29", gross: 6180.0, fee: 154.5, net: 6006.96, status: "Paid", datePaid: "Jun 30" },
  { id: "d4", storeId: "s1", date: "Jun 28", gross: 9310.75, fee: 232.77, net: 9050.05, status: "Paid", datePaid: "Jun 29" },
  { id: "d5", storeId: "s1", date: "Jun 27", gross: 5440.2, fee: 136.01, net: 5287.87, status: "Paid", datePaid: "Jun 28" },
];
