import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@analogjs/storybook-angular';
import { mergeConfig } from 'vite';

const storybookDirectory = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../../irr-design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-themes'],
    framework: {
        name: '@analogjs/storybook-angular',
        options: {},
    },
    staticDirs: [{ from: '../src/assets/i18n', to: 'assets/i18n' }],
    viteFinal: async (viteConfig) =>
        mergeConfig(viteConfig, {
            resolve: {
                alias: {
                    'irr-design-system': resolve(storybookDirectory, '../../irr-design-system/src/public-api.ts'),
                },
            },
        }),
};
export default config;
