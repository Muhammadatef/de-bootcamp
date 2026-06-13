import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-[10px] border border-border-subtle bg-bg-elevated px-4 py-3 text-[15px] text-text-primary transition-colors placeholder:text-text-muted focus:border-cyan focus:outline-none focus:ring-[3px] focus:ring-cyan/20";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={cn(inputClasses, className)} {...props} />;
  }
);
Input.displayName = "Input";

export { inputClasses };
