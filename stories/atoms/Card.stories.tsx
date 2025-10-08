import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '../../atoms/Card';

export default {
  title: 'Generated/Atoms/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { children: <div style={{padding:16}}>Card content</div> };
