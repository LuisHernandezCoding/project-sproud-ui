import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from '../../atoms/Link';

export default {
  title: 'Generated/Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { href: '#', children: 'Click here' };
