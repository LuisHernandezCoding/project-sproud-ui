import React from 'react';
import BudgetCard from './BudgetCard';

type Item = { title: string; subtitle?: string; spent: string; budget: string; pct?: number };

export default function BudgetsGrid({ items }: { items: Item[] }): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <BudgetCard key={it.title} title={it.title} subtitle={it.subtitle} spent={it.spent} budget={it.budget} pct={it.pct} />
      ))}
    </div>
  );
}
