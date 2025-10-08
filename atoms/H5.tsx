import React from "react";

export default function H5({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h5
      className={["text-lg font-semibold text-gray-900", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </h5>
  );
}
