"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Screen } from "@/components/layout/Screen";
import { NavBar } from "@/components/layout/NavBar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PAYMENT_METHODS } from "@/lib/constants";

const bankDetails = [
  { label: "Bank", value: "BCA" },
  { label: "Account Number", value: "123 456 7890", copyable: true },
  { label: "Account Name", value: "PT CuciGo Sejahtera" },
  { label: "Amount", value: "Rp 16.100" },
];

const methodBackgrounds: Record<string, string> = {
  gopay: "bg-[oklch(92%_0.06_145)]",
  ovo: "bg-[oklch(92%_0.05_280)]",
  dana: "bg-[oklch(92%_0.06_220)]",
  bank: "bg-[oklch(92%_0.02_240)]",
};

export default function PaymentPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [selectedMethod, setSelectedMethod] = useState("gopay");
  const [promoCode, setPromoCode] = useState("FIRST30");
  const [copied, setCopied] = useState(false);

  const isBank = selectedMethod === "bank";

  const handleCopy = () => {
    navigator.clipboard.writeText("1234567890");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden bg-bg">
        <NavBar title="Payment" onBack={() => router.back()} />

        <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-4">
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-6 text-center text-white relative overflow-hidden mb-6">
            <div className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full bg-white/10" />
            <p className="text-sm text-white/85">Total to pay</p>
            <p className="font-display text-[36px] font-extrabold mt-2 tracking-tight">Rp 16.100</p>
            <p className="text-xs text-white/70 mt-2 font-mono">Order #CGO-240816</p>
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Payment Method</p>
          <div className="flex flex-col gap-3 mb-6">
            {PAYMENT_METHODS.map((method) => {
              const isSelected = selectedMethod === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left active:scale-[0.98] ${
                    isSelected
                      ? "border-primary bg-primary-50 ring-[3px] ring-primary-100"
                      : "border-border-light bg-surface"
                  }`}
                >
                  <div
                    className={`flex h-[48px] w-[48px] items-center justify-center rounded-xl text-2xl shrink-0 ${methodBackgrounds[method.id]}`}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-semibold text-fg">{method.label}</p>
                    <p className="text-[13px] text-muted mt-0.5">{method.desc}</p>
                  </div>
                  <div
                    className={`flex h-6 w-6 rounded-full shrink-0 items-center justify-center border-2 transition-all ${
                      isSelected ? "bg-primary border-primary" : "border-border bg-transparent"
                    }`}
                  >
                    {isSelected && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {isBank && (
            <Card className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Transfer Instructions</p>
              {bankDetails.map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 text-sm">
                  <span className="text-muted">{row.label}</span>
                  <span className="font-mono font-semibold text-fg flex items-center gap-2">
                    {row.value}
                    {row.copyable && (
                      <button
                        onClick={handleCopy}
                        className="bg-primary-50 border-none rounded-lg px-2 py-0.5 text-xs font-semibold text-primary-600 cursor-pointer transition-all active:scale-95"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    )}
                  </span>
                </div>
              ))}
            </Card>
          )}

          <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Promo Code</p>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="flex-1 w-full rounded-xl border border-border bg-surface px-4 py-3 min-h-[48px] text-base text-fg font-body outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            <Button variant="secondary" small className="shrink-0">
              Applied
            </Button>
          </div>
        </div>

        <div className="shrink-0 border-t border-border-light bg-surface px-5 py-4 safe-bottom">
          <div className="flex items-center justify-center gap-2 mb-3 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Payments are encrypted and secure
          </div>
          <Button fullWidth>Pay Rp 16.100</Button>
        </div>
      </div>
    </Screen>
  );
}
