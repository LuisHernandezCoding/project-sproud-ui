import React from 'react';
import BudgetsGrid from '../../molecules/BudgetsGrid.tsx';

export default {
  title: 'Generated/Molecules/BudgetsGrid',
  component: BudgetsGrid,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <BudgetsGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
