import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
};

export default function Checkbox({ label, className = "", ...rest }: Props) {
  const id = rest.id ?? undefined;

  return (
    <label
      className={`inline-flex items-center space-x-2 ${className}`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        {...rest}
        id={id}
        className="form-checkbox h-4 w-4"
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
