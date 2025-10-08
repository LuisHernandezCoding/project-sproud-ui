import React from 'react';
import OnboardingCard from '../../molecules/OnboardingCard.tsx';

export default {
  title: 'Generated/Molecules/OnboardingCard',
  component: OnboardingCard,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <OnboardingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
