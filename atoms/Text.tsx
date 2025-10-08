import React from "react";

export function Heading({
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

export default function Text({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={["text-base text-gray-900", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </p>
  );
}
