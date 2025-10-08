import React from 'react';
import Dashboard from '../../../pages/Dashboard.tsx';

export default {
  title: 'Generated/Others/Dashboard',
  component: Dashboard,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Dashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
