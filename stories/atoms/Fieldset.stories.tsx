import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Fieldset from '../../atoms/Fieldset';

export default {
  title: 'Generated/Atoms/Fieldset',
  component: Fieldset,
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = (args) => <Fieldset {...args} />;

export const Default = Template.bind({});
Default.args = { children: <div><legend>Settings</legend><div style={{padding:8}}>Fields here</div></div> };
