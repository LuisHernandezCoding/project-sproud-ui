import React from 'react';
import SearchBar from '../../molecules/SearchBar.tsx';

export default {
  title: 'Generated/Molecules/SearchBar',
  component: SearchBar,
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
