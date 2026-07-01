"use client";

// PURPOSE: Animated recharts chart set used on the dashboards and reports pages,
// plus a ChartCard wrapper. Colors are passed as concrete values (SVG attributes
// can't resolve CSS variables) and heights are concrete numbers (recharts renders
// nothing when it can't measure a fixed height).

import { cloneElement, isValidElement } from "react";
import type { CSSProperties, ReactElement, ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { money, S } from "@/lib/ui";

const AXIS = "#9AA6AB";
const GRID = "#EEF2F3";

/** Portal accent colors (recharts needs concrete colors, not CSS vars). */
export const SUPER_ACCENT = "#540863";
export const STORE_ACCENT = "#92487A";
const HIGHLIGHT = "#E49BA6";

const tooltipStyle: CSSProperties = {
  borderRadius: "10px",
  border: "1px solid #E6ECEE",
  boxShadow: "0 10px 30px -12px rgba(16,40,48,.35)",
  font: "500 12px 'IBM Plex Sans',sans-serif",
};
const tooltipLabelStyle: CSSProperties = {
  font: "600 12px 'IBM Plex Sans',sans-serif",
  color: "#152227",
};

const DONUT_COLORS = ["#540863", "#92487A", "#E49BA6", "#C9A2C4", "#7E3D69"];
const STATUS_COLORS: Record<string, string> = {
  Settled: "#137A48",
  Paid: "#137A48",
  Pending: "#E8A517",
  Declined: "#C0392B",
};

export function ChartCard({
  title,
  subtitle,
  height = 260,
  children,
}: {
  title: string;
  subtitle?: string;
  height?: number;
  children: ReactNode;
}) {
  // Inject the card's height into the chart so it gets a concrete pixel height.
  const content = isValidElement(children)
    ? cloneElement(children as ReactElement<{ height?: number }>, { height })
    : children;

  return (
    <div style={S.card}>
      <div style={{ padding: "18px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", gap: "10px" }}>
          <h3 style={{ margin: 0, font: "600 15px 'IBM Plex Sans',sans-serif" }}>{title}</h3>
          {subtitle && (
            <span style={{ font: "500 12px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>{subtitle}</span>
          )}
        </div>
        {content}
      </div>
    </div>
  );
}

/** Smooth, gradient-filled area chart for daily/weekly volume. */
export function VolumeAreaChart({
  data,
  xKey = "day",
  yKey = "volume",
  tickInterval = 4,
  accent = STORE_ACCENT,
  height = 260,
}: {
  data: Record<string, string | number>[];
  xKey?: string;
  yKey?: string;
  tickInterval?: number;
  accent?: string;
  height?: number;
}) {
  const gradId = `vol-${yKey}-${accent.replace("#", "")}`;
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 6, right: 8, left: 4, bottom: 0 }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={accent} stopOpacity={0.38} />
            <stop offset="95%" stopColor={accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} interval={tickInterval} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} width={46} tickFormatter={(v) => "$" + (Number(v) / 1000).toFixed(0) + "k"} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} formatter={(v: number) => [money(v, 0), "Volume"]} />
        <Area type="monotone" dataKey={yKey} stroke={accent} strokeWidth={2.4} fill={`url(#${gradId})`} animationDuration={1400} animationEasing="ease-out" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/** Grouped bars comparing gross vs. net deposits. */
export function DepositsBarChart({
  data,
  accent = STORE_ACCENT,
  height = 260,
}: {
  data: { date: string; gross: number; net: number }[];
  accent?: string;
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 6, right: 8, left: 4, bottom: 0 }} barGap={4}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} width={46} tickFormatter={(v) => "$" + (Number(v) / 1000).toFixed(0) + "k"} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} formatter={(v: number, n) => [money(v), n === "gross" ? "Gross" : "Net"]} cursor={{ fill: "rgba(84,8,99,.05)" }} />
        <Legend wrapperStyle={{ fontSize: 12 }} formatter={(v) => (v === "gross" ? "Gross" : "Net deposited")} />
        <Bar dataKey="gross" fill={HIGHLIGHT} radius={[5, 5, 0, 0]} animationDuration={1100} animationEasing="ease-out" />
        <Bar dataKey="net" fill={accent} radius={[5, 5, 0, 0]} animationDuration={1300} animationEasing="ease-out" />
      </BarChart>
    </ResponsiveContainer>
  );
}

/** Donut for share-of-total distributions (card mix / settlement status). */
export function DonutChart({
  data,
  variant = "brand",
  unit,
  height = 240,
}: {
  data: { name: string; value: number }[];
  variant?: "brand" | "status";
  unit?: "money";
  height?: number;
}) {
  const colorFor = (name: string, i: number) =>
    variant === "status"
      ? (STATUS_COLORS[name] ?? DONUT_COLORS[i % DONUT_COLORS.length])
      : DONUT_COLORS[i % DONUT_COLORS.length];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="58%"
          outerRadius="82%"
          paddingAngle={2}
          stroke="none"
          animationDuration={1100}
          animationEasing="ease-out"
        >
          {data.map((d, i) => (
            <Cell key={d.name} fill={colorFor(d.name, i)} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} formatter={(v: number, n) => [unit === "money" ? money(v, 0) : v, n]} />
        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" wrapperStyle={{ fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
