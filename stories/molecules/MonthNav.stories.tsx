import React from 'react';
import MonthNav from '../../molecules/MonthNav.tsx';

export default {
  title: 'Generated/Molecules/MonthNav',
  component: MonthNav,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <MonthNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
