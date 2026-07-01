// PURPOSE: TPNs API route — list/create terminals and manage store assignment.
// import { createClient } from "@/lib/supabase/server";
// import { dummyTPNs } from "@/lib/dummy-data/tpns";
// TODO: Implement GET (list) and POST (create/assign) backed by Supabase.

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "tpns", data: [] });
}
