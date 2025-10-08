import React from "react";

export default function P({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={["text-base text-gray-700", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </p>
  );
}
