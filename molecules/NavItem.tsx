import React from "react";

type Props = {
  to?: string;
  children?: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function NavItem({
  to = "#",
  children,
  active = false,
  icon,
  onClick,
  className = "",
}: Props) {
  const classes = [
    "flex items-center gap-3 px-3 py-2 rounded-md",
    active
      ? "bg-gray-600 text-white"
      : "text-gray-700 hover:bg-gray-100",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <a
      href={to}
      className={classes}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {icon ? <span className="h-5 w-5">{icon}</span> : null}
      <span>{children}</span>
    </a>
  );
}
