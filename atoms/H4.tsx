import React from "react";

export default function H4({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={["text-xl font-semibold text-gray-900", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </h4>
  );
}
