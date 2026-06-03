"use client";

import { useRouter } from "next/navigation";
import { TabBar } from "./TabBar";

export function StudentTabBar({ active }: { active: string }) {
  const router = useRouter();

  const items = [
    {
      key: "home",
      label: "Home",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      href: "/student/home",
    },
    {
      key: "orders",
      label: "Orders",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16h6v-6h-6" />
          <path d="M2 16h6v-6H2" />
          <path d="M8 2h8v6H8" />
          <path d="M8 22v-6h8v6" />
        </svg>
      ),
      href: "/student/orders",
    },
    {
      key: "shared",
      label: "Shared",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      href: "/student/shared",
    },
    {
      key: "spending",
      label: "Spending",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="20" y2="10" />
          <line x1="18" x2="12" y1="20" y2="10" />
          <line x1="6" x2="12" y1="20" y2="10" />
        </svg>
      ),
      href: "/student/spending",
    },
    {
      key: "profile",
      label: "Profile",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <TabBar
      items={items.map((item) => ({
        icon: item.icon,
        label: item.label,
        active: active === item.key,
        onClick: () => router.push(item.href),
      }))}
    />
  );
}

export function DriverTabBar({ active }: { active: string }) {
  const router = useRouter();

  const items = [
    {
      key: "deliveries",
      label: "Deliveries",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <path d="m9 9 6 6" />
          <path d="m15 9-6 6" />
        </svg>
      ),
      href: "/driver/home",
    },
    {
      key: "history",
      label: "History",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      ),
      href: "#",
    },
    {
      key: "earnings",
      label: "Earnings",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="20" y2="10" />
          <line x1="18" x2="12" y1="20" y2="10" />
          <line x1="6" x2="12" y1="20" y2="10" />
        </svg>
      ),
      href: "#",
    },
    {
      key: "profile",
      label: "Profile",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <TabBar
      items={items.map((item) => ({
        icon: item.icon,
        label: item.label,
        active: active === item.key,
        onClick: () => router.push(item.href),
      }))}
    />
  );
}

export function PartnerTabBar({ active }: { active: string }) {
  const router = useRouter();

  const items = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
      href: "/partner/dashboard",
    },
    {
      key: "orders",
      label: "Orders",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16h6v-6h-6" />
          <path d="M2 16h6v-6H2" />
          <path d="M8 2h8v6H8" />
          <path d="M8 22v-6h8v6" />
        </svg>
      ),
      href: "#",
    },
    {
      key: "earnings",
      label: "Earnings",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="20" y2="10" />
          <line x1="18" x2="12" y1="20" y2="10" />
          <line x1="6" x2="12" y1="20" y2="10" />
        </svg>
      ),
      href: "#",
    },
    {
      key: "settings",
      label: "Settings",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <TabBar
      items={items.map((item) => ({
        icon: item.icon,
        label: item.label,
        active: active === item.key,
        onClick: () => router.push(item.href),
      }))}
    />
  );
}

export function AdminTabBar({ active }: { active: string }) {
  const router = useRouter();

  const items = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
      href: "/admin/dashboard",
    },
    {
      key: "orders",
      label: "Orders",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16h6v-6h-6" />
          <path d="M2 16h6v-6H2" />
          <path d="M8 2h8v6H8" />
          <path d="M8 22v-6h8v6" />
        </svg>
      ),
      href: "#",
    },
    {
      key: "users",
      label: "Users",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      href: "#",
    },
    {
      key: "settings",
      label: "Settings",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l-.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <TabBar
      items={items.map((item) => ({
        icon: item.icon,
        label: item.label,
        active: active === item.key,
        onClick: () => router.push(item.href),
      }))}
    />
  );
}
