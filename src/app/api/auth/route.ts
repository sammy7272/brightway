// PURPOSE: Auth API route (sign-in / sign-out / session).
// import { createClient } from "@/lib/supabase/server";
// TODO: Implement POST (sign in) and DELETE (sign out) using Supabase auth.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "auth" });
}
