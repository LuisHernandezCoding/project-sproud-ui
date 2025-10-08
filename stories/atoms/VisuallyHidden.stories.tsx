import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import VisuallyHidden from '../../atoms/VisuallyHidden';

export default {
  title: 'Generated/Atoms/VisuallyHidden',
  component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

const Template: ComponentStory<typeof VisuallyHidden> = (args) => <VisuallyHidden {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Hidden label' };
