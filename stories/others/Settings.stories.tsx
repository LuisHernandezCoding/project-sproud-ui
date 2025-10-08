import React from 'react';
import Settings from '../../../pages/Settings.tsx';

export default {
  title: 'Generated/Others/Settings',
  component: Settings,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Settings {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
