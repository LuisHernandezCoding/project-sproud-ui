import React from 'react';
import OnboardingStepper from '../../organisms/OnboardingStepper.tsx';

export default {
  title: 'Generated/Organisms/OnboardingStepper',
  component: OnboardingStepper,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <OnboardingStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
