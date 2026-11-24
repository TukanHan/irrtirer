import type { StorybookConfig } from '@analogjs/storybook-angular';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../../irr-design-system/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-themes'],
    framework: {
        name: '@analogjs/storybook-angular',
        options: {},
    },
    staticDirs: [{ from: '../src/assets/i18n', to: 'assets/i18n' }],
    viteFinal: async (viteConfig) => mergeConfig(viteConfig, { resolve: { tsconfigPaths: true } }),
};
export default config;
