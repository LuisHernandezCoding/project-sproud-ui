import React from 'react';
import Login from '../../../pages/Login.tsx';

export default {
  title: 'Generated/Others/Login',
  component: Login,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
