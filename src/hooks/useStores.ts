// PURPOSE: Client hook that fetches and caches the list of stores.
//
// import { useEffect, useState } from "react";
// import { createClient } from "@/lib/supabase/client";
//
// TODO: Fetch stores from Supabase (or /api/stores) and replace the dummy data.

import { stores } from "@/lib/dummy-data/stores";
import type { Store } from "@/types";

export interface UseStoresResult {
  stores: Store[];
  isLoading: boolean;
}

export function useStores(): UseStoresResult {
  // TODO: Replace dummy data with a real query.
  return { stores, isLoading: false };
}
