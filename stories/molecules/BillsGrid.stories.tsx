import React from 'react';
import BillsGrid from '../../molecules/BillsGrid.tsx';

export default {
  title: 'Generated/Molecules/BillsGrid',
  component: BillsGrid,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <BillsGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
