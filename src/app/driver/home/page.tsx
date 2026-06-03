"use client";

import { useState } from "react";
import { Screen } from "@/components/layout/Screen";
import { DriverTabBar } from "@/components/layout/RoleTabBars";

export default function DriverHomePage() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="bg-gradient-to-br from-secondary to-secondary-dark px-5 pt-10 pb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/80">Hi, Budi</p>
                <p className="text-lg font-bold">Ready to deliver?</p>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm transition-all active:scale-[0.95]"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${isOnline ? "bg-green-400 animate-pulse" : "bg-white/40"}`} />
                <span className="text-sm font-semibold">{isOnline ? "Online" : "Offline"}</span>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
                <p className="text-lg font-bold">Rp 185K</p>
                <p className="text-[10px] text-white/70">Today</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
                <p className="text-lg font-bold">6</p>
                <p className="text-[10px] text-white/70">Trips</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
                <p className="text-lg font-bold">4.8★</p>
                <p className="text-[10px] text-white/70">Rating</p>
              </div>
            </div>
          </div>

          <div className="flex-1 px-5 -mt-4 space-y-4 pb-6">
            <h2 className="font-display font-bold text-base text-fg">Active Delivery</h2>
            <div className="rounded-2xl bg-surface border border-border-light overflow-hidden">
              <div className="h-[120px] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl">🗺️</span>
                  <p className="text-xs text-primary-700 font-semibold mt-1">Live Map Preview</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-fg">Bunda Laundry</p>
                    <p className="text-xs text-muted">→  Kost Merdeka A2</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-warning-light px-3 py-1 text-xs font-semibold text-warning">
                    ~15 min
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-2 py-0.5 text-primary-700 font-semibold">Pickup</span>
                  <span>Wash + Iron · 3 kg</span>
                </div>
              </div>
            </div>

            <h2 className="font-display font-bold text-base text-fg">Upcoming</h2>
            <div className="rounded-2xl bg-surface border border-border-light p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-fg">KosWash</p>
                  <p className="text-xs text-muted">→  Kost Hijau B5</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-fg">Today, 14:00</p>
                  <p className="text-[10px] text-muted">Express · 1 kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DriverTabBar active="deliveries" />
      </div>
    </Screen>
  );
}
