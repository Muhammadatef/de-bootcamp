import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-subtle bg-bg-surface p-7 transition-all duration-200",
        hover && "hover:-translate-y-0.5 hover:border-cyan/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
