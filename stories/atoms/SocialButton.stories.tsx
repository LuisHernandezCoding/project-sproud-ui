import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialButton from '../../atoms/SocialButton';

export default {
  title: 'Generated/Atoms/SocialButton',
  component: SocialButton,
} as ComponentMeta<typeof SocialButton>;

const Template: ComponentStory<typeof SocialButton> = (args) => <SocialButton {...args} />;

export const Default = Template.bind({});
Default.args = { provider: 'google', children: 'Continue with Google' } as any;
