import React from "react";
import { clsx } from "clsx";

type Props = {
  children?: React.ReactNode;
  variant?: "default" | "success" | "danger" | "warning" | "muted";
  className?: string;
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: Props) {
  const variantClasses: Record<string, string> = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    muted: "bg-neutral-100 text-gray-600",
  };

  return (
    <span 
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
