"use client";

import { useState } from "react";
import { TabBar } from "@/components/layout/TabBar";
import { Chip } from "@/components/ui/Chip";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekData = [45, 65, 30, 80, 55, 70, 40];

export default function PartnerDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 px-6 pt-14 pb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80">Welcome back</p>
              <p className="text-lg font-bold">Bunda Laundry</p>
            </div>
            <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/20 text-sm font-bold">
              BL
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Today&apos;s Revenue</p>
              <p className="mt-1 text-xl font-bold">Rp 312K</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Active Orders</p>
              <p className="mt-1 text-xl font-bold">8</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Completed</p>
              <p className="mt-1 text-xl font-bold">23</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Rating</p>
              <p className="mt-1 text-xl font-bold">4.9★</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-5 -mt-4 space-y-4 pb-24">
          <h2 className="font-display font-bold text-base text-fg">Incoming Orders</h2>
          <div className="rounded-2xl bg-surface border border-border-light p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-fg">Rizki Anak Kos</p>
                <p className="text-xs text-muted">CGO-250603001 · Wash + Iron · 3 kg</p>
                <p className="text-xs text-muted mt-0.5">Pickup: Today, 10:00</p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="flex h-[32px] px-3 items-center justify-center rounded-lg bg-success text-white text-xs font-semibold">
                  Accept
                </button>
                <button className="flex h-[32px] px-3 items-center justify-center rounded-lg border border-error text-error text-xs font-semibold">
                  Decline
                </button>
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-base text-fg">Processing</h2>
          <div className="rounded-2xl bg-surface border border-border-light p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-fg">Dimas W.</p>
                <p className="text-xs text-muted">CGO-250602005 · Wash Only · 2 kg</p>
              </div>
              <Chip variant="primary">Washing</Chip>
            </div>
            <div className="mt-3 flex gap-2">
              {["Picked", "Washing", "Drying", "Ready"].map((step, i) => (
                <button
                  key={step}
                  className={`flex-1 rounded-lg py-1.5 text-[10px] font-semibold transition-all ${
                    i <= 1
                      ? "bg-primary-100 text-primary-700"
                      : "bg-border-light text-muted"
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-surface border border-border-light p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-fg">Sari P.</p>
                <p className="text-xs text-muted">CGO-250603008 · Express · 1 kg</p>
              </div>
              <Chip variant="success">Ready</Chip>
            </div>
            <button className="mt-3 flex h-[40px] w-full items-center justify-center rounded-xl bg-secondary text-white text-sm font-semibold">
              Notify Driver
            </button>
          </div>

          <h2 className="font-display font-bold text-base text-fg">Weekly Analytics</h2>
          <div className="rounded-2xl bg-surface border border-border-light p-4">
            <div className="flex items-end justify-between gap-2 h-[100px]">
              {weekDays.map((d, i) => (
                <div key={d} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className={`w-full max-w-[24px] rounded-t-md ${i === 3 ? "bg-primary-500" : "bg-primary-200"}`}
                    style={{ height: `${weekData[i]}px` }}
                  />
                  <span className="text-[10px] text-muted">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-display font-bold text-base text-fg">Revenue Breakdown</h2>
          <div className="rounded-2xl bg-surface border border-border-light p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg">Wash Only</span>
              <span className="text-sm font-semibold text-fg">Rp 85.000</span>
            </div>
            <div className="h-[6px] rounded-full bg-border-light overflow-hidden">
              <div className="h-full rounded-full bg-primary-400" style={{ width: "27%" }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg">Wash + Iron</span>
              <span className="text-sm font-semibold text-fg">Rp 190.000</span>
            </div>
            <div className="h-[6px] rounded-full bg-border-light overflow-hidden">
              <div className="h-full rounded-full bg-primary-600" style={{ width: "61%" }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg">Express</span>
              <span className="text-sm font-semibold text-fg">Rp 37.000</span>
            </div>
            <div className="h-[6px] rounded-full bg-border-light overflow-hidden">
              <div className="h-full rounded-full bg-secondary" style={{ width: "12%" }} />
            </div>
          </div>
        </div>

        <TabBar
          items={[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>, label: "Dashboard", active: activeTab === "dashboard", onClick: () => setActiveTab("dashboard") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16h6v-6h-6"/><path d="M2 16h6v-6H2"/><path d="M8 2h8v6H8"/><path d="M8 22v-6h8v6"/></svg>, label: "Orders", active: activeTab === "orders", onClick: () => setActiveTab("orders") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="12" y1="20" y2="10"/><line x1="6" x2="12" y1="20" y2="10"/></svg>, label: "Earnings", active: activeTab === "earnings", onClick: () => setActiveTab("earnings") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>, label: "Settings", active: activeTab === "settings", onClick: () => setActiveTab("settings") },
          ]}
        />
      </div>
    </div>
  );
}