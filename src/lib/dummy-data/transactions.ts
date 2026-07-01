// PURPOSE: Dummy transaction records (from the design), spread across the stores.
// This is the ONLY place transaction sample data should live.
// TODO: Replace with useTransactions()/API data when the backend is ready.

import type { Transaction } from "@/types";

export const transactions: Transaction[] = [
  { id: "t1", date: "Jul 01", storeId: "s1", storeName: "Al-Noor Mart", tpn: "TPN-88213004", amount: 1240.0, cardType: "Visa", fee: 31.0, net: 1205.28, status: "Settled" },
  { id: "t2", date: "Jul 01", storeId: "s2", storeName: "City Grocery", tpn: "TPN-88213011", amount: 642.5, cardType: "Mastercard", fee: 17.67, net: 622.9, status: "Settled" },
  { id: "t3", date: "Jul 01", storeId: "s4", storeName: "Sunrise Bakery", tpn: "TPN-88213035", amount: 88.75, cardType: "Visa", fee: 2.57, net: 85.91, status: "Pending" },
  { id: "t4", date: "Jun 30", storeId: "s3", storeName: "Metro Pharmacy", tpn: "TPN-88213027", amount: 1560.0, cardType: "Amex", fee: 46.8, net: 1508.52, status: "Settled" },
  { id: "t5", date: "Jun 30", storeId: "s1", storeName: "Al-Noor Mart", tpn: "TPN-88213004", amount: 415.2, cardType: "Mastercard", fee: 10.38, net: 403.57, status: "Settled" },
  { id: "t6", date: "Jun 30", storeId: "s2", storeName: "City Grocery", tpn: "TPN-88213011", amount: 2310.0, cardType: "Visa", fee: 63.53, net: 2239.54, status: "Pending" },
  { id: "t7", date: "Jun 29", storeId: "s1", storeName: "Al-Noor Mart", tpn: "TPN-88213004", amount: 97.4, cardType: "Visa", fee: 2.44, net: 94.67, status: "Settled" },
  { id: "t8", date: "Jun 29", storeId: "s4", storeName: "Sunrise Bakery", tpn: "TPN-88213035", amount: 530.0, cardType: "Discover", fee: 15.37, net: 513.04, status: "Settled" },
  { id: "t9", date: "Jun 28", storeId: "s3", storeName: "Metro Pharmacy", tpn: "TPN-88213027", amount: 1180.0, cardType: "Mastercard", fee: 35.4, net: 1141.06, status: "Settled" },
  { id: "t10", date: "Jun 28", storeId: "s1", storeName: "Al-Noor Mart", tpn: "TPN-88213004", amount: 764.9, cardType: "Amex", fee: 19.12, net: 743.49, status: "Pending" },
];
