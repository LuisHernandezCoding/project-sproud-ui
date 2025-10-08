import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from '../../atoms/Radio';

export default {
  title: 'Generated/Atoms/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = { checked: false };
