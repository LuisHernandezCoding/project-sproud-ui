import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Section from '../../atoms/Section';

export default {
  title: 'Generated/Atoms/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Section content' };
