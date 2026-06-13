import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  id: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-text-secondary"
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 accent-cyan"
          {...props}
        />
        <span>{label}</span>
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";
