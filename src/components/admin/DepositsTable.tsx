// PURPOSE: Store-owner deposit history table (gross, fee, net, status, date paid)
// for the owner's store. Data from /lib/dummy-data.

import { CardHead } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MINUS, money, S } from "@/lib/ui";
import { deposits } from "@/lib/dummy-data/deposits";
import { STORE_ADMIN_ID, stores } from "@/lib/dummy-data/stores";

export function DepositsTable() {
  const storeName =
    stores.find((s) => s.id === STORE_ADMIN_ID)?.name ?? "Your store";
  const rows = deposits.filter((d) => d.storeId === STORE_ADMIN_ID);

  return (
    <div style={S.tableCard}>
      <CardHead title="Deposit History" meta={storeName} />
      <DataTable
        rows={rows}
        rowKey={(d) => d.id}
        minWidth={720}
        columns={[
          { header: "Date", render: (d) => d.date },
          { header: "Gross Amount", numeric: true, render: (d) => money(d.gross) },
          { header: "Brightway Fee", numeric: true, render: (d) => MINUS + money(d.fee) },
          { header: "Net Deposited", numeric: true, cellStyle: S.tdNumStrong, render: (d) => money(d.net) },
          { header: "Status", render: (d) => <StatusBadge status={d.status} /> },
          { header: "Date Paid", render: (d) => d.datePaid ?? MINUS },
        ]}
      />
    </div>
  );
}
