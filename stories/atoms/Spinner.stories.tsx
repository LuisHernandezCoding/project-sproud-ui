import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spinner from '../../atoms/Spinner';

export default {
  title: 'Generated/Atoms/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = { size: 16 } as any;
