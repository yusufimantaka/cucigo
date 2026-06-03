"use client";

import { type InputHTMLAttributes, useId } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputField({ label, className = "", id, ...props }: InputFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-xs font-semibold uppercase tracking-wide text-muted font-body"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full rounded-xl border border-border bg-surface px-4 py-3 min-h-[48px] text-base text-fg font-body outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30 ${className}`}
        {...props}
      />
    </div>
  );
}