import React from 'react';
import FormField from '../../molecules/FormField.tsx';

export default {
  title: 'Generated/Molecules/FormField',
  component: FormField,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <FormField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
