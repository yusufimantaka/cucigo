"use client";

import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  small?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  small = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base border-none cursor-pointer transition-all min-h-[48px] font-body";
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-surface border border-border text-fg",
  };
  const sizeClass = small ? "px-4 py-2 min-h-[40px] text-sm" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${base} ${variants[variant]} ${sizeClass} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}