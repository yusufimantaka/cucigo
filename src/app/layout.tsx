import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CuciGo — Laundry Pickup & Delivery",
  description:
    "Laundry pickup & delivery made easy for Anak Kos. Order, track, and pay — all from your phone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg font-body">
        {children}
      </body>
    </html>
  );
}