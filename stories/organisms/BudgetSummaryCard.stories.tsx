import React from 'react';
import BudgetSummaryCard from '../../organisms/BudgetSummaryCard.tsx';

export default {
  title: 'Generated/Organisms/BudgetSummaryCard',
  component: BudgetSummaryCard,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <BudgetSummaryCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
