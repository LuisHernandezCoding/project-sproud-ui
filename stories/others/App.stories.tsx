import React from 'react';
import App from '../../../App.tsx';

export default {
  title: 'Generated/Others/App',
  component: App,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
