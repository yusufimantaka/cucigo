"use client";

import { Screen } from "@/components/layout/Screen";
import { AdminTabBar } from "@/components/layout/RoleTabBars";

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
  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="bg-gradient-to-br from-[#1a1d2e] to-[#0f1119] px-5 pt-10 pb-8 text-white">
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

          <div className="flex-1 px-5 -mt-4 space-y-4 pb-6">
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
                  className="flex flex-col items-center gap-2 rounded-2xl bg-surface border border-border-light p-3 transition-all active:scale-[0.95]"
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
        </div>

        <AdminTabBar active="dashboard" />
      </div>
    </Screen>
  );
}
