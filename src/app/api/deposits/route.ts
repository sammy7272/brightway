// PURPOSE: Deposits API route — list calculated deposits, mark payments made,
// and generate the NACHA export batch.
// import { createClient } from "@/lib/supabase/server";
// import { calculateFees } from "@/lib/utils/calculateFees";
// TODO: Implement GET (list by date), POST (recalculate), PATCH (payment made).

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "deposits", data: [] });
}
