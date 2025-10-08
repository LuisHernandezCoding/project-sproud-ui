import React from "react";
import { clsx } from "clsx";

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
  return (
    <input 
      className={clsx(
        "block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2",
        variant === "dark" 
          ? "bg-transparent text-white placeholder-gray-400" 
          : "bg-white text-gray-900 placeholder-neutral-400",
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-neutral-200 focus:ring-blue-500",
        className
      )} 
      {...rest} 
    />
  );
}
