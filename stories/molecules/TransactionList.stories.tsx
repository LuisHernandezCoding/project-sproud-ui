import React from 'react';
import TransactionList from '../../molecules/TransactionList.tsx';

export default {
  title: 'Generated/Molecules/TransactionList',
  component: TransactionList,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <TransactionList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
