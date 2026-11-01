/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

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
