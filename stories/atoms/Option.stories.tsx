import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Option from '../../atoms/Option';

export default {
  title: 'Generated/Atoms/Option',
  component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

export const Default = Template.bind({});
Default.args = { value: '1', children: 'One' };
