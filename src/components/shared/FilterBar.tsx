// PURPOSE: Filter toolbar shell + styled <select>/<input> used by the
// transaction views. Matches the design's filter bar.

import type { CSSProperties, ReactNode } from "react";

const controlStyle: CSSProperties = {
  padding: "9px 12px",
  borderRadius: "9px",
  border: "1px solid var(--border)",
  background: "#fff",
  font: "500 13px 'IBM Plex Sans',sans-serif",
  color: "var(--text)",
  outline: "none",
  cursor: "pointer",
};

export function FilterBar({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        alignItems: "center",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "14px 16px",
      }}
    >
      {children}
    </div>
  );
}

export function FilterSelect({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={controlStyle}
    >
      {children}
    </select>
  );
}

export function FilterDate() {
  return <input type="date" style={{ ...controlStyle, cursor: "text" }} />;
}

export function FilterCount({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        marginLeft: "auto",
        font: "500 13px 'IBM Plex Sans',sans-serif",
        color: "var(--muted)",
      }}
    >
      {children}
    </span>
  );
}
