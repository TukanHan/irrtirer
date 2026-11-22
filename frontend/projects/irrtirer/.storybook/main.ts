import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@analogjs/storybook-angular';
import { mergeConfig } from 'vite';

const storybookDirectory = dirname(fileURLToPath(import.meta.url));
const designSystemDirectory = resolve(storybookDirectory, '../../irr-design-system');

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../../irr-design-system/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
                    'irr-design-system/core': resolve(designSystemDirectory, 'core/public-api.ts'),
                    'irr-design-system/action': resolve(designSystemDirectory, 'action/public-api.ts'),
                    'irr-design-system/tooltip': resolve(designSystemDirectory, 'tooltip/public-api.ts'),
                    'irr-design-system': resolve(designSystemDirectory, 'src/public-api.ts'),
                },
            },
        }),
};
export default config;
