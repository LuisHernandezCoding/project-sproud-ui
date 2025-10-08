import type { Preview } from '@storybook/react';

const preview: Preview & { tags?: string[] } = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
  },
  // Enable Autodocs for all stories
  tags: ['autodocs'],
};

export default preview;
