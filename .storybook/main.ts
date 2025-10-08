import type { StorybookConfig } from '@storybook/react-vite';
import autoStoryGenerator from '@takuma-ru/auto-story-generator';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  // staticDirs: use absolute path to the repo 'web/public' so Storybook finds static assets
  staticDirs: ['/Users/miguel/code/report-helper/web/public'],
  async viteFinal(config_: any) {
    return mergeConfig(config_, {
      plugins: [
        autoStoryGenerator.vite({
          preset: 'react',
          // Scan UI component folders to auto-generate stories
          imports: [
            '../atoms/**/*.tsx',
            '../molecules/**/*.tsx',
            '../organisms/**/*.tsx',
            // fallback: any tsx files in this package
            '../**/*.tsx',
          ],
          // Optional: customize generated story file naming if needed
        }),
      ],
      server: {
        // allow serving files from the project root (outside the ui package)
        fs: {
          allow: ['/Users/miguel/code/report-helper/web'],
        },
      },
      resolve: {
        alias: {
          // alias to import the repo's src folder from preview.ts
          '@repo-web-src': '/Users/miguel/code/report-helper/web/src',
        },
      },
    });
  },
};

export default config;
