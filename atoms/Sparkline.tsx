type Props = {
  data?: number[];
  className?: string;
  color?: string;
  height?: number;
};

// Very small, dependency-free sparkline using SVG. Sized to fit inline in cards.
export default function Sparkline({
  data = [2, 6, 4, 8, 5, 9],
  className = "",
  color = "currentColor",
  height = 32,
}: Props) {
  const w = 120;
  const h = height;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / (max - min || 1)) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
