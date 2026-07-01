// PURPOSE: TPN (Terminal Profile Number) domain model. Each terminal is granted
// by the acquiring bank, assigned to a store, and tracked against a monthly
// volume limit (a warning shows at >= 80% of the limit).

export type TPNStatus = "active" | "inactive";

export interface TPN {
  /** Unique identifier. */
  id: string;
  /** Human-readable terminal number, e.g. "TPN-88213004". */
  tpnNumber: string;
  /** Store this terminal is assigned to. */
  storeName: string;
  /** Whether the terminal is currently active. */
  status: TPNStatus;
  /** Volume processed by this terminal so far this month, in USD. */
  monthlyVolume: number;
  /** Monthly processing limit for this terminal, in USD. */
  monthlyLimit: number;
}
