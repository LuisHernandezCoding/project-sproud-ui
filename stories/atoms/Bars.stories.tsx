import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Bars from '../../atoms/Bars';

export default {
  title: 'Generated/Atoms/Bars',
  component: Bars,
} as ComponentMeta<typeof Bars>;

const Template: ComponentStory<typeof Bars> = (args) => <Bars {...args} />;

export const Default = Template.bind({});
Default.args = { values: [10, 20, 5, 12] };
