// PURPOSE: Super-admin transactions view (all stores, filterable).
// TODO: Wire CSV upload + real data when the API is ready.

import { TransactionsTable } from "@/components/super-admin/TransactionsTable";

export default function SuperAdminTransactionsPage() {
  return <TransactionsTable />;
}
