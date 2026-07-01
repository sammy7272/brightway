// PURPOSE: Card header row (title + optional right-aligned meta/actions) used
// above tables, matching the design's card head.

import type { CSSProperties, ReactNode } from "react";
import { S } from "@/lib/ui";

export function CardHead({
  title,
  meta,
}: {
  title: string;
  meta?: ReactNode;
}) {
  return (
    <div style={S.cardHead}>
      <h3 style={{ margin: 0, font: "600 15px 'IBM Plex Sans',sans-serif" }}>{title}</h3>
      {meta != null && (
        <span style={{ font: "500 12px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>{meta}</span>
      )}
    </div>
  );
}

/** Simple page heading (title + optional description + actions) for future use. */
export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  const wrap: CSSProperties = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" };
  return (
    <header style={wrap}>
      <div>
        <h1 style={{ margin: 0, font: "700 20px 'IBM Plex Sans',sans-serif" }}>{title}</h1>
        {description && (
          <p style={{ margin: "4px 0 0", font: "400 13px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>
            {description}
          </p>
        )}
      </div>
      {actions}
    </header>
  );
}
