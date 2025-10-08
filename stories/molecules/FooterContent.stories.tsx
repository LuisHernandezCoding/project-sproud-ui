import React from 'react';
import FooterContent from '../../molecules/FooterContent.tsx';

export default {
  title: 'Generated/Molecules/FooterContent',
  component: FooterContent,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <FooterContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
