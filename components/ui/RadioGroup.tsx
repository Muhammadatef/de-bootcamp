import { type InputHTMLAttributes } from "react";

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
 * onto this component; it forwards those props to every radio input. The
 * submitted value is the canonical `value`, while the localized `label` shows.
 */
export function RadioGroup({ options, name, ...registration }: RadioGroupProps) {
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
