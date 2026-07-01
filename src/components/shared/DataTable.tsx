// PURPOSE: Generic, reusable styled table (zebra rows, uppercase header, faint
// row separators, horizontal scroll) used by the feature tables. Callers supply
// column configs including which cell style to use.

import type { CSSProperties, ReactNode } from "react";
import { rowBg, S } from "@/lib/ui";

export interface DataTableColumn<T> {
  header: string;
  /** Right-align the header (numeric column). */
  numeric?: boolean;
  /** Cell style override (defaults to S.td, or S.tdNum when numeric). */
  cellStyle?: CSSProperties;
  render: (row: T) => ReactNode;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: (row: T, index: number) => string;
  minWidth?: number;
}

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  minWidth = 680,
}: DataTableProps<T>) {
  const tableStyle: CSSProperties = { ...S.table, minWidth: `${minWidth}px` };
  return (
    <div style={S.scroll}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i} style={c.numeric ? S.thNum : S.th}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const stripe = rowBg(i).background as string;
            return (
              <tr key={rowKey(row, i)}>
                {columns.map((c, j) => {
                  const cs = c.cellStyle ?? (c.numeric ? S.tdNum : S.td);
                  return (
                    <td key={j} style={{ ...cs, background: stripe }}>
                      {c.render(row)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
