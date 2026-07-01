"use client";

// PURPOSE: Super-admin store management table — activate/deactivate stores and
// open store detail. Data seeded from /lib/dummy-data; toggle is local demo state.

import { useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { CardHead } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { useToast } from "@/components/shared/Toast";
import { money, rowBg, S } from "@/lib/ui";
import { stores as seedStores } from "@/lib/dummy-data/stores";
import type { Store } from "@/types";

const actionBtn: CSSProperties = {
  padding: "7px 12px",
  borderRadius: "8px",
  font: "600 12px 'IBM Plex Sans',sans-serif",
  cursor: "pointer",
};

export function StoresTable() {
  const router = useRouter();
  const { show, toast } = useToast();
  const [stores, setStores] = useState<Store[]>(seedStores);

  const toggle = (id: string) =>
    setStores((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "active" ? "inactive" : "active" }
          : s
      )
    );

  return (
    <div style={S.tableCard}>
      <CardHead title="All Stores" meta={`${stores.length} stores`} />
      <div style={S.scroll}>
        <table style={{ ...S.table, minWidth: "760px" }}>
          <thead>
            <tr>
              <th style={S.th}>Store Name</th>
              <th style={S.th}>Owner</th>
              <th style={S.th}>Status</th>
              <th style={S.thNum}>Monthly Volume</th>
              <th style={S.thNum}>Fee Rate</th>
              <th style={S.thNum}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((s, i) => {
              const stripe = rowBg(i).background as string;
              const active = s.status === "active";
              return (
                <tr key={s.id}>
                  <td style={{ ...S.tdStrong, background: stripe }}>{s.name}</td>
                  <td style={{ ...S.td, background: stripe }}>{s.owner}</td>
                  <td style={{ ...S.td, background: stripe }}>
                    <StatusBadge status={active ? "Active" : "Inactive"} />
                  </td>
                  <td style={{ ...S.tdNum, background: stripe }}>
                    {money(s.monthlyVolume, 0)}
                  </td>
                  <td style={{ ...S.tdNum, background: stripe }}>
                    {s.feeRate.toFixed(2)}%
                  </td>
                  <td style={{ ...S.td, background: stripe }}>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                      <button
                        onClick={() => toggle(s.id)}
                        style={{
                          ...actionBtn,
                          border: "1px solid",
                          ...(active
                            ? { borderColor: "#F1CFCF", background: "#FDF3F3", color: "#C0392B" }
                            : { borderColor: "#BFE6D2", background: "#EAF7F0", color: "#137A48" }),
                        }}
                      >
                        {active ? "Deactivate" : "Activate"}
                      </button>
                      <button
                        onClick={() => {
                          show("Opening " + s.name + " — store detail");
                          router.push(`/admin/stores/${s.id}`);
                        }}
                        style={{
                          ...actionBtn,
                          border: "1px solid var(--border)",
                          background: "#fff",
                          color: "var(--text)",
                        }}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {toast}
    </div>
  );
}
