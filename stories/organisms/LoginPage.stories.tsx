import React from 'react';
import LoginPage from '../../organisms/LoginPage.tsx';

export default {
  title: 'Generated/Organisms/LoginPage',
  component: LoginPage,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <LoginPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
