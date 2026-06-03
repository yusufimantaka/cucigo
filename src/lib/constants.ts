export const SERVICE_TYPES = {
  WASH_ONLY: { label: "Wash Only", pricePerKg: 5000, durationDays: 2, icon: "🫧" },
  WASH_IRON: { label: "Wash + Iron", pricePerKg: 8000, durationDays: 3, icon: "👔" },
  EXPRESS: { label: "Express", pricePerKg: 12000, durationDays: 0, icon: "⚡" },
} as const;

export const ORDER_STATUSES = [
  "ORDERED",
  "DRIVER_ASSIGNED",
  "PICKED_UP",
  "WASHING",
  "DRYING",
  "READY",
  "DELIVERING",
  "COMPLETED",
  "CANCELLED",
] as const;

export const PAYMENT_METHODS = [
  { id: "gopay", label: "GoPay", desc: "Instant payment via GoPay wallet", icon: "💳" },
  { id: "ovo", label: "OVO", desc: "Pay with your OVO balance", icon: "💳" },
  { id: "dana", label: "DANA", desc: "Quick checkout with DANA", icon: "💳" },
  { id: "bank", label: "Bank Transfer", desc: "Manual transfer to BCA / BNI / Mandiri", icon: "🏦" },
] as const;

export const USER_ROLES = ["STUDENT", "PARTNER", "DRIVER", "ADMIN"] as const;

export function formatRp(amount: number): string {
  return "Rp " + amount.toLocaleString("id-ID");
}

export function generateOrderCode(): string {
  const prefix = "CGO";
  const date = new Date();
  const dateStr = (
    date.getFullYear().toString().slice(2) +
    String(date.getMonth() + 1).padStart(2, "0") +
    String(date.getDate()).padStart(2, "0")
  );
  const rand = String(Math.floor(Math.random() * 100000))
    .padStart(5, "0");
  return `${prefix}-${dateStr}${rand}`;
}