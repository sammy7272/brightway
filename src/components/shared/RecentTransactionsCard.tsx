// PURPOSE: "Recent Transactions" table card used on both dashboards.

import { CardHead } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { transactionColumns } from "@/components/shared/transactionColumns";
import { S } from "@/lib/ui";
import type { Transaction } from "@/types";

export function RecentTransactionsCard({
  rows,
  meta,
  includeStore,
}: {
  rows: Transaction[];
  meta: string;
  includeStore: boolean;
}) {
  return (
    <div style={S.tableCard}>
      <CardHead title="Recent Transactions" meta={meta} />
      <DataTable
        rows={rows}
        rowKey={(t) => t.id}
        minWidth={includeStore ? 700 : 560}
        columns={transactionColumns(includeStore)}
      />
    </div>
  );
}
