import React from "react";
import { clsx } from "clsx";

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  brand?: React.ReactNode;
  position?: "fixed" | "sticky" | "relative";
}

export default function Navbar({ 
  children, 
  className = "", 
  brand,
  position = "relative"
}: NavbarProps) {
  return (
    <nav 
      className={clsx(
        "w-full bg-white border-b border-gray-200 shadow-sm",
        position === "fixed" && "fixed top-0 left-0 right-0 z-50",
        position === "sticky" && "sticky top-0 z-40",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {brand && (
            <div className="flex-shrink-0">
              {brand}
            </div>
          )}
          <div className="flex items-center space-x-4">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
}