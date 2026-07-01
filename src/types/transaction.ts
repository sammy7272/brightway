// PURPOSE: Transaction domain model. One row per card transaction imported from
// the daily Dejavoo CSV and matched to a store via its TPN.

export type CardType = "Visa" | "Mastercard" | "Amex" | "Discover";

export type TransactionStatus = "Settled" | "Pending" | "Declined";

export interface Transaction {
  /** Unique identifier. */
  id: string;
  /** Short display date, e.g. "Jul 01". */
  date: string;
  /** Store this transaction belongs to. */
  storeId: string;
  /** Denormalized store name for display. */
  storeName: string;
  /** Terminal (TPN) that processed the transaction. */
  tpn: string;
  /** Gross transaction amount in USD. */
  amount: number;
  /** Card brand used for the transaction. */
  cardType: CardType;
  /** Fee deducted for this transaction in USD. */
  fee: number;
  /** Net amount after fees (amount - fee) in USD. */
  net: number;
  /** Settlement state of the transaction. */
  status: TransactionStatus;
}
