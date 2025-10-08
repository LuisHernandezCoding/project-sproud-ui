import React from 'react';
import Accounts from '../../../pages/Accounts.tsx';

export default {
  title: 'Generated/Others/Accounts',
  component: Accounts,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Accounts {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
