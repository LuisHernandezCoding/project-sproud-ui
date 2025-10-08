import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sparkline from '../../atoms/Sparkline';

export default {
  title: 'Generated/Atoms/Sparkline',
  component: Sparkline,
} as ComponentMeta<typeof Sparkline>;

const Template: ComponentStory<typeof Sparkline> = (args) => <Sparkline {...args} />;

export const Default = Template.bind({});
Default.args = { values: [1,2,3,2,4,3] } as any;
