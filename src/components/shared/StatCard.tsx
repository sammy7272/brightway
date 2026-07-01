// PURPOSE: KPI/stat card used on the dashboards and reports screens
// (label + icon chip + value + sub-text), matching the design.

import type { CSSProperties, ReactNode } from "react";

export interface StatCardProps {
  label: string;
  value?: ReactNode;
  sub?: ReactNode;
  subColor?: string;
  icon?: ReactNode;
  iconVariant?: "accent" | "highlight";
  children?: ReactNode;
}

const cardStyle: CSSProperties = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "16px",
  boxShadow: "0 1px 2px rgba(16,40,48,.05),0 14px 34px -26px rgba(16,40,48,.6)",
  padding: "17px 18px",
  display: "flex",
  flexDirection: "column",
  gap: "11px",
};

export function StatCard({
  label,
  value,
  sub,
  subColor = "var(--muted)",
  icon,
  iconVariant = "accent",
  children,
}: StatCardProps) {
  const chipStyle: CSSProperties =
    iconVariant === "highlight"
      ? { background: "rgba(228,155,166,.22)", color: "var(--highlight)" }
      : { background: "var(--chip)", color: "var(--accent)" };

  return (
    <div style={cardStyle}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
        <span style={{ font: "600 12px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>{label}</span>
        {icon && (
          <span style={{ width: "34px", height: "34px", borderRadius: "10px", display: "grid", placeItems: "center", ...chipStyle }}>
            {icon}
          </span>
        )}
      </div>
      {children ?? (
        <div style={{ font: "700 27px 'IBM Plex Sans',sans-serif", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
          {value}
        </div>
      )}
      {sub != null && (
        <div style={{ font: "500 12px 'IBM Plex Sans',sans-serif", color: subColor }}>{sub}</div>
      )}
    </div>
  );
}
