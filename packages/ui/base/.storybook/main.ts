import type { StorybookConfig } from '@storybook/nextjs';
import { join, dirname } from "path";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/**
 * Synchronously resolve the absolute path of a package.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {}
  },
  staticDirs: ['../public'], //이미지 

};

export default config;

