import React from "react";
import { clsx } from "clsx";

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  padding?: boolean;
  shadow?: boolean;
}

export default function Card({
  children,
  className = "",
  padding = true,
  shadow = true,
}: CardProps) {
  return (
    <div 
      className={clsx(
        "rounded-lg bg-white border border-gray-200",
        padding && "p-6",
        shadow && "shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
