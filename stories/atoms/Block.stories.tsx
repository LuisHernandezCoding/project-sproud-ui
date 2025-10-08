import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Block from '../../atoms/Block';

export default {
  title: 'Generated/Atoms/Block',
  component: Block,
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Block content' };

export const WithPadding = Template.bind({});
WithPadding.args = { children: 'Padded block', className: 'p-4 bg-gray-50' };
