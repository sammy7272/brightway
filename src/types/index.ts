// PURPOSE: Barrel file — single import point for all domain types.
// Usage: import { Store, Transaction, Deposit } from "@/types";

export type { Store, StoreStatus } from "./store";
export type {
  Transaction,
  CardType,
  TransactionStatus,
} from "./transaction";
export type { TPN, TPNStatus } from "./tpn";
export type { Deposit, PaymentStatus } from "./deposit";
export type { User, UserRole } from "./user";
