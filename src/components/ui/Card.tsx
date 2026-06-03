import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function Card({ elevated = false, className = "", children, ...props }: CardProps) {
  const base = "bg-surface rounded-2xl p-4 border border-border-light";
  const elevation = elevated ? "shadow-sm" : "";

  return (
    <div className={`${base} ${elevation} ${className}`} {...props}>
      {children}
    </div>
  );
}