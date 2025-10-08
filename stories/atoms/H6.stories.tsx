import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import H6 from '../../atoms/H6';

export default {
  title: 'Generated/Atoms/H6',
  component: H6,
} as ComponentMeta<typeof H6>;

const Template: ComponentStory<typeof H6> = (args) => <H6 {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Heading 6' };
