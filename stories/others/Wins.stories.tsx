import React from 'react';
import Wins from '../../../pages/Wins.tsx';

export default {
  title: 'Generated/Others/Wins',
  component: Wins,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Wins {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
