import React from 'react';
import Header from './Header';
import Footer from './Footer';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import SearchBar from '../molecules/SearchBar';
import SummaryCards from '../molecules/SummaryCards';
import MonthNav from '../molecules/MonthNav';
import ActionsBar from '../molecules/ActionsBar';
import BudgetsGrid from '../molecules/BudgetsGrid';

export default function BudgetsOrganism(): React.ReactElement {
  const summary = [
    { label: 'Total Budget', value: '$2,450' },
    { label: 'Total Spent', value: '$1,847' },
    { label: 'Remaining', value: '$603' },
    { label: 'Used', value: '75%' },
  ];

  const items = [
    { title: 'Groceries', subtitle: 'Food & Dining', spent: '$520', budget: '$500', pct: 104 },
    { title: 'Transportation', subtitle: 'Gas & Transit', spent: '$180', budget: '$250', pct: 72 },
    { title: 'Utilities', subtitle: 'Electric, Water, Gas', spent: '$145', budget: '$200', pct: 72.5 },
    { title: 'Entertainment', subtitle: 'Movies, Games', spent: '$185', budget: '$200', pct: 92.5 },
    { title: 'Shopping', subtitle: 'Clothes & Personal', spent: '$75', budget: '$150', pct: 50 },
    { title: 'Healthcare', subtitle: 'Medical & Wellness', spent: '$42', budget: '$100', pct: 42 },
  ];

  return (
    <div className="h-full text-base-content min-w-[100vw]">
      <Header />

      <main id="budgets-page" className="bg-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <H2 className="text-3xl text-gray-900 mb-2">Budget Overview</H2>
              <P className="text-gray-600 mt-1">Track your spending across categories</P>
            </div>

            <MonthNav month="January 2025" />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 max-w-md">
              <SearchBar placeholder="Search categories..." />
            </div>
            <div className="flex items-center space-x-3">
              <ActionsBar />
            </div>
          </div>

          <SummaryCards items={summary} />

          <BudgetsGrid items={items} />

          <div className="mt-8 text-center">
            <button className="px-6 py-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex items-center space-x-2 mx-auto">Add New Category</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
