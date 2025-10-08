import React from "react";

export default function H2({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={["text-2xl font-semibold text-gray-900", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </h2>
  );
}
