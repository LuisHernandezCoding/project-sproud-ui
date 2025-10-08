type Props = {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | number;
  className?: string;
};

export default function Avatar({
  src,
  alt = "avatar",
  size = "md",
  className = "",
}: Props) {
  const sizeClass =
    typeof size === "number"
      ? `w-[${size}px] h-[${size}px]`
      : size === "sm"
        ? "w-6 h-6"
        : size === "lg"
          ? "w-12 h-12"
          : "w-8 h-8";

  return (
    <img
      src={src}
      alt={alt}
      className={["rounded-full object-cover", sizeClass, className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
