"use client";

// PURPOSE: Super-admin transactions view — all transactions across all stores,
// filterable by store and status. Data comes from /lib/dummy-data.

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
import { stores } from "@/lib/dummy-data/stores";
import { transactions } from "@/lib/dummy-data/transactions";

export function TransactionsTable() {
  const [store, setStore] = useState("all");
  const [status, setStatus] = useState("all");

  const rows = useMemo(() => {
    let list = transactions.slice();
    if (store !== "all") list = list.filter((t) => t.storeId === store);
    if (status !== "all")
      list = list.filter((t) => t.status.toLowerCase() === status);
    return list;
  }, [store, status]);

  const columns = transactionColumns(true);

  return (
    <>
      <FilterBar>
        <FilterSelect value={store} onChange={setStore}>
          <option value="all">All stores</option>
          {stores.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </FilterSelect>
        <FilterDate />
        <FilterSelect value={status} onChange={setStatus}>
          <option value="all">All statuses</option>
          <option value="settled">Settled</option>
          <option value="pending">Pending</option>
        </FilterSelect>
        <FilterCount>
          {rows.length} result{rows.length === 1 ? "" : "s"}
        </FilterCount>
      </FilterBar>

      <div style={S.tableCard}>
        <DataTable
          columns={columns}
          rows={rows}
          rowKey={(t) => t.id}
          minWidth={760}
        />
      </div>
    </>
  );
}
