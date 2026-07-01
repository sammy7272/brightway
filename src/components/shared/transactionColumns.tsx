// PURPOSE: Column definitions for transaction tables, shared by the super-admin
// (includes Store column) and store (no Store column) transaction views.

import type { DataTableColumn } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MINUS, money, S } from "@/lib/ui";
import type { Transaction } from "@/types";

export function transactionColumns(
  includeStore: boolean
): DataTableColumn<Transaction>[] {
  return [
    { header: "Date", render: (t) => t.date },
    ...(includeStore
      ? [{ header: "Store", render: (t: Transaction) => t.storeName }]
      : []),
    { header: "TPN", cellStyle: S.tdMono, render: (t) => t.tpn },
    { header: "Amount", numeric: true, render: (t) => money(t.amount) },
    { header: "Card Type", render: (t) => t.cardType },
    {
      header: "Fee Deducted",
      numeric: true,
      render: (t) => MINUS + money(t.fee),
    },
    { header: "Net Amount", numeric: true, render: (t) => money(t.net) },
    { header: "Status", render: (t) => <StatusBadge status={t.status} /> },
  ];
}
