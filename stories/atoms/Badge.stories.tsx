import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Badge from '../../atoms/Badge';

export default {
  title: 'Generated/Atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = { children: '4' };

export const Label = Template.bind({});
Label.args = { children: 'Beta' };
