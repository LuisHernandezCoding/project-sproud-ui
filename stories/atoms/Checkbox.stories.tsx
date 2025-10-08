import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from '../../atoms/Checkbox';

export default {
  title: 'Generated/Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = { checked: false };

export const Checked = Template.bind({});
Checked.args = { checked: true };
