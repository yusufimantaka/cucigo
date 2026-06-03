"use client";

import { Screen } from "@/components/layout/Screen";
import { StudentTabBar } from "@/components/layout/RoleTabBars";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const members = [
  { name: "Rizki", initials: "RA", role: "Organizer", paid: true },
  { name: "Dimas", initials: "DW", role: "Member", paid: true },
  { name: "Sari", initials: "SP", role: "Member", paid: false },
];

export default function StudentSharedPage() {
  return (
    <Screen>
      <div className="flex flex-1 flex-col overflow-hidden bg-background">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="px-5 pt-6 pb-4">
            <h1 className="font-display text-2xl font-bold text-foreground">Shared Laundry</h1>
            <p className="mt-1 text-sm text-muted-foreground">Split costs with your kosmates</p>
          </div>

          <div className="flex-1 px-5 pb-6 space-y-5">
            <Button variant="outline" className="w-full h-auto py-3 rounded-2xl border-dashed border-primary/40 text-primary hover:bg-primary-50 hover:text-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M5 12h14"/><path d="M12 5v14"/>
              </svg>
              Create New Group
            </Button>

            {/* Active Group */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Active Group</p>
                <p className="mt-1 text-lg font-bold">Kost Merdeka Laundry</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold">Rp 24.000</span>
                  <span className="text-sm text-white/70">total</span>
                </div>
                <p className="text-xs text-white/70 mt-1">Rp 8.000 each · 3 people</p>
              </div>
              <Card className="rounded-t-none border-t-0 -mt-1">
                <CardContent className="p-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Split</p>
                    <div className="flex h-3 rounded-full overflow-hidden bg-border">
                      <div className="bg-primary w-[66%]" />
                      <div className="bg-warning w-[34%]" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-success font-semibold">Paid (2)</span>
                      <span className="text-muted-foreground">Pending (1)</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    {members.map((m) => (
                      <div key={m.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white ${m.paid ? "bg-primary" : "bg-muted-foreground"}`}>
                            {m.initials}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{m.name}</p>
                            <p className="text-[10px] text-muted-foreground">{m.role}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-semibold ${m.paid ? "text-success" : "text-destructive"}`}>
                          {m.paid ? "Paid" : "Pending"}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Completed Group */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-success to-emerald-600 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Completed</p>
                <p className="mt-1 text-lg font-bold">Kost Hijau Laundry</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold">Rp 36.000</span>
                  <span className="text-sm text-white/70">total</span>
                </div>
                <p className="text-xs text-white/70 mt-1">Rp 18.000 each · 2 people</p>
              </div>
              <Card className="rounded-t-none border-t-0 -mt-1">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Completed on 28 May 2026</span>
                    <Badge variant="secondary" className="bg-success-light text-success hover:bg-success-light">✓ Settled</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <StudentTabBar active="shared" />
      </div>
    </Screen>
  );
}
