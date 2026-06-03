"use client";

import { useState } from "react";
import { Screen } from "@/components/layout/Screen";
import { StudentTabBar } from "@/components/layout/RoleTabBars";
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

  const filtered = orders.filter((o) => {
    if (filter === "active") return o.status === "washing";
    if (filter === "past") return o.status === "delivered" || o.status === "cancelled";
    return true;
  });

  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="px-5 pt-10 pb-2">
            <h1 className="font-display text-2xl font-bold text-fg">My Orders</h1>
            <div className="mt-4 flex gap-2">
              {(["all", "active", "past"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition-all active:scale-[0.95] ${
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

          <div className="flex-1 px-5 py-4 space-y-3 pb-6">
            {filtered.map((order) => {
              const cfg = statusConfig[order.status];
              return (
                <div key={order.id} className="rounded-2xl bg-surface border border-border-light p-4 transition-all active:scale-[0.98]">
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
        </div>

        <StudentTabBar active="orders" />
      </div>
    </Screen>
  );
}
