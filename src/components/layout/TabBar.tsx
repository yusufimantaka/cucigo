"use client";

interface TabItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface TabBarProps {
  items: TabItem[];
}

export function TabBar({ items }: TabBarProps) {
  return (
    <nav className="flex h-[80px] items-start justify-around border-t border-border-light bg-surface pt-2 pb-[env(safe-area-inset-bottom,0px)]">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className={`flex flex-col items-center gap-0.5 border-none bg-transparent cursor-pointer transition-all ${
            item.active ? "text-primary" : "text-muted"
          }`}
        >
          {item.icon}
          <span className="text-[10px] font-semibold">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}