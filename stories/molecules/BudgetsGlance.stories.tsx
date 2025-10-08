import React from 'react';
import BudgetsGlance from '../../molecules/BudgetsGlance.tsx';

export default {
  title: 'Generated/Molecules/BudgetsGlance',
  component: BudgetsGlance,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <BudgetsGlance {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
