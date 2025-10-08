import React from 'react';
import Header from '../../organisms/Header.tsx';

export default {
  title: 'Generated/Organisms/Header',
  component: Header,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
