"use client";

import { useState } from "react";
import { TabBar } from "@/components/layout/TabBar";

export default function DriverHomePage() {
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState("deliveries");

  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="bg-gradient-to-br from-secondary to-secondary-dark px-6 pt-14 pb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80">Hi, Budi</p>
              <p className="text-lg font-bold">Ready to deliver?</p>
            </div>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
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

        <div className="flex-1 px-5 -mt-4 space-y-4 pb-24">
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

        <TabBar
          items={[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/></svg>, label: "Deliveries", active: activeTab === "deliveries", onClick: () => setActiveTab("deliveries") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>, label: "History", active: activeTab === "history", onClick: () => setActiveTab("history") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="12" y1="20" y2="10"/><line x1="6" x2="12" y1="20" y2="10"/></svg>, label: "Earnings", active: activeTab === "earnings", onClick: () => setActiveTab("earnings") },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, label: "Profile", active: activeTab === "profile", onClick: () => setActiveTab("profile") },
          ]}
        />
      </div>
    </div>
  );
}