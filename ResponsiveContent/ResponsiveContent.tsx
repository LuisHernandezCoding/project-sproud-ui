import React from "react";
import Spinner from "../atoms/Spinner";

type Props<T extends React.ElementType = "main"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  loading?: boolean;
  /** when true, don't constrain to the default max width (useful for full-bleed pages) */
  fluid?: boolean;
} & React.ComponentPropsWithoutRef<T>;

export default function ResponsiveContent<
  T extends React.ElementType = "main",
>({ as, className = "", children, loading, fluid = false, ...rest }: Props<T>) {
  const Component: React.ElementType = (as || "main") as React.ElementType;

  const classes = [
    // when fluid, avoid centering and max-width so consumers can render full-bleed content
    ...(fluid ? [] : ["mx-auto", "max-w-4xl"]),
    "w-full",
    "px-4",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="min-h-screen w-full min-w-[100vw]">
      {/* spread remaining props, typed to satisfy TS */}
      <Component
        className={classes}
        {...(rest as unknown as Record<string, unknown>)}
      >
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <Spinner size="lg" />
          </div>
        ) : (
          children
        )}
      </Component>
    </div>
  );
}
