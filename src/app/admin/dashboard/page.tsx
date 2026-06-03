"use client";

import { useState } from "react";
import { TabBar } from "@/components/layout/TabBar";

const quickActions = [
  { label: "Users", icon: "👥", color: "bg-primary-100 text-primary-700" },
  { label: "Orders", icon: "📦", color: "bg-warning-light text-warning" },
  { label: "Reports", icon: "📊", color: "bg-error-light text-error" },
  { label: "Settings", icon: "⚙️", color: "bg-border-light text-muted" },
];

const recentUsers = [
  { name: "Rizki A.", role: "Student", roleColor: "bg-primary-100 text-primary-700", status: "Active" },
  { name: "Bunda L.", role: "Partner", roleColor: "bg-success-light text-success", status: "Active" },
  { name: "Budi D.", role: "Driver", roleColor: "bg-secondary-light text-secondary", status: "Suspended" },
  { name: "Sari P.", role: "Student", roleColor: "bg-primary-100 text-primary-700", status: "Active" },
];

const revMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const revHeights = [40, 55, 70, 60, 85, 100];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="bg-gradient-to-br from-[#1a1d2e] to-[#0f1119] px-6 pt-14 pb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">Admin Dashboard</h1>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Live
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Total Users</p>
              <p className="mt-1 text-xl font-bold">2,847</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Orders Today</p>
              <p className="mt-1 text-xl font-bold">156</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Revenue</p>
              <p className="mt-1 text-xl font-bold">Rp 4.2M</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              <p className="text-[10px] text-white/70 uppercase tracking-wide font-semibold">Active Drivers</p>
              <p className="mt-1 text-xl font-bold">42</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-5 -mt-4 space-y-4 pb-24">
          <div className="rounded-2xl bg-error-light/60 border border-error/20 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-error/20 text-error text-lg">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-fg">3 Pending Disputes</p>
                <p className="text-xs text-muted">Require admin review</p>
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-base text-fg">Quick Actions</h2>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((a) => (
              <button
                key={a.label}
                className="flex flex-col items-center gap-2 rounded-2xl bg-surface border border-border-light p-3"
              >
                <span className="text-2xl">{a.icon}</span>
                <span className="text-[10px] font-semibold text-fg">{a.label}</span>
              </button>
            ))}
          </div>

          <h2 className="font-display font-bold text-base text-fg">Revenue Trend</h2>
          <div className="rounded-2xl bg-surface border border-border-light p-4">
            <div className="flex items-end justify-between gap-2 h-[120px]">
              {revMonths.map((m, i) => (
                <div key={m} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className={`w-full max-w-[28px] rounded-t-md ${i === 5 ? "bg-primary-500" : "bg-primary-200"}`}
                    style={{ height: `${revHeights[i]}px` }}
                  />
                  <span className={`text-[10px] ${i === 5 ? "font-bold text-primary-700" : "text-muted"}`}>{m}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-display font-bold text-base text-fg">Recent Users</h2>
          <div className="rounded-2xl bg-surface border border-border-light overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wide font-semibold text-muted">Name</th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wide font-semibold text-muted">Role</th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wide font-semibold text-muted text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((u) => (
                  <tr key={u.name} className="border-b border-border-light last:border-b-0">
                    <td className="px-4 py-3 text-sm font-semibold text-fg">{u.name}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${u.roleColor}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-muted">{u.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <TabBar
          items={[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>, label: "Dashboard", active: activeTab === "dashboard", onClick: () => setActiveTab("dashboard") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16h6v-6h-6"/><path d="M2 16h6v-6H2"/><path d="M8 2h8v6H8"/><path d="M8 22v-6h8v6"/></svg>, label: "Orders", active: activeTab === "orders", onClick: () => setActiveTab("orders") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: "Users", active: activeTab === "users", onClick: () => setActiveTab("users") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>, label: "Settings", active: activeTab === "settings", onClick: () => setActiveTab("settings") },
          ]}
        />
      </div>
    </div>
  );
}