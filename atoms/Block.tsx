import React from "react";

export default function Block({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={["", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
}
