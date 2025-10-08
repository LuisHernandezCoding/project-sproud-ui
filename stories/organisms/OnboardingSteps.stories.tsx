import React from 'react';
import OnboardingSteps from '../../organisms/OnboardingSteps.tsx';

export default {
  title: 'Generated/Organisms/OnboardingSteps',
  component: OnboardingSteps,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <OnboardingSteps {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
