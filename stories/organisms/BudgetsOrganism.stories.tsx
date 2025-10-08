import React from 'react';
import BudgetsOrganism from '../../organisms/BudgetsOrganism.tsx';

export default {
  title: 'Generated/Organisms/BudgetsOrganism',
  component: BudgetsOrganism,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <BudgetsOrganism {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
