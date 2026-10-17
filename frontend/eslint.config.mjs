import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
    {
        files: ["**/*.ts"],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        extends: [
            ...tseslint.configs.recommended,
            ...angular.configs.tsRecommended,
        ],
        rules: {
            "@typescript-eslint/explicit-member-accessibility": [
                "warn",
                {
                    overrides: {
                        constructors: "no-public",
                    },
                },
            ],
            "@typescript-eslint/explicit-function-return-type": [
                "warn",
                {
                    allowExpressions: true,
                },
            ],
            "@typescript-eslint/prefer-readonly": "warn",
            "@typescript-eslint/no-deprecated": "error",
            "@typescript-eslint/switch-exhaustiveness-check": "error",
            "@typescript-eslint/no-unnecessary-condition": "warn",
            curly: "error",
            "no-duplicate-imports": "error",
            "consistent-return": "error",
            "@angular-eslint/prefer-on-push-component-change-detection":
                "error",
            "@angular-eslint/no-output-native": "error",
            "@angular-eslint/use-lifecycle-interface": "error",
            "@angular-eslint/prefer-signals": "error",
        },
    },
    {
        files: ["projects/active-canvas/**/*.ts"],
        rules: {
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "ac",
                    style: "camelCase",
                },
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "ac",
                    style: "kebab-case",
                },
            ],
        },
    },
    {
        files: ["projects/irrtirer/**/*.ts"],
        rules: {
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase",
                },
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "app",
                    style: "kebab-case",
                },
            ],
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            "@angular-eslint/template/prefer-self-closing-tags": "error",
        },
    },
    ...storybook.configs["flat/recommended"],
    eslintConfigPrettier,
]);
