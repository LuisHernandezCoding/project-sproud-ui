import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Form from '../../atoms/Form';

export default {
  title: 'Generated/Atoms/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = { children: <div style={{padding:8}}>Form fields</div> };
