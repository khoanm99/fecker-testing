import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';
const config: StorybookConfig = {
  stories: [
    // '../stories/**/*.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../organisms/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true
      }
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
