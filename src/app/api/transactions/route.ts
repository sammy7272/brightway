// PURPOSE: Transactions API route — list transactions and ingest the daily
// Dejavoo CSV (with TPN->store matching and duplicate detection).
// import { createClient } from "@/lib/supabase/server";
// TODO: Implement GET (list by date/store) and POST (CSV upload + parse).

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "transactions", data: [] });
}
