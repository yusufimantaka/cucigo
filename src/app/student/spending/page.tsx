"use client";

import { Screen } from "@/components/layout/Screen";
import { StudentTabBar } from "@/components/layout/RoleTabBars";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const barHeights = [35, 55, 45, 65, 80, 95];

const services = [
  { name: "Wash Only", total: "Rp 45.000", pct: 35, color: "bg-primary-400" },
  { name: "Wash + Iron", total: "Rp 64.000", pct: 50, color: "bg-primary-600" },
  { name: "Express", total: "Rp 19.000", pct: 15, color: "bg-secondary" },
];

export default function StudentSpendingPage() {
  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="px-5 pt-10 pb-2">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-2xl font-bold text-fg">Spending</h1>
              <div className="flex items-center gap-3">
                <button className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-border bg-surface transition-all active:scale-95">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <span className="text-sm font-semibold text-fg">Jun 2026</span>
                <button className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-border bg-surface transition-all active:scale-95">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 px-5 py-4 space-y-6 pb-6">
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
        </div>

        <StudentTabBar active="spending" />
      </div>
    </Screen>
  );
}
