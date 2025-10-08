type Props = {
  percent: number;
  className?: string;
  height?: number;
  bgColor?: string;
};

export default function ProgressBar({
  percent,
  className = "",
  height = 8,
  bgColor = "bg-gray-500",
}: Props) {
  const safe = Math.max(0, Math.min(100, percent));
  return (
    <div className={["w-full bg-gray-200 rounded-full", className].join(" ")} style={{ height }}>
      <div className={[bgColor, "h-full rounded-full"].join(" ")} style={{ width: `${safe}%` }} />
    </div>
  );
}
