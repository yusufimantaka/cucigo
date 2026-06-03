"use client";

import Link from "next/link";

const features = [
  { icon: "🚴", title: "Pickup & Delivery", desc: "We pick up from your kost and deliver back fresh" },
  { icon: "📍", title: "Live Tracking", desc: "See exactly where your laundry is in real time" },
  { icon: "💳", title: "Easy Payment", desc: "GoPay, OVO, DANA — pay however you like" },
];

export default function SplashPage() {
  return (
    <div className="mobile-frame">
      <div className="flex flex-1 flex-col items-center justify-between bg-gradient-to-b from-primary-500 to-primary-700 px-8 py-12 text-white">
        <div className="flex flex-1 flex-col items-center justify-center gap-6">
          <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#308a74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h1 className="font-display text-3xl font-bold tracking-tight">CuciGo</h1>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Laundry pickup &amp; delivery —<br />made easy for Anak Kos
            </p>
          </div>

          <div className="mt-4 flex w-full flex-col gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{f.title}</p>
                  <p className="text-xs text-white/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-3 pb-4">
          <Link
            href="/auth/login"
            className="flex h-[52px] w-full items-center justify-center rounded-2xl bg-white font-semibold text-primary-700 transition-all"
          >
            Get Started
          </Link>
          <p className="text-center text-xs text-white/70">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-semibold text-white underline underline-offset-2">
              Sign in
            </Link>
          </p>
        </div>

        <div className="flex gap-2 pb-2">
          <span className="h-[8px] w-[8px] rounded-full bg-white" />
          <span className="h-[8px] w-[8px] rounded-full bg-white/40" />
          <span className="h-[8px] w-[8px] rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}