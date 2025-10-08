type Props = {
  values?: number[];
  className?: string;
  color?: string;
  maxHeight?: number;
};

export default function Bars({
  values = [6, 3, 8, 5, 7],
  className = "",
  color = "currentColor",
  maxHeight = 36,
}: Props) {
  const max = Math.max(...values, 1);
  return (
    <div
      className={["flex items-end gap-1", className].filter(Boolean).join(" ")}
    >
      {values.map((v, i) => (
        <div
          key={i}
          style={{ height: `${(v / max) * maxHeight}px`, background: color }}
          className="w-2 rounded"
        />
      ))}
    </div>
  );
}
