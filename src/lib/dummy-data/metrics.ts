// PURPOSE: Dummy dashboard/report KPI values (from the design). Keeping these
// here (instead of hardcoding inside components) keeps all sample data in one
// place. TODO: Replace with aggregated query results when the backend is ready.

/** Default global tax rate (percent) applied on the Fees & Taxes screen. */
export const DEFAULT_TAX_RATE = 0.3;

/** Super-admin dashboard KPIs. */
export const superDashboardStats = {
  todaysTransactions: 1284,
  todaysVolume: 284910,
  totalFees: 41830,
  feesTrend: "▲ 8.4% vs last month",
  tpnNote: "1 near monthly limit",
};

/** Store-owner dashboard KPIs (demo store: Al-Noor Mart). */
export const storeDashboardStats = {
  todaysTransactions: 182,
  todaysVolume: 8940,
  todaysDeposit: 8689.68,
  feesDeducted: 223.5,
  feeRate: 2.5,
  paymentStatus: "Pending" as const,
  settlesOn: "Jul 02",
};

/** Store-owner monthly summary report totals. */
export const storeReportStats = {
  month: "June 2026",
  totalVolume: 186400,
  transactionCount: 3412,
  avgTicket: 54.63,
  totalFees: 4660.0,
  totalDeposited: 181181.8,
};
