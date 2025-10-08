import React from "react";

export default function Fieldset({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const classes = [className].filter(Boolean).join(" ");
  return <fieldset className={classes}>{children}</fieldset>;
}
