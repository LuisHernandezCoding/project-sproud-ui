import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import P from '../../atoms/P';

export default {
  title: 'Generated/Atoms/P',
  component: P,
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'This is a paragraph.' };
