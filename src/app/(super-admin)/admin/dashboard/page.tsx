// PURPOSE: Super-admin dashboard — portfolio KPIs, recent transactions across
// all stores, and this week's daily volume. Data from /lib/dummy-data.

import { StatCard } from "@/components/shared/StatCard";
import { RecentTransactionsCard } from "@/components/shared/RecentTransactionsCard";
import { ChartCard, SUPER_ACCENT, VolumeAreaChart } from "@/components/shared/charts";
import {
  FeesIcon,
  StoreIcon,
  TerminalIcon,
  TransactionsIcon,
} from "@/components/shared/icons";
import { money } from "@/lib/ui";
import { stores } from "@/lib/dummy-data/stores";
import { tpns } from "@/lib/dummy-data/tpns";
import { transactions } from "@/lib/dummy-data/transactions";
import { weekVolume } from "@/lib/dummy-data/charts";
import { superDashboardStats } from "@/lib/dummy-data/metrics";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "16px",
} as const;

export default function SuperAdminDashboardPage() {
  const activeStores = stores.filter((s) => s.status === "active").length;
  const activeTpns = tpns.filter((t) => t.status === "active").length;

  return (
    <>
      <div style={gridStyle}>
        <StatCard
          label="Total Stores"
          value={stores.length}
          sub={`${activeStores} active · ${stores.length - activeStores} inactive`}
          icon={<StoreIcon width={18} height={18} />}
        />
        <StatCard
          label="Today's Transactions"
          value={superDashboardStats.todaysTransactions.toLocaleString("en-US")}
          sub={`${money(superDashboardStats.todaysVolume, 0)} volume today`}
          icon={<TransactionsIcon width={18} height={18} />}
        />
        <StatCard
          label="Total Fees Collected"
          value={money(superDashboardStats.totalFees, 0)}
          sub={superDashboardStats.feesTrend}
          subColor="#137A48"
          icon={<FeesIcon width={18} height={18} />}
          iconVariant="highlight"
        />
        <StatCard
          label="Active TPNs"
          value={`${activeTpns} / ${tpns.length}`}
          sub={superDashboardStats.tpnNote}
          subColor="#B4650A"
          icon={<TerminalIcon width={18} height={18} />}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "2 1 440px", minWidth: 0 }}>
          <RecentTransactionsCard
            rows={transactions.slice(0, 6)}
            meta="Across all stores"
            includeStore
          />
        </div>
        <div style={{ flex: "1 1 320px", minWidth: 0 }}>
          <ChartCard title="Daily Volume" subtitle="This week" height={230}>
            <VolumeAreaChart data={weekVolume} xKey="label" yKey="value" tickInterval={0} accent={SUPER_ACCENT} />
          </ChartCard>
        </div>
      </div>
    </>
  );
}
