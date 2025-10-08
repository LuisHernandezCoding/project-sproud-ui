import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  provider: "google" | "github" | "apple" | string;
  children?: React.ReactNode;
};

const providerLabel: Record<string, string> = {
  google: "Google",
  github: "GitHub",
  apple: "Apple",
};

export default function SocialButton({
  provider,
  children,
  className = "",
  ...rest
}: Props) {
  const label = children ?? `Continue with ${providerLabel[provider] ?? provider}`;

  return (
    <button
      {...rest}
      className={[
        "w-full flex items-center justify-center gap-2 px-3 py-2 rounded text-sm border bg-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="w-4 h-4" aria-hidden>
        {/* Small generic provider svgs to keep bundle size small */}
        {provider === "google" ? (
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1H12v2.8h5.35c-.23 1.2-.92 2.2-1.96 2.86v2.38h3.16c1.86-1.71 2.96-4.24 2.96-7.04 0-.62-.06-1.22-.17-1.8z"/></svg>
        ) : provider === "github" ? (
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.2 10.1.53.1.72-.23.72-.5v-1.8c-2.92.64-3.53-1.42-3.53-1.42-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.92 1.58 2.42 1.13 3.01.86.1-.68.36-1.13.65-1.39-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.35.1-2.81 0 0 .88-.28 2.88 1.08a9.9 9.9 0 0 1 5.24 0c2-.36 2.88-1.08 2.88-1.08.57 1.46.21 2.54.1 2.81.67.73 1.08 1.67 1.08 2.82 0 4.04-2.47 4.93-4.82 5.19.37.32.7.96.7 1.94v2.88c0 .28.19.61.73.5 4.23-1.45 7.23-5.4 7.23-10.07C23.1 5.3 18.3.5 12 .5z"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor"><rect width="20" height="20" x="2" y="2" rx="4"/></svg>
        )}
      </span>
      <span>{label}</span>
    </button>
  );
}
