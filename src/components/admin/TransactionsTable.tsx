"use client";

// PURPOSE: Store-owner transactions view — the owner's own store transactions,
// filterable by status. Data comes from /lib/dummy-data.

import { useMemo, useState } from "react";
import { DataTable } from "@/components/shared/DataTable";
import {
  FilterBar,
  FilterCount,
  FilterDate,
  FilterSelect,
} from "@/components/shared/FilterBar";
import { transactionColumns } from "@/components/shared/transactionColumns";
import { S } from "@/lib/ui";
import { STORE_ADMIN_ID, stores } from "@/lib/dummy-data/stores";
import { transactions } from "@/lib/dummy-data/transactions";

export function TransactionsTable() {
  const [status, setStatus] = useState("all");
  const storeName =
    stores.find((s) => s.id === STORE_ADMIN_ID)?.name ?? "Your store";

  const rows = useMemo(() => {
    let list = transactions.filter((t) => t.storeId === STORE_ADMIN_ID);
    if (status !== "all")
      list = list.filter((t) => t.status.toLowerCase() === status);
    return list;
  }, [status]);

  const columns = transactionColumns(false);

  return (
    <>
      <FilterBar>
        <FilterDate />
        <FilterSelect value={status} onChange={setStatus}>
          <option value="all">All statuses</option>
          <option value="settled">Settled</option>
          <option value="pending">Pending</option>
        </FilterSelect>
        <FilterCount>
          {storeName} · {rows.length} result{rows.length === 1 ? "" : "s"}
        </FilterCount>
      </FilterBar>

      <div style={S.tableCard}>
        <DataTable columns={columns} rows={rows} rowKey={(t) => t.id} />
      </div>
    </>
  );
}
