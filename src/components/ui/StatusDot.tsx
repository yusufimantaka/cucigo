import { type HTMLAttributes } from "react";

type StatusVariant = "ordered" | "picked" | "washing" | "drying" | "ready" | "delivering" | "completed";

interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
  status: StatusVariant;
}

const statusColors: Record<StatusVariant, string> = {
  ordered: "bg-primary-300",
  picked: "bg-warning",
  washing: "bg-primary-500",
  drying: "bg-secondary",
  ready: "bg-success",
  delivering: "bg-secondary",
  completed: "bg-success",
};

export function StatusDot({ status, className = "", ...props }: StatusDotProps) {
  return (
    <span
      className={`inline-block h-2 w-2 shrink-0 rounded-full ${statusColors[status]} ${className}`}
      {...props}
    />
  );
}