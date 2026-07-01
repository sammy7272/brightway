// PURPOSE: Store-owner dashboard — today's activity, recent transactions, and
// today's deposit breakdown for the owner's store. Data from /lib/dummy-data.

import { StatCard } from "@/components/shared/StatCard";
import { RecentTransactionsCard } from "@/components/shared/RecentTransactionsCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { ChartCard, DonutChart, VolumeAreaChart } from "@/components/shared/charts";
import {
  DepositsIcon,
  FeesIcon,
  TransactionsIcon,
} from "@/components/shared/icons";
import { MINUS, money, S } from "@/lib/ui";
import { STORE_ADMIN_ID, stores } from "@/lib/dummy-data/stores";
import { transactions } from "@/lib/dummy-data/transactions";
import { deposits } from "@/lib/dummy-data/deposits";
import { weekVolume } from "@/lib/dummy-data/charts";
import { cardMix } from "@/lib/dummy-data/reports";
import { DEFAULT_TAX_RATE, storeDashboardStats } from "@/lib/dummy-data/metrics";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "16px",
} as const;

export default function StoreDashboardPage() {
  const storeName =
    stores.find((s) => s.id === STORE_ADMIN_ID)?.name ?? "Your store";
  const rows = transactions
    .filter((t) => t.storeId === STORE_ADMIN_ID)
    .slice(0, 5);
  const dep = deposits.find((d) => d.storeId === STORE_ADMIN_ID) ?? deposits[0];
  const tax = (dep.gross * DEFAULT_TAX_RATE) / 100;

  return (
    <>
      <div style={gridStyle}>
        <StatCard
          label="Today's Transactions"
          value={storeDashboardStats.todaysTransactions}
          sub={`${money(storeDashboardStats.todaysVolume, 0)} volume today`}
          icon={<TransactionsIcon width={18} height={18} />}
        />
        <StatCard
          label="Today's Deposit"
          value={money(storeDashboardStats.todaysDeposit)}
          sub="Net to your account"
          icon={<DepositsIcon width={18} height={18} />}
        />
        <StatCard
          label="Fees Deducted"
          value={money(storeDashboardStats.feesDeducted)}
          sub={`${storeDashboardStats.feeRate.toFixed(2)}% Brightway rate`}
          icon={<FeesIcon width={18} height={18} />}
        />
        <StatCard
          label="Payment Status"
          sub={`Settles ${storeDashboardStats.settlesOn}`}
        >
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#FCF3D7", color: "#8A6A12", font: "600 14px 'IBM Plex Sans',sans-serif" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "currentColor" }} />
              {storeDashboardStats.paymentStatus}
            </span>
          </div>
        </StatCard>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "2 1 440px", minWidth: 0 }}>
          <RecentTransactionsCard rows={rows} meta={storeName} includeStore={false} />
        </div>
        <div style={{ flex: "1 1 280px", minWidth: 0 }}>
          <div style={S.card}>
            <div style={{ padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <h3 style={{ margin: 0, font: "600 15px 'IBM Plex Sans',sans-serif" }}>Today&apos;s Deposit</h3>
                <StatusBadge status={dep.status} />
              </div>
              <div style={{ font: "700 30px 'IBM Plex Sans',sans-serif", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>
                {money(dep.net)}
              </div>
              <div style={{ font: "500 12px 'IBM Plex Sans',sans-serif", color: "var(--muted)", marginTop: "2px" }}>
                Net to your bank account
              </div>
              <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "11px", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                <DepRow label="Gross sales" value={money(dep.gross)} />
                <DepRow label="Brightway fee" value={MINUS + money(dep.fee)} valueColor="#C0392B" />
                <DepRow label="Tax" value={MINUS + money(tax)} valueColor="#C0392B" />
              </div>
              <div style={{ marginTop: "14px", padding: "10px 12px", borderRadius: "9px", background: "var(--chip)", font: "500 12px 'IBM Plex Sans',sans-serif", color: "var(--accent)" }}>
                Expected to settle by Jul 02, 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "2 1 440px", minWidth: 0 }}>
          <ChartCard title="Weekly Volume" subtitle="This week" height={240}>
            <VolumeAreaChart data={weekVolume} xKey="label" yKey="value" tickInterval={0} />
          </ChartCard>
        </div>
        <div style={{ flex: "1 1 280px", minWidth: 0 }}>
          <ChartCard title="Card Type Mix" subtitle="Share of volume" height={240}>
            <DonutChart data={cardMix} variant="brand" unit="money" />
          </ChartCard>
        </div>
      </div>
    </>
  );
}

function DepRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ font: "400 13px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>{label}</span>
      <span style={{ font: "500 13.5px 'IBM Plex Sans',sans-serif", fontVariantNumeric: "tabular-nums", color: valueColor }}>{value}</span>
    </div>
  );
}
