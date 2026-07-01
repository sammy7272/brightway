// PURPOSE: Store domain model. A store is a merchant location that receives a
// daily net deposit after Brightway fees + tax are deducted.

export type StoreStatus = "active" | "inactive";

export interface Store {
  /** Unique identifier. */
  id: string;
  /** Display name of the store, e.g. "Al-Noor Mart". */
  name: string;
  /** Full name of the store owner / primary contact. */
  owner: string;
  /** Whether the store is currently active or has been deactivated. */
  status: StoreStatus;
  /** Volume processed this month, in USD. */
  monthlyVolume: number;
  /** Brightway percentage fee, expressed as a percent (e.g. 2.5 = 2.5%). */
  feeRate: number;
}
