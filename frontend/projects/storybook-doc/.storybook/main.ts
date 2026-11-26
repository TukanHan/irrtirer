import type { StorybookConfig } from '@analogjs/storybook-angular';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../../irrtirer/src/**/*.mdx', '../../irrtirer/src/**/*.stories.ts', '../../irr-design-system/**/*.stories.ts'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-themes'],
    framework: {
        name: '@analogjs/storybook-angular',
        options: {},
    },
    staticDirs: [{ from: '../../irrtirer/src/assets/i18n', to: 'assets/i18n' }],
    viteFinal: async (viteConfig) => mergeConfig(viteConfig, { resolve: { tsconfigPaths: true } }),
};
export default config;
