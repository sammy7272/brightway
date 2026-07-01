// PURPOSE: Dummy chart series (from the design) for the dashboard "Daily Volume"
// bar chart and the reports "Daily Transaction Volume" chart.
// TODO: Replace with aggregated query results when the backend is ready.

/** This week's daily volume (super-admin dashboard). */
export const weekVolume: { label: string; value: number }[] = [
  { label: "Mon", value: 42000 },
  { label: "Tue", value: 51000 },
  { label: "Wed", value: 38500 },
  { label: "Thu", value: 47200 },
  { label: "Fri", value: 63400 },
  { label: "Sat", value: 71800 },
  { label: "Sun", value: 29300 },
];

/** June 2026 daily volume, one bar per day (store reports chart). */
export const monthVolume: number[] = [
  980, 1240, 1105, 1560, 1320, 890, 760, 1430, 1680, 1520, 1290, 1740, 1610,
  980, 850, 1390, 1720, 1880, 1540, 1230, 1090, 1650, 1810, 1490, 1360, 1580,
  1720, 1930, 1640, 1420,
];
