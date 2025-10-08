import React from "react";

type Props = {
  children?: React.ReactNode;
  tone?: "default" | "light" | "muted" | "success";
  className?: string;
};

export default function Chip({
  children,
  tone = "default",
  className = "",
}: Props) {
  const toneMap: Record<string, string> = {
    default: "bg-neutral-100 text-gray-800",
    light: "bg-white text-gray-700 border border-neutral-200",
    muted: "bg-neutral-50 text-gray-700 border border-neutral-200",
    success: "bg-green-100 text-green-700",
  };

  const classes = [
    "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full",
    toneMap[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
