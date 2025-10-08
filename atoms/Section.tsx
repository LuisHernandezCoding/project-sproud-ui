import React from "react";

export default function Section({
  children,
  className = "",
  "aria-labelledby": ariaLabelledBy,
  role = "region",
}: {
  children?: React.ReactNode;
  className?: string;
  "aria-labelledby"?: string;
  role?: string;
}) {
  const classes = [className].filter(Boolean).join(" ");
  return (
    <section className={classes} role={role} aria-labelledby={ariaLabelledBy}>
      {children}
    </section>
  );
}
