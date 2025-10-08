import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Money from '../../atoms/Money';

export default {
  title: 'Generated/Atoms/Money',
  component: Money,
} as ComponentMeta<typeof Money>;

const Template: ComponentStory<typeof Money> = (args) => <Money {...args} />;

export const Default = Template.bind({});
Default.args = { value: 1234.5 };
