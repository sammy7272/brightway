// PURPOSE: Client hook that fetches transactions, optionally filtered by store,
// for the transaction views and reports.
//
// import { useEffect, useState } from "react";
// import { createClient } from "@/lib/supabase/client";
//
// TODO: Fetch from Supabase (or /api/transactions) with store/date filters and
// replace the dummy data.

import { transactions } from "@/lib/dummy-data/transactions";
import type { Transaction } from "@/types";

export interface UseTransactionsResult {
  transactions: Transaction[];
  isLoading: boolean;
}

export function useTransactions(storeId?: string): UseTransactionsResult {
  // TODO: Replace dummy data with a real, filtered query.
  const filtered = storeId
    ? transactions.filter((t) => t.storeId === storeId)
    : transactions;

  return { transactions: filtered, isLoading: false };
}
