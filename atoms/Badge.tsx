import React from "react";

type Props = {
  children?: React.ReactNode;
  tone?: "default" | "success" | "danger" | "muted" | "light";
  className?: string;
};

export default function Badge({
  children,
  tone = "default",
  className = "",
}: Props) {
  const toneClasses: Record<string, string> = {
    default: "bg-gray-700 text-white",
    success: "bg-green-600 text-white",
    danger: "bg-red-600 text-white",
    // muted should be low-contrast neutral, used in header filters
    muted: "bg-neutral-100 text-gray-700 border border-neutral-200",
    // light is a chip style used in the snapshot (rounded-full)
    light: "bg-white text-gray-700 border border-neutral-200 rounded-full",
  };
  const classes = [
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
    toneClasses[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
