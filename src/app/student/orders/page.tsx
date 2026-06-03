"use client";

import { useState } from "react";
import { Screen } from "@/components/layout/Screen";
import { StudentTabBar } from "@/components/layout/RoleTabBars";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const statusConfig: Record<OrderStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  washing: { label: "Washing", variant: "default" },
  delivered: { label: "Delivered", variant: "secondary" },
  cancelled: { label: "Cancelled", variant: "destructive" },
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
      <div className="flex flex-1 flex-col overflow-hidden bg-background">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="px-5 pt-6 pb-4">
            <h1 className="font-display text-2xl font-bold text-foreground">My Orders</h1>

            <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)} className="mt-4">
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                <TabsTrigger value="active" className="flex-1">Active</TabsTrigger>
                <TabsTrigger value="past" className="flex-1">Past</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex-1 px-5 pb-6 space-y-3">
            {filtered.map((order) => {
              const cfg = statusConfig[order.status];
              return (
                <Card key={order.id} className="border-border hover:border-primary/30 transition-all active:scale-[0.98]">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{order.laundry}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{order.code}</p>
                      </div>
                      <Badge variant={cfg.variant}>{cfg.label}</Badge>
                    </div>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{order.service}</span>
                      <span>·</span>
                      <span>{order.weight}</span>
                      <span>·</span>
                      <span>{order.date}</span>
                    </div>
                    <p className="mt-2 text-base font-bold text-foreground">{order.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <StudentTabBar active="orders" />
      </div>
    </Screen>
  );
}
