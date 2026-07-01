// PURPOSE: Super-admin single-store detail — a store's terminals, fees, bank
// details, and history. Placeholder detail using dummy data.
// TODO: Build out the full store detail sections when the API is ready.

import { notFound } from "next/navigation";
import { CardHead } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { money, S } from "@/lib/ui";
import { stores } from "@/lib/dummy-data/stores";

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ storeId: string }>;
}) {
  const { storeId } = await params;
  const store = stores.find((s) => s.id === storeId);
  if (!store) notFound();

  const rows: [string, React.ReactNode][] = [
    ["Owner", store.owner],
    ["Status", <StatusBadge key="s" status={store.status === "active" ? "Active" : "Inactive"} />],
    ["Monthly volume", money(store.monthlyVolume, 0)],
    ["Brightway fee rate", `${store.feeRate.toFixed(2)}%`],
  ];

  return (
    <div style={{ ...S.card, maxWidth: "560px" }}>
      <CardHead title={store.name} meta={store.id} />
      <div style={{ padding: "6px 18px 18px" }}>
        {rows.map(([label, value]) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px", padding: "12px 0", borderTop: "1px solid var(--border)" }}>
            <span style={{ font: "500 13px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>{label}</span>
            <span style={{ font: "600 14px 'IBM Plex Sans',sans-serif" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
