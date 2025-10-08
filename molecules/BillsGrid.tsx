// Presentational molecule — no top-level React import required in modern JSX setup

type Bill = { name: string; due: string; amount: string; date: string };

export default function BillsGrid({
  items = [],
  className = "",
}: {
  items?: Bill[];
  className?: string;
}) {
  return (
    <div className={className + " grid grid-cols-1 md:grid-cols-3 gap-4"}>
      {items.map((b) => (
        <div key={b.name} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-900">{b.name}</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              {b.due}
            </span>
          </div>
          <p className="text-2xl text-gray-900">{b.amount}</p>
          <p className="text-sm text-gray-500">{b.date}</p>
        </div>
      ))}
    </div>
  );
}
