export default function Spinner({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | number;
}) {
  const sizeClass =
    typeof size === "number"
      ? `w-[${size}px] h-[${size}px]`
      : size === "sm"
        ? "w-4 h-4"
        : size === "lg"
          ? "w-6 h-6"
          : "w-5 h-5";
  const classes = ["animate-spin", sizeClass, className]
    .filter(Boolean)
    .join(" ");
  return (
    <svg className={classes} viewBox="0 0 24 24" aria-hidden="true">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
