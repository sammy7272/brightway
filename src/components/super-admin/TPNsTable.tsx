// PURPOSE: Super-admin TPN table — terminals, store assignment, and monthly
// volume usage with a warning at >= 80% of the limit. Data from /lib/dummy-data.

import { CardHead } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { money, rowBg, S } from "@/lib/ui";
import { tpns } from "@/lib/dummy-data/tpns";

export function TPNsTable() {
  return (
    <div style={S.tableCard}>
      <CardHead
        title="Terminal Profile Numbers"
        meta="Granted by acquiring bank"
      />
      <div style={S.scroll}>
        <table style={{ ...S.table, minWidth: "760px" }}>
          <thead>
            <tr>
              <th style={S.th}>TPN Number</th>
              <th style={S.th}>Assigned Store</th>
              <th style={S.th}>Status</th>
              <th style={S.thNum}>Monthly Volume</th>
              <th style={S.thNum}>Monthly Limit</th>
              <th style={S.th}>% Used</th>
            </tr>
          </thead>
          <tbody>
            {tpns.map((t, i) => {
              const stripe = rowBg(i).background as string;
              const pct = Math.round((t.monthlyVolume / t.monthlyLimit) * 100);
              const warn = pct >= 80;
              return (
                <tr key={t.id}>
                  <td style={{ ...S.tdMono, background: stripe }}>{t.tpnNumber}</td>
                  <td style={{ ...S.td, background: stripe }}>{t.storeName}</td>
                  <td style={{ ...S.td, background: stripe }}>
                    <StatusBadge status={t.status === "active" ? "Active" : "Inactive"} />
                  </td>
                  <td style={{ ...S.tdNum, background: stripe }}>{money(t.monthlyVolume, 0)}</td>
                  <td style={{ ...S.tdNum, background: stripe }}>{money(t.monthlyLimit, 0)}</td>
                  <td style={{ ...S.td, background: stripe }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "200px" }}>
                      <div style={{ flex: 1, height: "8px", borderRadius: "999px", background: "#EEF2F3", overflow: "hidden" }}>
                        <div style={{ width: pct + "%", height: "100%", borderRadius: "999px", background: warn ? "#E8850C" : "var(--accent)" }} />
                      </div>
                      <span style={{ font: "600 13px 'IBM Plex Sans',sans-serif", fontVariantNumeric: "tabular-nums", minWidth: "42px", textAlign: "right", color: warn ? "#B4650A" : "var(--text)" }}>
                        {pct}%
                      </span>
                    </div>
                    {warn && (
                      <span style={{ display: "inline-block", marginTop: "5px", font: "600 11px 'IBM Plex Sans',sans-serif", color: "#B4650A" }}>
                        ⚠ Approaching limit
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
