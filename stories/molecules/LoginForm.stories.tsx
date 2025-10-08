import React from 'react';
import LoginForm from '../../molecules/LoginForm.tsx';

export default {
  title: 'Generated/Molecules/LoginForm',
  component: LoginForm,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
