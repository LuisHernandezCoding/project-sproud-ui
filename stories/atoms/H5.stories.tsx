import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import H5 from '../../atoms/H5';

export default {
  title: 'Generated/Atoms/H5',
  component: H5,
} as ComponentMeta<typeof H5>;

const Template: ComponentStory<typeof H5> = (args) => <H5 {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Heading 5' };
