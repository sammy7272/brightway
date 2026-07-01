// PURPOSE: Derived chart series for the reporting screens (built from the base
// dummy data). Keeping the shaping here means components stay presentational.

import { monthVolume } from "./charts";
import { transactions } from "./transactions";
import { deposits } from "./deposits";
import type { CardType, TransactionStatus } from "@/types";

const FEE_RATE = 0.025; // 2.5% Brightway fee (illustrative)
const TAX_RATE = 0.003; // 0.30% tax (illustrative)

/** Daily transaction volume for the month (one point per day). */
export const dailyVolume = monthVolume.map((v, i) => ({
  day: i + 1,
  volume: v * 100, // scale the design's bar units into $ volume
}));

/** Daily deposit breakdown for the month (gross vs. net after fees + tax). */
export const dailyDeposits = dailyVolume.map(({ day, volume }) => {
  const fee = Math.round(volume * (FEE_RATE + TAX_RATE));
  return { day, gross: volume, net: volume - fee, fee };
});

/** Card-type mix (share of total $ volume), derived from transactions. */
export const cardMix: { name: CardType; value: number }[] = (() => {
  const totals = new Map<CardType, number>();
  for (const t of transactions) {
    totals.set(t.cardType, (totals.get(t.cardType) ?? 0) + t.amount);
  }
  return Array.from(totals, ([name, value]) => ({
    name,
    value: Math.round(value),
  })).sort((a, b) => b.value - a.value);
})();

/** Settlement status split, derived from transactions. */
export const statusMix: { name: TransactionStatus; value: number }[] = (() => {
  const counts = new Map<TransactionStatus, number>();
  for (const t of transactions) {
    counts.set(t.status, (counts.get(t.status) ?? 0) + 1);
  }
  return Array.from(counts, ([name, value]) => ({ name, value }));
})();

/** Recent deposits as gross vs. net, for the deposits bar chart. */
export const recentDeposits = deposits
  .slice()
  .reverse()
  .map((d) => ({ date: d.date, gross: d.gross, net: d.net }));
