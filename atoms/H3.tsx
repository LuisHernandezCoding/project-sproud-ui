import React from "react";

export default function H3({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={["text-base font-semibold text-gray-900", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </h3>
  );
}
