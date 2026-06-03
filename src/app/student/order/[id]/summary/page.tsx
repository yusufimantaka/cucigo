"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Screen } from "@/components/layout/Screen";
import { NavBar } from "@/components/layout/NavBar";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";

const timelineSteps = [
  { title: "Order Created", sub: "Waiting for confirmation", status: "completed" as const },
  { title: "Driver Assigned", sub: "Driver will pick up your laundry", status: "active" as const },
  { title: "Picked Up", status: "pending" as const },
  { title: "Washing", status: "pending" as const },
  { title: "Delivered", sub: "Back at your door", status: "pending" as const },
];

const pickupInfo = [
  { icon: "📅", label: "Pickup", value: "Monday, 9 Jun · 12:00" },
  { icon: "📍", label: "Location", value: "Kost Putri Melati" },
  { icon: "🔄", label: "Est. delivery", value: "Wednesday, 11 Jun" },
];

const priceRows = [
  { label: "Wash Only (3 kg)", value: "Rp 15.000", type: "normal" as const },
  { label: "Delivery fee", value: "Rp 8.000", type: "normal" as const },
  { label: "First order discount (30%)", value: "− Rp 6.900", type: "discount" as const },
];

export default function OrderSummaryPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden bg-bg">
        <NavBar title="Order Summary" onBack={() => router.back()} />

        <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-4">
          <Card className="mt-4">
            <div className="flex items-center justify-between border-b border-border-light pb-3 mb-4">
              <h3 className="font-display font-bold text-base text-fg">Order Details</h3>
              <Chip variant="primary">#CGO-240816</Chip>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-primary-50 p-3 mb-4">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-primary-100 text-[22px] shrink-0">
                🏠
              </div>
              <div>
                <p className="text-[15px] font-semibold text-fg">Bunda Laundry Kemang</p>
                <p className="text-[13px] text-muted">0.8 km · Est. 2 days</p>
              </div>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-sm text-muted">Service</span>
              <span className="text-sm font-medium text-fg"><strong>Wash Only</strong></span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm text-muted">Weight</span>
              <span className="text-sm font-medium text-fg">3 kg (est.)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm text-muted">Price per kg</span>
              <span className="text-sm font-medium text-fg">Rp 5.000</span>
            </div>
          </Card>

          <Card className="mt-4">
            <h3 className="font-display font-bold text-base text-fg border-b border-border-light pb-3 mb-4">
              Pickup &amp; Delivery
            </h3>

            {pickupInfo.map((item) => (
              <div key={item.label} className="flex gap-3 mt-3 first:mt-0">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-primary-100 text-[18px] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[13px] text-muted">{item.label}</p>
                  <p className="text-[15px] font-semibold text-fg">{item.value}</p>
                </div>
              </div>
            ))}
          </Card>

          <Card className="mt-4">
            <h3 className="font-display font-bold text-base text-fg border-b border-border-light pb-3 mb-4">
              Order Progress
            </h3>

            <div className="flex flex-col mt-3">
              {timelineSteps.map((step, i) => (
                <div key={step.title} className="flex gap-3 py-2">
                  <div className="flex flex-col items-center w-5 shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full shrink-0 ${
                        step.status === "completed"
                          ? "bg-success"
                          : step.status === "active"
                            ? "bg-primary-500 ring-[4px] ring-primary-100"
                            : "bg-border"
                      }`}
                    />
                    {i < timelineSteps.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 min-h-2 mt-1 ${
                          step.status === "completed" ? "bg-success" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-fg">{step.title}</p>
                    {step.sub && <p className="text-xs text-muted">{step.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mt-4">
            <h3 className="font-display font-bold text-base text-fg border-b border-border-light pb-3 mb-4">
              Payment Breakdown
            </h3>

            <div className="mt-2">
              {priceRows.map((row) => (
                <div key={row.label} className="flex justify-between py-2 text-sm">
                  <span className="text-muted">{row.label}</span>
                  <span className={`font-medium ${row.type === "discount" ? "text-success" : "text-fg"}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-2 border-t-2 border-border text-base">
                <span className="font-extrabold text-fg">Total</span>
                <span className="font-display font-extrabold text-primary-600">Rp 16.100</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="shrink-0 border-t border-border-light bg-surface px-5 py-4 safe-bottom">
          <Link href={`/student/order/${id}/payment`}>
            <Button fullWidth>Continue to Payment</Button>
          </Link>
        </div>
      </div>
    </Screen>
  );
}
