"use client";

import { useState } from "react";
import { Screen } from "@/components/layout/Screen";
import { PartnerTabBar } from "@/components/layout/RoleTabBars";
import { Chip } from "@/components/ui/Chip";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekData = [45, 65, 30, 80, 55, 70, 40];

export default function PartnerDashboardPage() {
  const [processingStep, setProcessingStep] = useState(1);

  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 px-5 pt-10 pb-8 text-white">
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

          <div className="flex-1 px-5 -mt-4 space-y-4 pb-6">
            <h2 className="font-display font-bold text-base text-fg">Incoming Orders</h2>
            <div className="rounded-2xl bg-surface border border-border-light p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-fg">Rizki Anak Kos</p>
                  <p className="text-xs text-muted">CGO-250603001 · Wash + Iron · 3 kg</p>
                  <p className="text-xs text-muted mt-0.5">Pickup: Today, 10:00</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="flex h-[32px] px-3 items-center justify-center rounded-lg bg-success text-white text-xs font-semibold transition-all active:scale-95">
                    Accept
                  </button>
                  <button className="flex h-[32px] px-3 items-center justify-center rounded-lg border border-error text-error text-xs font-semibold transition-all active:scale-95">
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
                    onClick={() => setProcessingStep(i)}
                    className={`flex-1 rounded-lg py-1.5 text-[10px] font-semibold transition-all active:scale-95 ${
                      i <= processingStep
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
              <button className="mt-3 flex h-[40px] w-full items-center justify-center rounded-xl bg-secondary text-white text-sm font-semibold transition-all active:scale-[0.98]">
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
        </div>

        <PartnerTabBar active="dashboard" />
      </div>
    </Screen>
  );
}
