"use client";

import { useState } from "react";
import { TabBar } from "@/components/layout/TabBar";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const barHeights = [35, 55, 45, 65, 80, 95];

const services = [
  { name: "Wash Only", total: "Rp 45.000", pct: 35, color: "bg-primary-400" },
  { name: "Wash + Iron", total: "Rp 64.000", pct: 50, color: "bg-primary-600" },
  { name: "Express", total: "Rp 19.000", pct: 15, color: "bg-secondary" },
];

export default function StudentSpendingPage() {
  const [activeTab, setActiveTab] = useState("spending");

  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-5 pt-14 pb-2">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold text-fg">Spending</h1>
            <div className="flex items-center gap-3">
              <button className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-border bg-surface">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <span className="text-sm font-semibold text-fg">Jun 2026</span>
              <button className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-border bg-surface">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 px-5 py-4 space-y-6 pb-24">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-surface border border-border-light p-4">
              <p className="text-xs text-muted uppercase tracking-wide font-semibold">Total Spent</p>
              <p className="mt-1 text-2xl font-bold text-fg">Rp 128K</p>
              <p className="mt-0.5 text-xs text-success">↓ 12% from last month</p>
            </div>
            <div className="rounded-2xl bg-surface border border-border-light p-4">
              <p className="text-xs text-muted uppercase tracking-wide font-semibold">Orders</p>
              <p className="mt-1 text-2xl font-bold text-fg">14</p>
              <p className="mt-0.5 text-xs text-muted">avg Rp 9.1K / order</p>
            </div>
          </div>

          <div className="rounded-2xl bg-surface border border-border-light p-4">
            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-4">Monthly Trend</p>
            <div className="flex items-end justify-between gap-2 h-[120px]">
              {months.map((m, i) => (
                <div key={m} className="flex flex-1 flex-col items-center gap-1">
                  <div className="relative w-full flex justify-center">
                    <div
                      className={`w-full max-w-[28px] rounded-t-md ${i === 5 ? "bg-primary-500" : "bg-primary-200"}`}
                      style={{ height: `${barHeights[i]}px` }}
                    />
                  </div>
                  <span className={`text-[10px] ${i === 5 ? "font-bold text-primary-700" : "text-muted"}`}>{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-surface border border-border-light p-4">
            <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-4">By Service</p>
            <div className="space-y-4">
              {services.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-fg">{s.name}</span>
                    <span className="text-muted">{s.total}</span>
                  </div>
                  <div className="mt-1.5 h-[8px] rounded-full bg-border-light overflow-hidden">
                    <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TabBar
          items={[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: "Home", active: activeTab === "home", onClick: () => setActiveTab("home") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16h6v-6h-6"/><path d="M2 16h6v-6H2"/><path d="M8 2h8v6H8"/><path d="M8 22v-6h8v6"/></svg>, label: "Orders", active: activeTab === "orders", onClick: () => setActiveTab("orders") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: "Shared", active: activeTab === "shared", onClick: () => setActiveTab("shared") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="12" y1="20" y2="10"/><line x1="6" x2="12" y1="20" y2="10"/></svg>, label: "Spending", active: activeTab === "spending", onClick: () => setActiveTab("spending") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, label: "Profile", active: activeTab === "profile", onClick: () => setActiveTab("profile") },
          ]}
        />
      </div>
    </div>
  );
}