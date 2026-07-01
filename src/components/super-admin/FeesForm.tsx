"use client";

// PURPOSE: Super-admin Fees & Taxes screen — global tax rate, per-store Brightway
// fee rates, a live "$1,000 transaction" preview, and Save. Demo-only state.

import { useState, type CSSProperties } from "react";
import { CardHead } from "@/components/shared/PageHeader";
import { useToast } from "@/components/shared/Toast";
import { MINUS, money, S } from "@/lib/ui";
import { stores as seedStores } from "@/lib/dummy-data/stores";
import { DEFAULT_TAX_RATE } from "@/lib/dummy-data/metrics";

const rateBox: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  border: "1px solid var(--border)",
  borderRadius: "9px",
  padding: "6px 10px",
  background: "#fff",
};

const numInput: CSSProperties = {
  width: "56px",
  border: "none",
  outline: "none",
  textAlign: "right",
  font: "600 14px 'IBM Plex Sans',sans-serif",
  color: "var(--text)",
  background: "transparent",
  fontVariantNumeric: "tabular-nums",
};

export function FeesForm() {
  const { show, toast } = useToast();
  const [taxRate, setTaxRate] = useState(DEFAULT_TAX_RATE);
  const [rates, setRates] = useState<Record<string, number>>(
    Object.fromEntries(seedStores.map((s) => [s.id, s.feeRate]))
  );

  const firstRate = seedStores.length ? rates[seedStores[0].id] : 0;
  const feeAmt = (1000 * firstRate) / 100;
  const taxAmt = (1000 * taxRate) / 100;
  const netAmt = 1000 - feeAmt - taxAmt;

  return (
    <>
      {/* Global tax rate */}
      <div style={S.card}>
        <div style={{ padding: "18px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div>
            <h3 style={{ margin: "0 0 3px", font: "600 15px 'IBM Plex Sans',sans-serif" }}>Global Tax Rate</h3>
            <p style={{ margin: 0, font: "400 13px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>
              Applied to every transaction across all stores.
            </p>
          </div>
          <div style={{ ...rateBox, padding: "8px 12px" }}>
            <input
              type="number"
              step="0.01"
              value={taxRate}
              onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
              style={{ ...numInput, width: "66px", font: "600 16px 'IBM Plex Sans',sans-serif" }}
            />
            <span style={{ font: "600 14px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>%</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Per-store rates */}
        <div style={{ flex: "1.4 1 360px", minWidth: 0 }}>
          <div style={S.tableCard}>
            <CardHead title="Per-store Brightway Fee Rate" />
            {seedStores.map((s) => (
              <div key={s.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "14px 18px", borderTop: "1px solid var(--border)" }}>
                <span style={{ font: "500 14px 'IBM Plex Sans',sans-serif" }}>{s.name}</span>
                <div style={rateBox}>
                  <input
                    type="number"
                    step="0.05"
                    value={rates[s.id]}
                    onChange={(e) =>
                      setRates((r) => ({ ...r, [s.id]: parseFloat(e.target.value) || 0 }))
                    }
                    style={numInput}
                  />
                  <span style={{ font: "600 13px 'IBM Plex Sans',sans-serif", color: "var(--muted)" }}>%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live preview */}
        <div style={{ flex: "1 1 300px", minWidth: 0 }}>
          <div style={{ background: "var(--accent)", borderRadius: "16px", padding: "22px", color: "#fff", boxShadow: "0 20px 44px -26px rgba(16,40,48,.9)" }}>
            <div style={{ font: "600 11px 'IBM Plex Sans',sans-serif", letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.68)" }}>
              Live preview · $1,000 transaction
            </div>
            <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <PreviewRow label="Transaction amount" value="$1,000.00" />
              <PreviewRow label={`Brightway fee (${firstRate.toFixed(2)}%)`} value={MINUS + money(feeAmt)} />
              <PreviewRow label={`Tax (${taxRate}%)`} value={MINUS + money(taxAmt)} />
              <div style={{ height: "1px", background: "rgba(255,255,255,.2)", margin: "3px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ font: "600 14px 'IBM Plex Sans',sans-serif" }}>Store receives</span>
                <span style={{ font: "700 22px 'IBM Plex Sans',sans-serif", fontVariantNumeric: "tabular-nums", color: "var(--highlight)" }}>
                  {money(netAmt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => show("Fee & tax settings saved.")}
          style={{ padding: "12px 22px", border: "none", borderRadius: "10px", background: "var(--accent)", color: "#fff", font: "600 14px 'IBM Plex Sans',sans-serif", cursor: "pointer" }}
        >
          Save changes
        </button>
      </div>
      {toast}
    </>
  );
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ font: "400 13.5px 'IBM Plex Sans',sans-serif", color: "rgba(255,255,255,.82)" }}>{label}</span>
      <span style={{ font: "500 14px 'IBM Plex Sans',sans-serif", fontVariantNumeric: "tabular-nums" }}>{value}</span>
    </div>
  );
}
