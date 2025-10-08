import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "underline" | "muted" | "primary";
};

export default function Link({
  variant = "underline",
  className = "",
  children,
  ...rest
}: Props) {
  const variantClass =
    variant === "primary"
      ? "text-gray-400 hover:underline"
      : variant === "muted"
        ? "text-gray-800"
        : "underline";

  return (
    <a className={`${variantClass} ${className}`} {...rest}>
      {children}
    </a>
  );
}
