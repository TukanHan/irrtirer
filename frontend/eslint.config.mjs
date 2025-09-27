import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
    {
        files: ["**/*.ts"],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
            },
        },
        extends: [
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
            eslintConfigPrettier,
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
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-empty-function": "off",
            curly: "error",
            semi: "warn",
            "no-unused-vars": ["error", { args: "none" }],
            "prefer-const": "warn",
            "no-var": "error",
            "no-duplicate-imports": "error",
            "consistent-return": "error",
            "@angular-eslint/prefer-on-push-component-change-detection":
                "error",
            "@angular-eslint/no-output-native": "error",
            "@angular-eslint/use-lifecycle-interface": "warn",
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
]);
