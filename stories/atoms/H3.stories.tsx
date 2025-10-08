import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import H3 from '../../atoms/H3';

export default {
  title: 'Generated/Atoms/H3',
  component: H3,
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Heading 3' };
