"use client";

import Link from "next/link";
import { Screen } from "@/components/layout/Screen";
import { StudentTabBar } from "@/components/layout/RoleTabBars";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const quickActions = [
  { icon: "🫧", label: "Wash Only", price: "Rp 5.000/kg", href: "/student/order" },
  { icon: "👔", label: "Wash + Iron", price: "Rp 8.000/kg", href: "/student/order" },
  { icon: "⚡", label: "Express", price: "Rp 12.000/kg", href: "/student/order" },
];

const progressSteps = ["Ordered", "Picked Up", "Washing", "Ready", "Delivered"];

const nearbyLaundries = [
  { name: "Bunda Laundry", rating: 4.9, distance: "0.3 km", price: "Rp 5.000/kg" },
  { name: "KosWash", rating: 4.7, distance: "0.5 km", price: "Rp 6.000/kg" },
  { name: "FreshClean", rating: 4.6, distance: "0.8 km", price: "Rp 4.500/kg" },
];

export default function StudentHomePage() {
  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Selamat pagi";
    if (h < 17) return "Selamat siang";
    if (h < 20) return "Selamat sore";
    return "Selamat malam";
  };

  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden bg-background">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 px-5 pt-6 pb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/80">{getGreeting()}, Rizki Anak Kos 👋</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                RA
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
              <input
                type="text"
                placeholder="Search laundry services..."
                className="flex-1 bg-transparent text-sm text-white placeholder-white/60 outline-none"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 px-5 -mt-3 pb-6 space-y-5">
            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-card border border-border p-4 transition-all active:scale-[0.98] hover:border-primary/30"
                >
                  <span className="text-3xl">{action.icon}</span>
                  <span className="text-xs font-semibold text-foreground">{action.label}</span>
                  <span className="text-[10px] text-muted-foreground">{action.price}</span>
                </Link>
              ))}
            </div>

            {/* Promo Banner */}
            <Card className="bg-gradient-to-r from-primary-500 to-primary-600 text-white border-0">
              <CardContent className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Promo</p>
                <p className="mt-1 text-lg font-bold">30% off first order!</p>
                <p className="mt-0.5 text-xs text-white/70">Use code: CUCIGOPEDIA</p>
              </CardContent>
            </Card>

            {/* Active Order */}
            <div>
              <h2 className="font-display font-bold text-base text-foreground">Active Order</h2>
              <Card className="mt-3">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Bunda Laundry</p>
                      <p className="text-xs text-muted-foreground">Wash + Iron · 3 kg</p>
                    </div>
                    <Badge variant="default" className="bg-primary-100 text-primary-700 hover:bg-primary-100">Washing</Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-1">
                    {progressSteps.map((step, i) => (
                      <div key={step} className="flex flex-1 flex-col items-center">
                        <div className={`h-2 w-full rounded-full ${i <= 2 ? "bg-primary" : "bg-border"}`} />
                        <span className="mt-1 text-[9px] text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Nearby Laundry */}
            <div>
              <h2 className="font-display font-bold text-base text-foreground">Nearby Laundry</h2>
              <div className="mt-3 flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
                {nearbyLaundries.map((l) => (
                  <Card key={l.name} className="min-w-[160px] border-border hover:border-primary/30 transition-all">
                    <CardContent className="p-4">
                      <div className="flex h-20 items-center justify-center rounded-xl bg-primary-50 text-3xl">
                        🏠
                      </div>
                      <p className="mt-2 text-sm font-semibold text-foreground">{l.name}</p>
                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <span className="text-warning">★</span> {l.rating} · {l.distance}
                      </div>
                      <p className="mt-1 text-xs font-semibold text-primary">{l.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <StudentTabBar active="home" />
      </div>
    </Screen>
  );
}
