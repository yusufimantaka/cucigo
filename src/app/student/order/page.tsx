"use client";

import { useState } from "react";
import { NavBar } from "@/components/layout/NavBar";
import { SERVICE_TYPES, formatRp } from "@/lib/constants";

const partners = [
  { id: 1, name: "Bunda Laundry", rating: 4.9, distance: "0.3 km", emoji: "🏠" },
  { id: 2, name: "KosWash", rating: 4.7, distance: "0.5 km", emoji: "🏭" },
  { id: 3, name: "FreshClean", rating: 4.6, distance: "0.8 km", emoji: "✨" },
];

const dateChips = [
  { label: "Mon", date: "9", full: "Mon 9" },
  { label: "Tue", date: "10", full: "Tue 10" },
  { label: "Wed", date: "11", full: "Wed 11" },
  { label: "Thu", date: "12", full: "Thu 12" },
  { label: "Fri", date: "13", full: "Fri 13" },
];

const timeChips = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const serviceKeys = Object.keys(SERVICE_TYPES) as Array<keyof typeof SERVICE_TYPES>;

export default function StudentOrderPage() {
  const [selectedService, setSelectedService] = useState<keyof typeof SERVICE_TYPES>("WASH_ONLY");
  const [selectedPartner, setSelectedPartner] = useState(1);
  const [weight, setWeight] = useState(3);
  const [selectedDate, setSelectedDate] = useState("Wed 11");
  const [selectedTime, setSelectedTime] = useState("10:00");

  const pricePerKg = SERVICE_TYPES[selectedService].pricePerKg;
  const total = pricePerKg * weight;

  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col overflow-y-auto bg-bg">
        <NavBar title="New Order" onBack={() => {}} />

        <div className="flex-1 px-5 pb-28">
          <h2 className="font-display font-bold text-base text-fg">Service Type</h2>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {serviceKeys.map((key) => {
              const svc = SERVICE_TYPES[key];
              const isActive = selectedService === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedService(key)}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all ${
                    isActive
                      ? "border-primary bg-primary-50"
                      : "border-border-light bg-surface"
                  }`}
                >
                  <span className="text-2xl">{svc.icon}</span>
                  <span className={`text-xs font-semibold ${isActive ? "text-primary-700" : "text-fg"}`}>
                    {svc.label}
                  </span>
                  <span className="text-[10px] text-muted">{formatRp(svc.pricePerKg)}/kg</span>
                </button>
              );
            })}
          </div>

          <h2 className="mt-6 font-display font-bold text-base text-fg">Laundry Partner</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {partners.map((p) => {
              const isActive = selectedPartner === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPartner(p.id)}
                  className={`min-w-[140px] flex-shrink-0 flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all ${
                    isActive ? "border-primary bg-primary-50" : "border-border-light bg-surface"
                  }`}
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <span className={`text-xs font-semibold ${isActive ? "text-primary-700" : "text-fg"}`}>
                    {p.name}
                  </span>
                  <span className="text-[10px] text-muted">★ {p.rating} · {p.distance}</span>
                </button>
              );
            })}
          </div>

          <h2 className="mt-6 font-display font-bold text-base text-fg">Weight (kg)</h2>
          <div className="mt-3 flex items-center justify-center gap-6">
            <button
              onClick={() => setWeight(Math.max(1, weight - 1))}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-border bg-surface text-lg font-bold text-fg"
            >
              −
            </button>
            <div className="text-center">
              <span className="text-3xl font-bold text-fg">{weight}</span>
              <span className="text-sm text-muted"> kg</span>
            </div>
            <button
              onClick={() => setWeight(Math.min(20, weight + 1))}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-border bg-surface text-lg font-bold text-fg"
            >
              +
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-muted">
            About {weight <= 2 ? "1 small bag" : weight <= 5 ? "1 large bag" : "2+ large bags"} or ~{weight * 5} items
          </p>

          <h2 className="mt-6 font-display font-bold text-base text-fg">Pickup Schedule</h2>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {dateChips.map((d) => (
              <button
                key={d.full}
                onClick={() => setSelectedDate(d.full)}
                className={`flex flex-col items-center rounded-xl border px-4 py-2.5 transition-all min-w-[60px] ${
                  selectedDate === d.full
                    ? "border-primary bg-primary text-white"
                    : "border-border-light bg-surface text-fg"
                }`}
              >
                <span className="text-[10px] font-medium">{d.label}</span>
                <span className="text-sm font-bold">{d.date}</span>
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {timeChips.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                  selectedTime === t
                    ? "border-primary bg-primary text-white"
                    : "border-border-light bg-surface text-fg"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <h2 className="mt-6 font-display font-bold text-base text-fg">Pickup Location</h2>
          <div className="mt-3 rounded-2xl bg-surface border border-border-light p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#308a74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">Kost Merdeka</p>
                <p className="text-xs text-muted">Jl. Merdeka No. 12, Gedung A, Lt. 2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-border-light bg-surface px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted">Estimated total</span>
            <span className="text-xl font-bold text-fg">{formatRp(total)}</span>
          </div>
          <button className="flex h-[52px] w-full items-center justify-center rounded-xl bg-primary font-semibold text-white">
            Continue to Summary
          </button>
        </div>
      </div>
    </div>
  );
}