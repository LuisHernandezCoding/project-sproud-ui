import React from 'react';
import ProgressStepper from '../../molecules/ProgressStepper.tsx';

export default {
  title: 'Generated/Molecules/ProgressStepper',
  component: ProgressStepper,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <ProgressStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
