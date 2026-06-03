"use client";

import { useState } from "react";
import Link from "next/link";
import { Screen } from "@/components/layout/Screen";
import { StudentTabBar } from "@/components/layout/RoleTabBars";

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
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 px-5 pt-10 pb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/80">{getGreeting()}, Rizki Anak Kos 👋</p>
              </div>
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                RA
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input
                type="text"
                placeholder="Search laundry services..."
                className="flex-1 bg-transparent text-sm text-white placeholder-white/60 outline-none"
              />
            </div>
          </div>

          <div className="flex-1 px-5 -mt-4 pb-6">
            <div className="grid grid-cols-3 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-surface border border-border-light p-4 transition-all active:scale-[0.98]"
                >
                  <span className="text-3xl">{action.icon}</span>
                  <span className="text-xs font-semibold text-fg">{action.label}</span>
                  <span className="text-[10px] text-muted">{action.price}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Promo</p>
              <p className="mt-1 text-lg font-bold">30% off first order!</p>
              <p className="mt-0.5 text-xs text-white/70">Use code: CUCIGOPEDIA</p>
            </div>

            <div className="mt-6">
              <h2 className="font-display font-bold text-base text-fg">Active Order</h2>
              <div className="mt-3 rounded-2xl bg-surface border border-border-light p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-fg">Bunda Laundry</p>
                    <p className="text-xs text-muted">Wash + Iron · 3 kg</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                    Washing
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1">
                  {progressSteps.map((step, i) => (
                    <div key={step} className="flex flex-1 flex-col items-center">
                      <div className={`h-2 w-full rounded-full ${i <= 2 ? "bg-primary-500" : "bg-border-light"}`} />
                      <span className="mt-1 text-[9px] text-muted">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-display font-bold text-base text-fg">Nearby Laundry</h2>
              <div className="mt-3 flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
                {nearbyLaundries.map((l) => (
                  <div key={l.name} className="min-w-[160px] rounded-2xl bg-surface border border-border-light p-4">
                    <div className="flex h-[80px] items-center justify-center rounded-xl bg-primary-50 text-3xl">
                      🏠
                    </div>
                    <p className="mt-2 text-sm font-semibold text-fg">{l.name}</p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted">
                      <span className="text-warning">★</span> {l.rating} · {l.distance}
                    </div>
                    <p className="mt-1 text-xs font-semibold text-primary">{l.price}</p>
                  </div>
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
