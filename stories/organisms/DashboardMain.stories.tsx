import React from 'react';
import DashboardMain from '../../organisms/DashboardMain.tsx';

export default {
  title: 'Generated/Organisms/DashboardMain',
  component: DashboardMain,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <DashboardMain {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
