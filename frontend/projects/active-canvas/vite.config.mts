/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: [resolve(import.meta.dirname, 'src/test-setup.ts')],
            reporters: ['default'],
        },
        define: {
            'import.meta.vitest': mode !== 'production',
        },
    };
});
