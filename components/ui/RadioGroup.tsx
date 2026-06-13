import { forwardRef, type InputHTMLAttributes } from "react";

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  options: readonly Option[];
  name: string;
}

/**
 * Uncontrolled radio group. Spread react-hook-form's `register(name)` output
 * onto this component; it forwards those props (including the ref) to every
 * radio input. Must use forwardRef so RHF's ref actually attaches — otherwise
 * the field never registers and always validates as "required". The submitted
 * value is the canonical `value`, while the localized `label` shows.
 */
export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ options, name, ...registration }, ref) => {
    return (
      <div className="flex flex-col gap-2.5">
        {options.map((opt, i) => {
          const id = `${name}-${i}`;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className="flex cursor-pointer items-start gap-3 rounded-[10px] border border-border-subtle bg-bg-elevated px-4 py-3 text-[14px] text-text-secondary transition-colors hover:border-border has-[:checked]:border-cyan has-[:checked]:bg-cyan/5 has-[:checked]:text-text-primary"
            >
              <input
                ref={ref}
                id={id}
                type="radio"
                value={opt.value}
                name={name}
                {...registration}
                className="mt-0.5 h-4 w-4 shrink-0 accent-cyan"
              />
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";
