import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '../../atoms/Footer';

export default {
  title: 'Generated/Atoms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
