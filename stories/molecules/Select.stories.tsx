import React from 'react';
import Select from '../../molecules/Select.tsx';

export default {
  title: 'Generated/Molecules/Select',
  component: Select,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
