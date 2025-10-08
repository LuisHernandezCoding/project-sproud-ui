import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  // Keep Card minimal and layout-agnostic: only provide the rounded corner by
  // default so pages can opt into exact spacing, borders and shadows like the
  // HTML snapshot. This keeps the atom flexible and prevents duplicated
  // paddings when callers already pass padding classes.
  const classes = ["rounded-lg", className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
