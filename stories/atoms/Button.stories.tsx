import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../../atoms/Button';

export default {
  title: 'Generated/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Secondary', variant: 'secondary' };

export const Ghost = Template.bind({});
Ghost.args = { children: 'Ghost', variant: 'ghost' };

export const Destructive = Template.bind({});
Destructive.args = { children: 'Delete', variant: 'destructive' };

export const Loading = Template.bind({});
Loading.args = { children: 'Loading', loading: true };

export const Sizes: ComponentStory<typeof Button> = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
