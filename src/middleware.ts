// PURPOSE: Route protection. Refreshes the Supabase session on every request and
// redirects unauthenticated users to /login, and enforces role-based access to
// the (super-admin) and (admin) route groups.
//
// import { createServerClient } from "@supabase/ssr";
// import { NextResponse } from "next/server";
//
// TODO: Implement session refresh + auth/role guards. See:
// https://supabase.com/docs/guides/auth/server-side/nextjs

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: Read the Supabase session, redirect to /login when signed out, and
  // block cross-role access. Currently a pass-through so the app runs.
  return NextResponse.next({ request });
}

// Run on all routes except static assets and Next internals.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
