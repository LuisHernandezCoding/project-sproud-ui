import React from 'react';
import BudgetsList from '../../molecules/BudgetsList.tsx';

export default {
  title: 'Generated/Molecules/BudgetsList',
  component: BudgetsList,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <BudgetsList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
