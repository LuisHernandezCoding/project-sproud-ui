import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** raw numeric value (in minor units) - optional */
  value?: number | string;
  /** visually hide currency symbol for accessibility control */
  currency?: string;
};

export default function Money({ children, className = "", currency = "$", value }: Props) {
  // If a numeric value is provided we could format it here. For now prefer
  // consumers to pass formatted strings; keep this component minimal and
  // focused on semantics and styling.
  const content = value !== undefined ? value : children;

  return (
    <span className={["font-medium", className].filter(Boolean).join(" ")}
      role="text"
      aria-label={typeof content === "string" ? content : undefined}
    >
      {currency}
      {content}
    </span>
  );
}
