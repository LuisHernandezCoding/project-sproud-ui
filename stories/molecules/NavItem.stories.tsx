import React from 'react';
import NavItem from '../../molecules/NavItem.tsx';

export default {
  title: 'Generated/Molecules/NavItem',
  component: NavItem,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <NavItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
