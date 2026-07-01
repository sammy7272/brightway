// PURPOSE: Shared style tokens + helpers that reproduce the Brightway Portal
// design (colors, table styles, badges, money formatting). Plain data/functions
// so both server and client components can import them.

import type { CSSProperties } from "react";

/** Unicode minus sign used for fee/deduction display, matching the design. */
export const MINUS = "−";

/** Formats a number as USD, e.g. money(1240) -> "$1,240.00", money(48250,0) -> "$48,250". */
export function money(n: number, dec = 2): string {
  return (
    "$" +
    Number(n).toLocaleString("en-US", {
      minimumFractionDigits: dec,
      maximumFractionDigits: dec,
    })
  );
}

export type BadgeKind = "green" | "yellow" | "red" | "neutral";

const BADGE_COLORS: Record<BadgeKind, [string, string]> = {
  green: ["#E7F6EE", "#137A48"],
  yellow: ["#FCF3D7", "#8A6A12"],
  red: ["#FCEAEA", "#C0392B"],
  neutral: ["#EEF1F2", "#556"],
};

/** Status pill style, keyed by semantic kind. */
export function badge(kind: BadgeKind): CSSProperties {
  const [bg, fg] = BADGE_COLORS[kind];
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 10px 4px 9px",
    borderRadius: "999px",
    font: "600 12px 'IBM Plex Sans',sans-serif",
    lineHeight: "1",
    background: bg,
    color: fg,
  };
}

/** Maps a textual status to a badge kind (Settled/Paid/Active -> green, etc.). */
export function statusKind(status: string): BadgeKind {
  if (status === "Settled" || status === "Paid" || status === "active" || status === "Active") return "green";
  if (status === "Pending") return "yellow";
  return "red";
}

/** Small dot rendered inside status pills. */
export const dot: CSSProperties = {
  width: "6px",
  height: "6px",
  borderRadius: "999px",
  background: "currentColor",
  flex: "0 0 auto",
};

/** Zebra-stripe background for table rows. */
export function rowBg(i: number): CSSProperties {
  return { background: i % 2 ? "#FCEDF1" : "#FFFFFF" };
}

const bTd: CSSProperties = {
  padding: "13px 16px",
  borderTop: "1px solid var(--border)",
  whiteSpace: "nowrap",
  color: "var(--text)",
};

const thBase: CSSProperties = {
  font: "600 11px 'IBM Plex Sans',sans-serif",
  letterSpacing: ".05em",
  textTransform: "uppercase",
  color: "var(--muted)",
  padding: "12px 16px",
  whiteSpace: "nowrap",
  borderBottom: "1px solid var(--border)",
  background: "#FBEFF3",
};

/** Table + card style set, mirroring the design's `S` object. */
export const S = {
  th: { ...thBase, textAlign: "left" } as CSSProperties,
  thNum: { ...thBase, textAlign: "right" } as CSSProperties,
  td: { ...bTd, font: "400 14px 'IBM Plex Sans',sans-serif" } as CSSProperties,
  tdStrong: { ...bTd, font: "600 14px 'IBM Plex Sans',sans-serif" } as CSSProperties,
  tdNum: { ...bTd, font: "500 14px 'IBM Plex Sans',sans-serif", textAlign: "right", fontVariantNumeric: "tabular-nums" } as CSSProperties,
  tdNumStrong: { ...bTd, font: "600 14px 'IBM Plex Sans',sans-serif", textAlign: "right", fontVariantNumeric: "tabular-nums" } as CSSProperties,
  tdMono: { ...bTd, font: "500 13px 'IBM Plex Mono',monospace" } as CSSProperties,
  tableCard: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(16,40,48,.05),0 14px 34px -26px rgba(16,40,48,.6)", overflow: "hidden" } as CSSProperties,
  card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(16,40,48,.05),0 14px 34px -26px rgba(16,40,48,.6)" } as CSSProperties,
  scroll: { overflowX: "auto" } as CSSProperties,
  table: { width: "100%", borderCollapse: "collapse", minWidth: "680px" } as CSSProperties,
  cardHead: { padding: "15px 18px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" } as CSSProperties,
  chartWrap: { display: "flex", alignItems: "stretch", gap: "10px", height: "190px" } as CSSProperties,
  chartCol: { flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "7px", minWidth: "0" } as CSSProperties,
  chartBarArea: { width: "100%", flex: "1", display: "flex", alignItems: "flex-end" } as CSSProperties,
  chartLabel: { font: "500 11px 'IBM Plex Sans',sans-serif", color: "var(--muted)", whiteSpace: "nowrap" } as CSSProperties,
};

export type Portal = "super" | "store";

/** Per-portal CSS variable theme maps (spread onto the shell root element). */
export const THEME: Record<Portal, Record<string, string>> = {
  super: {
    "--accent": "#540863",
    "--highlight": "#E49BA6",
    "--chip": "rgba(84,8,99,.10)",
    "--sidebar": "#490757",
    "--sidebar-hover": "rgba(255,255,255,.09)",
    "--sidebar-text": "#F3E6F1",
    "--sidebar-muted": "#B594B4",
    "--page-bg": "#F7E4E8",
    "--header-grad": "linear-gradient(90deg,#540863,#8A2E6F 52%,#C15E86)",
    "--active-bg": "rgba(255,255,255,.14)",
    "--card": "#FFFFFF",
    "--text": "#152227",
    "--muted": "#67787E",
    "--border": "#E6ECEE",
  },
  store: {
    "--accent": "#92487A",
    "--highlight": "#E49BA6",
    "--chip": "rgba(146,72,122,.10)",
    "--sidebar": "#7E3D69",
    "--sidebar-hover": "rgba(255,255,255,.10)",
    "--sidebar-text": "#FBEFF6",
    "--sidebar-muted": "#CBA6BF",
    "--page-bg": "#FBEAEE",
    "--header-grad": "linear-gradient(90deg,#7E3D69,#A85688 52%,#E49BA6)",
    "--active-bg": "rgba(255,255,255,.16)",
    "--card": "#FFFFFF",
    "--text": "#152227",
    "--muted": "#67787E",
    "--border": "#E6ECEE",
  },
};
