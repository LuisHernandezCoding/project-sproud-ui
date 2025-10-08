import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '../../atoms/Input';

export default {
  title: 'Generated/Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { placeholder: 'Enter text', value: '' };

export const Password = Template.bind({});
Password.args = { placeholder: 'Password', type: 'password' };
