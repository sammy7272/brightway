// PURPOSE: Client hook exposing the current authenticated user + role and
// helpers (signIn, signOut). Backs route protection and the store-owner portal.
//
// import { useEffect, useState } from "react";
// import { createClient } from "@/lib/supabase/client";
// import type { User } from "@/types";
//
// TODO: Subscribe to Supabase auth state, map the session to our User type,
// and expose { user, isLoading, signIn, signOut }.

import type { User } from "@/types";

export interface UseAuthResult {
  user: User | null;
  isLoading: boolean;
}

export function useAuth(): UseAuthResult {
  // TODO: Replace stub with real Supabase auth subscription.
  return { user: null, isLoading: false };
}
