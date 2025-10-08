import React from "react";

export default function Label({
  children,
  htmlFor,
  className = "",
}: {
  children?: React.ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  const classes = ["block text-sm font-medium text-gray-700", className]
    .filter(Boolean)
    .join(" ");
  return (
    <label htmlFor={htmlFor} className={classes}>
      {children}
    </label>
  );
}
