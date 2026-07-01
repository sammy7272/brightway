"use client";

// PURPOSE: Login screen — email + password sign-in for Admin (super) and Store
// Owner accounts, with tap-to-autofill demo credentials (matches the design).
// TODO: Replace the demo routing with real Supabase auth
// (createClient().auth.signInWithPassword) when the backend is ready.

import { useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { LogoMark } from "@/components/shared/icons";
import { BouncingText } from "@/components/shared/BouncingText";
import { DEMO_CREDENTIALS } from "@/lib/dummy-data/users";

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 13px",
  borderRadius: "10px",
  border: "1px solid #E6ECEE",
  background: "#fff",
  font: "400 15px 'IBM Plex Sans',sans-serif",
  color: "#152227",
  outline: "none",
};

const labelStyle: CSSProperties = {
  display: "block",
  font: "600 12px 'IBM Plex Sans',sans-serif",
  color: "#152227",
  marginBottom: "7px",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (!email.trim() || !password) {
      setError("Enter an email and password to continue.");
      return;
    }
    // Demo heuristic: store-owner emails route to the store portal.
    const isStore = /owner|store|mart|grocer|pharmac|baker/i.test(email);
    router.push(isStore ? "/store/dashboard" : "/admin/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(1100px 560px at 12% -12%,rgba(255,255,255,.08),transparent),linear-gradient(158deg,#2E0435,#540863 60%,#3B0645)",
      }}
    >
      <BouncingText text="Brightway" color="rgba(255,255,255,.05)" mode="marquee" durationSec={45} />
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "412px", display: "flex", flexDirection: "column", gap: "22px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <LogoMark size={46} bg="#E49BA6" fg="#540863" />
          <div style={{ textAlign: "center" }}>
            <div style={{ font: "800 23px 'IBM Plex Sans',sans-serif", color: "#fff", letterSpacing: "-.01em" }}>
              Brightway <span style={{ color: "#E49BA6" }}>Portal</span>
            </div>
            <div style={{ font: "500 12.5px 'IBM Plex Sans',sans-serif", color: "#C9A2C4", marginTop: "3px" }}>
              Payment management &amp; settlement
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "18px", padding: "26px 24px", boxShadow: "0 34px 80px -34px rgba(0,0,0,.65)" }}>
          <h1 style={{ margin: "0 0 4px", font: "700 19px 'IBM Plex Sans',sans-serif", color: "#152227" }}>Sign in</h1>
          <p style={{ margin: "0 0 20px", font: "400 13.5px 'IBM Plex Sans',sans-serif", color: "#67787E" }}>
            Access your Brightway dashboard.
          </p>

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            placeholder="you@company.com"
            style={inputStyle}
          />
          <div style={{ height: "14px" }} />
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            placeholder="••••••••"
            style={inputStyle}
          />

          {error && (
            <div style={{ marginTop: "12px", padding: "9px 12px", borderRadius: "9px", background: "#FCEAEA", color: "#C0392B", font: "500 12.5px 'IBM Plex Sans',sans-serif" }}>
              {error}
            </div>
          )}

          <button
            onClick={login}
            style={{ marginTop: "20px", width: "100%", padding: "13px", border: "none", borderRadius: "10px", background: "#540863", color: "#fff", font: "600 14.5px 'IBM Plex Sans',sans-serif", cursor: "pointer" }}
          >
            Sign in
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px 0 16px" }}>
            <span style={{ flex: 1, height: "1px", background: "#E6ECEE" }} />
            <span style={{ font: "500 11.5px 'IBM Plex Sans',sans-serif", letterSpacing: ".04em", textTransform: "uppercase", color: "#9AA6AB" }}>
              or continue with
            </span>
            <span style={{ flex: 1, height: "1px", background: "#E6ECEE" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <SocialButton provider="Google" onClick={() => {}}>
              <GoogleIcon />
            </SocialButton>
            <SocialButton provider="Facebook" onClick={() => {}}>
              <FacebookIcon />
            </SocialButton>
          </div>
        </div>

        <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.11)", borderRadius: "14px", padding: "14px 15px" }}>
          <div style={{ font: "600 11px 'IBM Plex Sans',sans-serif", letterSpacing: ".06em", textTransform: "uppercase", color: "#C9A2C4", marginBottom: "10px" }}>
            Demo credentials — tap to autofill
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <DemoButton
              label={DEMO_CREDENTIALS.superAdmin.label}
              email={DEMO_CREDENTIALS.superAdmin.email}
              onClick={() => {
                setEmail(DEMO_CREDENTIALS.superAdmin.email);
                setPassword(DEMO_CREDENTIALS.password);
                setError("");
              }}
            />
            <DemoButton
              label={DEMO_CREDENTIALS.storeAdmin.label}
              email={DEMO_CREDENTIALS.storeAdmin.email}
              onClick={() => {
                setEmail(DEMO_CREDENTIALS.storeAdmin.email);
                setPassword(DEMO_CREDENTIALS.password);
                setError("");
              }}
            />
          </div>
          <div style={{ font: "400 11.5px 'IBM Plex Mono',monospace", color: "#A585A0", marginTop: "11px" }}>
            Password for both · {DEMO_CREDENTIALS.password}
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialButton({
  provider,
  onClick,
  children,
}: {
  provider: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "11px", borderRadius: "10px", border: "1px solid #E6ECEE", background: "#fff", color: "#152227", font: "600 14px 'IBM Plex Sans',sans-serif", cursor: "pointer" }}
    >
      {children}
      <span>Continue with {provider}</span>
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.5 0 10.4-2.1 14.1-5.5l-6.5-5.5c-2 1.5-4.7 2.5-7.6 2.5-5.2 0-9.6-3.3-11.2-8l-6.6 5.1C9.6 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.5 5.5c-.5.4 6.3-4.6 6.3-15 0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z" />
    </svg>
  );
}

function DemoButton({
  label,
  email,
  onClick,
}: {
  label: string;
  email: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{ display: "flex", flexDirection: "column", gap: "2px", textAlign: "left", padding: "10px 12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.03)", cursor: "pointer" }}
    >
      <span style={{ font: "600 13px 'IBM Plex Sans',sans-serif", color: "#EAF1F3" }}>{label}</span>
      <span style={{ font: "400 12px 'IBM Plex Mono',monospace", color: "#B993B4" }}>{email}</span>
    </button>
  );
}
