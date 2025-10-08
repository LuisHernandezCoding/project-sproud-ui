import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chip from '../../atoms/Chip';

export default {
  title: 'Generated/Atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Tag' };
