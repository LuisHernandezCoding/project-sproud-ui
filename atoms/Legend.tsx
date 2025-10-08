import React from "react";

export default function Legend({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const classes = [className].filter(Boolean).join(" ");
  return <legend className={classes}>{children}</legend>;
}
