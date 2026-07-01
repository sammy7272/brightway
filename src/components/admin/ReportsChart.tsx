"use client";

// PURPOSE: Store-owner monthly summary charts — daily volume, gross vs. net
// deposits, card-type mix, and settlement status. All animated (recharts).

import {
  ChartCard,
  DepositsBarChart,
  DonutChart,
  VolumeAreaChart,
} from "@/components/shared/charts";
import { storeReportStats } from "@/lib/dummy-data/metrics";
import {
  cardMix,
  dailyDeposits,
  dailyVolume,
  recentDeposits,
  statusMix,
} from "@/lib/dummy-data/reports";

const col = { flex: "1 1 360px", minWidth: 0 } as const;

export function ReportsChart() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ChartCard title="Daily Transaction Volume" subtitle={storeReportStats.month} height={300}>
        <VolumeAreaChart data={dailyVolume} xKey="day" yKey="volume" />
      </ChartCard>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={col}>
          <ChartCard title="Deposits — gross vs. net" subtitle="Recent" height={260}>
            <DepositsBarChart data={recentDeposits} />
          </ChartCard>
        </div>
        <div style={col}>
          <ChartCard title="Net Deposited" subtitle={storeReportStats.month} height={260}>
            <VolumeAreaChart data={dailyDeposits} xKey="day" yKey="net" />
          </ChartCard>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={col}>
          <ChartCard title="Card Type Mix" subtitle="Share of volume" height={240}>
            <DonutChart data={cardMix} variant="brand" unit="money" />
          </ChartCard>
        </div>
        <div style={col}>
          <ChartCard title="Settlement Status" subtitle="Transactions" height={240}>
            <DonutChart data={statusMix} variant="status" />
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
