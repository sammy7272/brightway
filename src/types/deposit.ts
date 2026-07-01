// PURPOSE: Deposit domain model. One row per store per day, representing the net
// ACH deposit calculated after fees, plus its payment status.

export type PaymentStatus = "Paid" | "Pending";

export interface Deposit {
  /** Unique identifier. */
  id: string;
  /** Store this deposit is for. */
  storeId: string;
  /** Short display date the deposit was calculated for, e.g. "Jul 01". */
  date: string;
  /** Total gross volume before fees, in USD. */
  gross: number;
  /** Total Brightway fee deducted, in USD. */
  fee: number;
  /** Net amount deposited to the store (gross - fee), in USD. */
  net: number;
  /** Whether the deposit has been paid out or is still pending. */
  status: PaymentStatus;
  /** Display date the payment was made, or null if not yet paid. */
  datePaid: string | null;
}
