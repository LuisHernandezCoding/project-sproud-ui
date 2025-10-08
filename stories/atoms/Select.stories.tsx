import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from '../../atoms/Select';

export default {
  title: 'Generated/Atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = { children: [<option key="1" value="1">One</option>, <option key="2" value="2">Two</option>] };
