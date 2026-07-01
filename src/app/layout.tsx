import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brightway Portal",
  description: "Payment management & settlement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
