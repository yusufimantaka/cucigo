"use client";

interface NavBarProps {
  title: string;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
}

export function NavBar({ title, onBack, rightSlot }: NavBarProps) {
  return (
    <nav className="flex h-[56px] items-center justify-between px-4">
      <button
        onClick={onBack}
        className="flex h-[36px] w-[36px] items-center justify-center rounded-full border-none bg-surface cursor-pointer transition-all"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-fg"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <h1 className="flex-1 text-center font-display font-bold text-lg text-fg">
        {title}
      </h1>
      <div className="flex h-[36px] w-[36px] items-center justify-center">
        {rightSlot ?? null}
      </div>
    </nav>
  );
}