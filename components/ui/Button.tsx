"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  pulse?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-bg-primary text-base px-8 py-3.5 hover:opacity-90 hover:-translate-y-px",
  ghost:
    "bg-transparent text-text-secondary text-sm px-6 py-3 border border-border-subtle hover:border-cyan hover:text-cyan",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", pulse = false, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], pulse && "animate-pulse-ring", className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
