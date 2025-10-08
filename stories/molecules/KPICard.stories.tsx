import React from 'react';
import KPICard from '../../molecules/KPICard.tsx';

export default {
  title: 'Generated/Molecules/KPICard',
  component: KPICard,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <KPICard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
