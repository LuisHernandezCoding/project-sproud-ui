import React from "react";

type FooterProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

export default function FooterAtom({ children, className = "", ...rest }: FooterProps) {
  return (
    <footer
      {...rest}
      className={`bg-white border-t border-gray-200 p-6 ${className}`}
    >
      {children}
    </footer>
  );
}
