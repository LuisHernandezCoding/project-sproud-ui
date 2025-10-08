import React from 'react';
import SummaryCards from '../../molecules/SummaryCards.tsx';

export default {
  title: 'Generated/Molecules/SummaryCards',
  component: SummaryCards,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <SummaryCards {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
