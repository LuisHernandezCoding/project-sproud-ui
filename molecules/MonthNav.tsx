import React from 'react';

export default function MonthNav({ month = 'January 2025' }: { month?: string }): React.ReactElement {
  return (
    <div className="flex items-center space-x-2">
      <button className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50" aria-label="previous month">‹</button>
      <div className="px-4 py-2 bg-neutral-100 rounded-lg">
        <span className="text-neutral-900">{month}</span>
      </div>
      <button className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50" aria-label="next month">›</button>
    </div>
  );
}
