import React from "react";

type Props = {
  variant?: "success" | "error" | "info";
  children: React.ReactNode;
  className?: string;
};

export default function Alert({
  variant = "info",
  children,
  className = "",
}: Props) {
  const map = {
    success: {
      bg: "bg-accent bg-opacity-10",
      border: "border-accent",
      text: "text-accent",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
    },
    info: {
      bg: "bg-supporting",
      border: "border-border",
      text: "text-gray-700",
    },
  } as const;

  const styles = map[variant];

  return (
    <div className={["px-3 py-2 rounded text-sm flex items-center", styles.bg, styles.border, styles.text, className]
      .filter(Boolean)
      .join(" ")}
    >
      <span className="mr-2" aria-hidden>
        {variant === "success" ? (
          <svg className="w-4 h-4" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        ) : variant === "error" ? (
          <svg className="w-4 h-4" viewBox="0 0 512 512" fill="currentColor"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" opacity="0.12"/></svg>
        )}
      </span>
      <span>{children}</span>
    </div>
  );
}
