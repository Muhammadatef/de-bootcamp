import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "cyan" | "violet" | "amber" | "red" | "green";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  cyan: "bg-cyan/10 text-cyan border-cyan/30",
  violet: "bg-violet/10 text-violet border-violet/30",
  amber: "bg-amber/10 text-amber border-amber/30",
  red: "bg-red/10 text-red border-red/30",
  green: "bg-green/10 text-green border-green/30",
};

export function Badge({ variant = "cyan", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-[3px] font-mono text-[10px] uppercase tracking-[2px]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
