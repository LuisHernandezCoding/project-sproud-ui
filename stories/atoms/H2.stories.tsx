import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import H2 from '../../atoms/H2';

export default {
  title: 'Generated/Atoms/H2',
  component: H2,
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Heading 2' };
