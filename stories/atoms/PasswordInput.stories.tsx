import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PasswordInput from '../../atoms/PasswordInput';

export default {
  title: 'Generated/Atoms/PasswordInput',
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = { placeholder: 'Enter password' };
