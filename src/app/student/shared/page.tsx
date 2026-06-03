"use client";

import { useState } from "react";
import { TabBar } from "@/components/layout/TabBar";

const members = [
  { name: "Rizki", initials: "RA", role: "Organizer", paid: true },
  { name: "Dimas", initials: "DW", role: "Member", paid: true },
  { name: "Sari", initials: "SP", role: "Member", paid: false },
];

export default function StudentSharedPage() {
  const [activeTab, setActiveTab] = useState("shared");

  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-5 pt-14 pb-2">
          <h1 className="font-display text-2xl font-bold text-fg">Shared Laundry</h1>
          <p className="mt-1 text-sm text-muted">Split costs with your kosmates</p>
        </div>

        <div className="flex-1 px-5 py-4 space-y-4 pb-24">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/40 bg-primary-50 py-4 text-sm font-semibold text-primary transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Create New Group
          </button>

          <div className="rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Active Group</p>
              <p className="mt-1 text-lg font-bold">Kost Merdeka Laundry</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl font-bold">Rp 24.000</span>
                <span className="text-sm text-white/70">total</span>
              </div>
              <p className="text-xs text-white/70 mt-1">Rp 8.000 each · 3 people</p>
            </div>
            <div className="bg-surface border border-border-light border-t-0 p-4 -mt-1">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Split</p>
              <div className="flex h-[12px] rounded-full overflow-hidden bg-border-light">
                <div className="bg-primary-500 w-[66%]" />
                <div className="bg-warning w-[34%]" />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-success font-semibold">Paid (2)</span>
                <span className="text-muted">Pending (1)</span>
              </div>

              <div className="mt-4 space-y-3">
                {members.map((m) => (
                  <div key={m.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-[36px] w-[36px] items-center justify-center rounded-full text-xs font-bold text-white ${m.paid ? "bg-primary" : "bg-muted"}`}>
                        {m.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-fg">{m.name}</p>
                        <p className="text-[10px] text-muted">{m.role}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold ${m.paid ? "text-success" : "text-error"}`}>
                      {m.paid ? "Paid" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-success to-emerald-600 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Completed</p>
              <p className="mt-1 text-lg font-bold">Kost Hijau Laundry</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl font-bold">Rp 36.000</span>
                <span className="text-sm text-white/70">total</span>
              </div>
              <p className="text-xs text-white/70 mt-1">Rp 18.000 each · 2 people</p>
            </div>
            <div className="bg-surface border border-border-light border-t-0 p-4 -mt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">Completed on 28 May 2026</span>
                <span className="inline-flex items-center rounded-full bg-success-light px-2 py-0.5 text-xs font-semibold text-success">
                  ✓ Settled
                </span>
              </div>
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