import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import H4 from '../../atoms/H4';

export default {
  title: 'Generated/Atoms/H4',
  component: H4,
} as ComponentMeta<typeof H4>;

const Template: ComponentStory<typeof H4> = (args) => <H4 {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Heading 4' };
