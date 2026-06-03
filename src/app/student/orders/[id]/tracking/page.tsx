"use client";

import { useParams, useRouter } from "next/navigation";
import { Screen } from "@/components/layout/Screen";
import { NavBar } from "@/components/layout/NavBar";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";

type TimelineStatus = "completed" | "active" | "pending";

interface TimelineStep {
  title: string;
  sub?: string;
  time?: string;
  status: TimelineStatus;
}

const timelineSteps: TimelineStep[] = [
  { title: "Order Placed", sub: "Bunda Laundry Kemang", time: "Mon, 9 Jun · 12:05", status: "completed" },
  { title: "Picked Up", sub: "Driver Budi Santoso", time: "Mon, 9 Jun · 12:35", status: "completed" },
  { title: "Washing", sub: "In progress at partner location", time: "Mon, 9 Jun · 13:10", status: "active" },
  { title: "Drying", status: "pending" },
  { title: "Ready for Delivery", status: "pending" },
  { title: "Delivered", sub: "Back at your door", status: "pending" },
];

export default function OrderTrackingPage() {
  const router = useRouter();

  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden bg-bg">
        <NavBar title="Track Order" onBack={() => router.back()} />

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="h-[260px] relative overflow-hidden shrink-0 bg-gradient-to-br from-primary-50 to-primary-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(80%_0.04_190_/_0.5)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,oklch(82%_0.03_190_/_0.4)_0%,transparent_50%)]" />
            <div className="absolute top-[45%] left-0 right-0 h-[6px] bg-white/60" />
            <div className="absolute top-0 bottom-0 left-[35%] w-[6px] bg-white/60" />
            <div className="absolute top-[70%] left-[35%] right-0 h-[4px] bg-white/60" />
            <div className="absolute top-0 bottom-[40%] left-[65%] w-[4px] bg-white/60" />
            <div className="absolute top-[38%] left-[32%] w-[36px] h-[36px] bg-primary-500 rounded-[50%_50%_50%_0] -rotate-45 flex items-center justify-center shadow-[0_2px_8px_oklch(42%_0.12_190_/_0.4)] z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="rotate-45">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
            </div>
            <div className="absolute top-[55%] left-[58%] w-[32px] h-[32px] bg-secondary rounded-[50%_50%_50%_0] -rotate-45 flex items-center justify-center shadow-[0_2px_8px_oklch(68%_0.16_35_/_0.5)] animate-pulse z-10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="rotate-45">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <div className="absolute bottom-3 left-4 right-4 bg-surface rounded-2xl p-3 flex items-center gap-3 shadow-lg z-20">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-primary-100 text-[20px] shrink-0">
                🧑‍✈️
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-fg">Budi Santoso</p>
                <p className="text-xs text-muted mt-0.5">Honda Beat · B 1234 ABC</p>
              </div>
              <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-50 border-none cursor-pointer text-primary-600 transition-all active:scale-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.56 12.56 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.56 12.56 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>
              <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-50 border-none cursor-pointer text-primary-600 transition-all active:scale-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="px-5 py-4">
            <div className="flex items-center justify-between mb-4">
              <Chip variant="primary">#CGO-240815</Chip>
              <Chip variant="warning">Washing</Chip>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 text-white flex items-center justify-between mb-4">
              <div>
                <p className="text-[13px] text-white/85">Estimated delivery</p>
                <p className="font-display text-[22px] font-extrabold">Wed, 11 Jun · 14:00</p>
              </div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>

            <div className="mt-2">
              <p className="font-display font-bold text-base text-fg mb-4">Order Progress</p>
              <div className="flex flex-col">
                {timelineSteps.map((step, i) => (
                  <div key={step.title} className="flex gap-3">
                    <div className="flex flex-col items-center w-6 shrink-0">
                      <div
                        className={`w-4 h-4 rounded-full shrink-0 border-2.5 relative z-[1] ${
                          step.status === "completed"
                            ? "bg-success border-success"
                            : step.status === "active"
                              ? "bg-primary border-primary ring-[4px] ring-primary-100"
                              : "bg-bg border-border"
                        }`}
                      >
                        {step.status === "active" && (
                          <div className="absolute inset-[3px] rounded-full bg-white" />
                        )}
                      </div>
                      {i < timelineSteps.length - 1 && (
                        <div
                          className={`w-[2.5px] flex-1 mt-0.5 ${
                            step.status === "completed" ? "bg-success" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                    <div className={`pb-5 ${i === timelineSteps.length - 1 ? "pb-0" : ""}`}>
                      <p className="text-sm font-semibold text-fg">{step.title}</p>
                      {step.sub && <p className="text-xs text-muted mt-0.5">{step.sub}</p>}
                      {step.time && (
                        <p className="text-[11px] text-muted mt-1 font-mono">{step.time}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="secondary" fullWidth>Cancel Order</Button>
                <Button variant="primary" fullWidth>Contact Partner</Button>
              </div>

              <div className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
