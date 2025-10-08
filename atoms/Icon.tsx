type Props = {
  className?: string;
  /** Human-readable title for assistive tech. If omitted the icon is decorative */
  title?: string;
  /** When true forces the icon to be treated as decorative */
  decorative?: boolean;
  children?: React.ReactNode;
  /** size can be 'sm' | 'md' | 'lg' or a number (pixels) */
  size?: "sm" | "md" | "lg" | number;
  /** Optional name to render a named icon from the shared icon library */
  name?: string;
};

import icons from "../icons/library";

export default function Icon({
  className = "",
  title,
  decorative,
  children,
  size = "md",
  name,
}: Props) {
  const isDecorative = decorative ?? !title;

  const sizeClass =
    typeof size === "number"
      ? `w-[${size}px] h-[${size}px]`
      : size === "sm"
        ? "w-4 h-4"
        : size === "lg"
          ? "w-6 h-6"
          : "w-5 h-5";

  // If consumers pass custom children (often an inline SVG), prefer rendering
  // the children but surface the same a11y contract: aria-hidden when
  // decorative, otherwise present as role=img with an accessible name.
  if (children)
    return (
      <span
        className={[sizeClass, className].filter(Boolean).join(" ")}
        {...(isDecorative
          ? { "aria-hidden": true }
          : { role: "img", "aria-label": title })}
      >
        {children}
      </span>
    );
  // If a named icon is requested and exists in the shared mapping, render it.
  if (name) {
    const IconComp = icons[name];
    if (IconComp) {
      // Phosphor icons accept a numeric `size` prop in px; map our semantic
      // sizes to pixels.
      const pxSize =
        typeof size === "number"
          ? size
          : size === "sm"
            ? 16
            : size === "lg"
              ? 24
              : 20;
      type IconProps = { size?: number; className?: string };
      const Comp = IconComp as React.ComponentType<IconProps>;
      return (
        <Comp
          size={pxSize}
          className={className}
          {...(isDecorative
            ? { "aria-hidden": true }
            : { role: "img", "aria-label": title })}
        />
      );
    }
  }

  return (
    <svg
      className={[sizeClass, className].filter(Boolean).join(" ")}
      {...(isDecorative ? { "aria-hidden": true } : { role: "img" })}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.12" />
    </svg>
  );
}
