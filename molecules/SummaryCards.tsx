import React from 'react';

type Item = { label: string; value: string };

export default function SummaryCards({ items }: { items: Item[] }): React.ReactElement {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label} className="text-center">
            <div className="text-2xl text-neutral-900">{it.value}</div>
            <div className="text-sm text-neutral-600">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
