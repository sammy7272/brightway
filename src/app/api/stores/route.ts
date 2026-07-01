// PURPOSE: Stores API route — list/create stores (super-admin only).
// import { createClient } from "@/lib/supabase/server";
// import { dummyStores } from "@/lib/dummy-data/stores";
// TODO: Implement GET (list) and POST (create) backed by Supabase.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "stores", data: [] });
}
