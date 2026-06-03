"use client";

import { useState } from "react";
import Link from "next/link";
import { Screen } from "@/components/layout/Screen";

export default function LoginPage() {
  const [tab, setTab] = useState<"phone" | "email">("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  };

  return (
    <Screen>
      <div className="flex flex-1 flex-col bg-bg">
        {/* Header */}
        <div className="px-6 pt-8 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#308a74" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1 className="font-display text-[28px] font-bold text-fg leading-tight">Selamat datang</h1>
          <p className="mt-2 text-[15px] text-muted leading-relaxed">
            Sign in to order laundry from your kost
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 px-6">
          {/* Segmented Control */}
          <div className="mb-8 flex rounded-xl bg-surface p-1 border border-border-light shadow-sm">
            <button
              onClick={() => { setTab("phone"); setShowOtp(false); }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all active:scale-[0.98] ${
                tab === "phone"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-transparent text-muted hover:text-fg"
              }`}
            >
              Phone
            </button>
            <button
              onClick={() => { setTab("email"); setShowOtp(false); }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all active:scale-[0.98] ${
                tab === "email"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-transparent text-muted hover:text-fg"
              }`}
            >
              Email
            </button>
          </div>

          {/* Phone Tab */}
          {tab === "phone" && !showOtp && (
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex h-[52px] w-[72px] items-center justify-center rounded-xl border border-border bg-surface text-sm font-semibold text-fg shadow-sm">
                  +62
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="812 3456 7890"
                  className="flex-1 rounded-xl border border-border bg-surface px-4 h-[52px] text-base text-fg outline-none transition-all focus:border-primary focus:ring-[3px] focus:ring-primary/20 shadow-sm"
                />
              </div>
              <button
                onClick={() => setShowOtp(true)}
                className="flex h-[52px] w-full items-center justify-center rounded-xl bg-primary font-semibold text-white transition-all active:scale-[0.98] active:bg-primary-600 shadow-sm"
              >
                Send OTP
              </button>
            </div>
          )}

          {/* OTP */}
          {tab === "phone" && showOtp && (
            <div className="space-y-6">
              <p className="text-sm text-muted text-center">
                Enter the 6-digit code sent to <span className="font-semibold text-fg">+62{phone}</span>
              </p>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                    className="h-[56px] w-[48px] rounded-xl border border-border bg-surface text-center text-xl font-bold text-fg outline-none transition-all focus:border-primary focus:ring-[3px] focus:ring-primary/20 shadow-sm"
                  />
                ))}
              </div>
              <Link
                href="/student/home"
                className="flex h-[52px] w-full items-center justify-center rounded-xl bg-primary font-semibold text-white transition-all active:scale-[0.98] active:bg-primary-600 shadow-sm"
              >
                Verify &amp; Sign In
              </Link>
              <p className="text-center text-sm text-muted">
                Didn&apos;t get the code?{" "}
                <span className="font-semibold text-primary cursor-pointer hover:underline">Resend</span>
              </p>
            </div>
          )}

          {/* Email Tab */}
          {tab === "email" && (
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 h-[52px] text-base text-fg outline-none transition-all focus:border-primary focus:ring-[3px] focus:ring-primary/20 shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-surface px-4 h-[52px] text-base text-fg outline-none transition-all focus:border-primary focus:ring-[3px] focus:ring-primary/20 shadow-sm"
                />
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">Forgot password?</span>
              </div>
              <Link
                href="/student/home"
                className="flex h-[52px] w-full items-center justify-center rounded-xl bg-primary font-semibold text-white transition-all active:scale-[0.98] active:bg-primary-600 shadow-sm"
              >
                Sign In
              </Link>
            </div>
          )}

          {/* Divider */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-semibold text-muted uppercase tracking-wide">or continue with</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google Button */}
          <button className="mt-6 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-border bg-surface font-semibold text-fg transition-all active:scale-[0.98] hover:bg-bg shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 pb-8 pt-8 mt-auto">
          <p className="text-center text-xs text-muted leading-relaxed">
            By continuing, you agree to our{" "}
            <span className="font-semibold text-fg">Terms of Service</span> and{" "}
            <span className="font-semibold text-fg">Privacy Policy</span>
          </p>
        </div>
      </div>
    </Screen>
  );
}
