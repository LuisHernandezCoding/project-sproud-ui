import React from 'react';
import Logs from '../../../pages/Logs.tsx';

export default {
  title: 'Generated/Others/Logs',
  component: Logs,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <Logs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
