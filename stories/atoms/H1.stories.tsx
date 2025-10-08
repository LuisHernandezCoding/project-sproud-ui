import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import H1 from '../../atoms/H1';

export default {
  title: 'Generated/Atoms/H1',
  component: H1,
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Heading 1' };
