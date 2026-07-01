// PURPOSE: Shows deposit history for the logged-in store owner (amounts + paid
// dates for their own store only).
// TODO: Replace dummy data import with useDeposits() hook when the API is ready.

import { DepositsTable } from "@/components/admin/DepositsTable";

export default function DepositsPage() {
  return <DepositsTable />;
}
