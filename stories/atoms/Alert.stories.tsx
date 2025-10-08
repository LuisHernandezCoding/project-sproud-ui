import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Alert from '../../atoms/Alert';

export default {
  title: 'Generated/Atoms/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = { children: 'This is an info alert', variant: 'info' };

export const Success = Template.bind({});
Success.args = { children: 'Operation succeeded', variant: 'success' };

export const Error = Template.bind({});
Error.args = { children: 'This is an error', variant: 'error' };
