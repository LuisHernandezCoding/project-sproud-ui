import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  // variant allows preserving the previous dark-styled input when needed.
  variant?: "default" | "dark";
};

export default function Input({
  error = false,
  variant = "default",
  className = "",
  ...rest
}: Props) {
  const base =
    variant === "dark"
      ? "block w-full rounded-md border bg-transparent px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2"
      : "block w-full rounded-md border bg-white px-3 py-2 text-gray-900 placeholder-neutral-400 focus:outline-none focus:ring-2";

  const classes = [
    base,
    error
      ? "border-red-500 focus:ring-red-500"
      : "border-neutral-200 focus:ring-gray-500",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <input className={classes} {...rest} />;
}
