import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
};

export default function Radio({ label, className = "", ...rest }: Props) {
  const id = rest.id ?? undefined;

  return (
    <label
      className={`inline-flex items-center space-x-2 text-gray-800 ${className}`}
      htmlFor={id}
    >
      <input type="radio" {...rest} id={id} className="form-radio h-4 w-4" />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
