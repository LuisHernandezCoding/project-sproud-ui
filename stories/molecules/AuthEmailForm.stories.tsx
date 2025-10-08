import React from 'react';
import AuthEmailForm from '../../molecules/AuthEmailForm.tsx';

export default {
  title: 'Generated/Molecules/AuthEmailForm',
  component: AuthEmailForm,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <AuthEmailForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
