import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar from '../../atoms/ProgressBar';

export default {
  title: 'Generated/Atoms/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = { percent: 40 };
