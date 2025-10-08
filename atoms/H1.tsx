import React from "react";

export default function H1({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={["text-4xl font-semibold text-gray-900", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </h1>
  );
}
