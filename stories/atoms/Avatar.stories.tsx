import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../../atoms/Avatar';

export default {
  title: 'Generated/Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = { alt: 'Ada Lovelace', src: '' };

export const WithImage = Template.bind({});
WithImage.args = { alt: 'User', src: 'https://via.placeholder.com/40' };
