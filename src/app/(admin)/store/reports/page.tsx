// PURPOSE: Store-owner monthly summary report — totals + daily volume chart.
// TODO: Replace dummy data with aggregated API data when ready.

import { StatCard } from "@/components/shared/StatCard";
import { ReportsChart } from "@/components/admin/ReportsChart";
import { money } from "@/lib/ui";
import { storeReportStats } from "@/lib/dummy-data/metrics";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "16px",
} as const;

export default function ReportsPage() {
  const r = storeReportStats;
  return (
    <>
      <div style={gridStyle}>
        <StatCard label="Total Volume" value={money(r.totalVolume, 0)} sub={r.month} />
        <StatCard
          label="Transaction Count"
          value={r.transactionCount.toLocaleString("en-US")}
          sub={`Avg ${money(r.avgTicket)}`}
        />
        <StatCard label="Total Fees" value={money(r.totalFees)} sub="2.50% + tax" />
        <StatCard
          label="Total Deposited"
          value={<span style={{ color: "var(--accent)" }}>{money(r.totalDeposited)}</span>}
          sub="Net to bank"
        />
      </div>
      <ReportsChart />
    </>
  );
}
