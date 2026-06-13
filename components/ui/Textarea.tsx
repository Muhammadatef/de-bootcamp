import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-[10px] border border-border-subtle bg-bg-elevated px-4 py-3 text-[15px] leading-relaxed text-text-primary transition-colors placeholder:text-text-muted focus:border-cyan focus:outline-none focus:ring-[3px] focus:ring-cyan/20",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
