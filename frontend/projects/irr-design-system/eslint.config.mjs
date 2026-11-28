// @ts-check
import { defineConfig } from 'eslint/config';
import rootConfig from '../../eslint.config.mjs';

const namedExports = {
    selector: 'ExportAllDeclaration',
    message: 'structure/named-exports: public-api.ts uses named exports only.',
};

const emptyRootApi = {
    selector: 'ExportNamedDeclaration[specifiers.length>0], ExportNamedDeclaration[declaration], ExportDefaultDeclaration',
    message: 'structure/empty-root-api: src/public-api.ts exports nothing; consumers import entry points only.',
};

const publicSymbolPrefix = {
    selector: 'ExportSpecifier[exported.name!=/^(Ids|IDS_|provideIds)/]',
    message: 'structure/public-symbol-prefix: symbols exported to consumers start with Ids (constants: IDS_, provider functions: provideIds).',
};

export default defineConfig([
    ...rootConfig,
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'ids',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'ids',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.ts'],
        ignores: ['**/*.spec.ts', '**/*.stories.ts'],
        rules: {
            'max-classes-per-file': ['error', 1],
        },
    },
    {
        files: ['**/public-api.ts'],
        rules: {
            'no-restricted-syntax': ['error', namedExports],
        },
    },
    // Later blocks replace the rule options instead of merging them, so they repeat namedExports.
    {
        files: ['**/public-api.ts'],
        ignores: ['internal/**', 'src/**'],
        rules: {
            'no-restricted-syntax': ['error', namedExports, publicSymbolPrefix],
        },
    },
    {
        files: ['src/public-api.ts'],
        rules: {
            'no-restricted-syntax': ['error', namedExports, emptyRootApi],
        },
    },
]);
