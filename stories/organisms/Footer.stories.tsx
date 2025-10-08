import React from 'react';
import Footer from '../../organisms/Footer.tsx';

export default {
  title: 'Generated/Organisms/Footer',
  component: Footer,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
