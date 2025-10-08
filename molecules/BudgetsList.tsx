// Presentational molecule — no top-level React import required in modern JSX setup

type Budget = { name: string; amount: string; note?: string };

export default function BudgetsList({
  items = [],
  className = "",
}: {
  items?: Budget[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((b) => (
        <div
          key={b.name}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
        >
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-500 rounded-full" />
            <span className="text-gray-900">{b.name}</span>
          </div>
          <div className="text-right">
            <span className="text-gray-600">{b.amount}</span>
            <p className="text-xs text-gray-500">{b.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
