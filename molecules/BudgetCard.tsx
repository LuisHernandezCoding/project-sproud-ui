import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  spent: string;
  budget: string;
  pct?: number;
};

export default function BudgetCard({ title, subtitle, spent, budget, pct = 0 }: Props): React.ReactElement {
  const spentNum = Number(String(spent).replace(/[^0-9.-]+/g, '')) || 0;
  const budgetNum = Number(String(budget).replace(/[^0-9.-]+/g, '')) || 0;
  const diff = Math.round(Math.abs(budgetNum - spentNum));
  const direction = spentNum > budgetNum ? 'over' : 'left';
  const pctRounded = Math.round(pct);

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center" />
        <div>
          <h3 className="text-neutral-900">{title}</h3>
          {subtitle ? <p className="text-sm text-neutral-600">{subtitle}</p> : null}
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-neutral-600">Spent</span>
          <span className="text-neutral-900">{spent}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-neutral-600">Budget</span>
          <span className="text-neutral-900">{budget}</span>
        </div>
      </div>
      <div className="w-full bg-neutral-100 rounded-full h-2 mb-2">
        <div className="bg-neutral-600 h-2 rounded-full" style={{ width: `${Math.min(pctRounded, 100)}%` }} />
      </div>
      <div className="text-xs text-neutral-600">{pctRounded}% used • ${diff} {direction}</div>
    </div>
  );
}
