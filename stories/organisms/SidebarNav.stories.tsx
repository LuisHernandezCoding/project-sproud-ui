import React from 'react';
import SidebarNav from '../../organisms/SidebarNav.tsx';

export default {
  title: 'Generated/Organisms/SidebarNav',
  component: SidebarNav,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <SidebarNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
