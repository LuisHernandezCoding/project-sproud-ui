import React from 'react';
import BudgetCard from '../../molecules/BudgetCard.tsx';

export default {
  title: 'Generated/Molecules/BudgetCard',
  component: BudgetCard,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <BudgetCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
