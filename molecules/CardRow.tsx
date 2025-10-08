import React from "react";

type Props = {
  color?: string;
  title: React.ReactNode;
  amount: React.ReactNode;
  hint?: React.ReactNode;
};

export default function CardRow({
  color = "#6366F1",
  title,
  amount,
  hint,
}: Props) {
  return (
    <div className="flex items-center justify-between p-3 bg-transparent rounded-lg border border-neutral-200">
      <div className="flex items-center space-x-3">
        <div style={{ background: color }} className="w-3 h-3 rounded-full" />
        <span className="text-sm text-gray-800">{title}</span>
      </div>
      <div className="text-right">
        <div className="text-base font-medium">{amount}</div>
        {hint ? <div className="text-xs text-gray-600">{hint}</div> : null}
      </div>
    </div>
  );
}
