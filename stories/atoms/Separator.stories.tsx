import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Separator from '../../atoms/Separator';

export default {
  title: 'Generated/Atoms/Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => <Separator {...args} />;

export const Default = Template.bind({});
Default.args = {};
