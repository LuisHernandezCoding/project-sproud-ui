import React from 'react';
import Library from '../../icons/library.tsx';

export default {
  title: 'Generated/Others/Library',
  component: Library,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Library {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
