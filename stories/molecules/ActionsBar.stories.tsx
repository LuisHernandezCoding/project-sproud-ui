import React from 'react';
import ActionsBar from '../../molecules/ActionsBar.tsx';

export default {
  title: 'Generated/Molecules/ActionsBar',
  component: ActionsBar,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <ActionsBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
