"use client";

import { useState } from "react";
import { TabBar } from "@/components/layout/TabBar";
import { Chip } from "@/components/ui/Chip";

type OrderStatus = "washing" | "delivered" | "cancelled";

interface Order {
  id: string;
  code: string;
  laundry: string;
  service: string;
  weight: string;
  price: string;
  date: string;
  status: OrderStatus;
}

const orders: Order[] = [
  { id: "1", code: "CGO-250603001", laundry: "Bunda Laundry", service: "Wash + Iron", weight: "3 kg", price: "Rp 24.000", date: "3 Jun 2026", status: "washing" },
  { id: "2", code: "CGO-250601002", laundry: "KosWash", service: "Wash Only", weight: "2 kg", price: "Rp 10.000", date: "1 Jun 2026", status: "delivered" },
  { id: "3", code: "CGO-250528003", laundry: "FreshClean", service: "Express", weight: "1 kg", price: "Rp 12.000", date: "28 May 2026", status: "delivered" },
  { id: "4", code: "CGO-250520004", laundry: "Bunda Laundry", service: "Wash + Iron", weight: "5 kg", price: "Rp 40.000", date: "20 May 2026", status: "cancelled" },
];

const statusConfig: Record<OrderStatus, { label: string; variant: "primary" | "success" | "error" }> = {
  washing: { label: "Washing", variant: "primary" },
  delivered: { label: "Delivered", variant: "success" },
  cancelled: { label: "Cancelled", variant: "error" },
};

export default function StudentOrdersPage() {
  const [filter, setFilter] = useState<"all" | "active" | "past">("all");
  const [activeTab, setActiveTab] = useState("orders");

  const filtered = orders.filter((o) => {
    if (filter === "active") return o.status === "washing";
    if (filter === "past") return o.status === "delivered" || o.status === "cancelled";
    return true;
  });

  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-5 pt-14 pb-2">
          <h1 className="font-display text-2xl font-bold text-fg">My Orders</h1>
          <div className="mt-4 flex gap-2">
            {(["all", "active", "past"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition-all ${
                  filter === f
                    ? "bg-primary text-white"
                    : "bg-surface border border-border-light text-muted"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 px-5 py-4 space-y-3 pb-24">
          {filtered.map((order) => {
            const cfg = statusConfig[order.status];
            return (
              <div key={order.id} className="rounded-2xl bg-surface border border-border-light p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-fg">{order.laundry}</p>
                    <p className="text-xs text-muted mt-0.5">{order.code}</p>
                  </div>
                  <Chip variant={cfg.variant}>{cfg.label}</Chip>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                  <span>{order.service}</span>
                  <span>·</span>
                  <span>{order.weight}</span>
                  <span>·</span>
                  <span>{order.date}</span>
                </div>
                <p className="mt-2 text-base font-bold text-fg">{order.price}</p>
              </div>
            );
          })}
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