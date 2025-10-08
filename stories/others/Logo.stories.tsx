import React from 'react';
import Logo from '../../Logo.tsx';

export default {
  title: 'Generated/Others/Logo',
  component: Logo,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
