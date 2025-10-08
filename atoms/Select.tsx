import React from "react";
import Label from "./Label";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
  label?: React.ReactNode;
  id?: string;
};

export default function Select({
  error = false,
  className = "",
  children,
  label,
  id,
  ...rest
}: Props) {
  const reactId = React.useId?.() ?? undefined;
  const resolvedId = id ?? reactId;
  const classes = [
    "block w-full rounded-md border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2",
    error
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-600 focus:ring-gray-500",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      {label ? (
        <Label
          htmlFor={resolvedId}
          className="block text-sm font-medium text-gray-800 mb-1"
        >
          {label}
        </Label>
      ) : null}
      <select id={resolvedId} className={classes} {...rest}>
        {children}
      </select>
    </div>
  );
}
