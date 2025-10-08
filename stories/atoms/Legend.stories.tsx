import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Legend from '../../atoms/Legend';

export default {
  title: 'Generated/Atoms/Legend',
  component: Legend,
} as ComponentMeta<typeof Legend>;

const Template: ComponentStory<typeof Legend> = (args) => <Legend {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Legend text' };
