import React from 'react';
import Admin from '../../../pages/Admin.tsx';

export default {
  title: 'Generated/Others/Admin',
  component: Admin,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Admin {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
