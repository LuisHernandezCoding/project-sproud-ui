type Props = {
  text?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export default function Separator({
  text = "Or",
  orientation = "vertical",
  className = "",
}: Props) {
  if (orientation === "horizontal") {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="flex-1 h-px bg-slate-200" />
        <div className="px-3 text-sm text-slate-500">{text}</div>
        <div className="flex-1 h-px bg-slate-200" />
      </div>
    );
  }

  // vertical: stacked with a small gap
  return (
    <div className={`flex flex-col items-center my-4 ${className}`} aria-hidden>
      <div className="w-full h-px bg-slate-200" />
      <div className="py-2 text-sm text-slate-500">{text}</div>
      <div className="w-full h-px bg-slate-200" />
    </div>
  );
}
