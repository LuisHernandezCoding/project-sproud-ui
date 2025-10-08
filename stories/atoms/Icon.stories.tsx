import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from '../../atoms/Icon';

export default {
  title: 'Generated/Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { name: 'check', size: 16 };
