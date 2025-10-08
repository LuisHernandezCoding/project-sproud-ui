import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from '../../atoms/Label';

export default {
  title: 'Generated/Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Email' };
