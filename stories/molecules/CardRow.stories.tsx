import React from 'react';
import CardRow from '../../molecules/CardRow.tsx';

export default {
  title: 'Generated/Molecules/CardRow',
  component: CardRow,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <CardRow {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
