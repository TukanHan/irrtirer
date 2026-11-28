/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        test: {
            globals: true,
            environment: 'jsdom',
            reporters: ['default'],
        },
        define: {
            'import.meta.vitest': mode !== 'production',
        },
    };
});
