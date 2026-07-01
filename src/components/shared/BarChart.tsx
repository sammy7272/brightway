// PURPOSE: Lightweight CSS bar chart used for "Daily Volume" (week) and "Daily
// Transaction Volume" (month), reproducing the design's inline bar chart.

import type { CSSProperties } from "react";
import { money, S } from "@/lib/ui";

export interface BarChartProps {
  /** Series values. */
  values: number[];
  /** Optional x-axis labels (same length as values); blank strings are allowed. */
  labels?: string[];
  variant?: "week" | "month";
}

export function BarChart({ values, labels, variant = "week" }: BarChartProps) {
  const max = Math.max(...values, 1);
  const isMonth = variant === "month";

  const wrapStyle: CSSProperties = isMonth
    ? { display: "flex", alignItems: "stretch", gap: "4px", height: "210px" }
    : S.chartWrap;

  return (
    <div style={wrapStyle}>
      {values.map((v, i) => {
        const fill: CSSProperties = {
          width: "100%",
          height: Math.round((v / max) * 100) + "%",
          minHeight: isMonth ? "3px" : "4px",
          background: "var(--accent)",
          borderRadius: isMonth ? "3px 3px 1px 1px" : "6px 6px 2px 2px",
        };
        return (
          <div key={i} style={S.chartCol} title={money(v, 0)}>
            <div style={S.chartBarArea}>
              <div style={fill} />
            </div>
            <span style={S.chartLabel}>{labels?.[i] ?? ""}</span>
          </div>
        );
      })}
    </div>
  );
}
