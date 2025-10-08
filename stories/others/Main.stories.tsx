import React from 'react';
import Main from '../../../main.tsx';

export default {
  title: 'Generated/Others/Main',
  component: Main,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Main {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
