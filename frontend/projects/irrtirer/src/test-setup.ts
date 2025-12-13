import { vi } from 'vitest';
import 'vitest-canvas-mock';

globalThis.ResizeObserver = class ResizeObserver {
    constructor() {}
    public observe = vi.fn();
    public unobserve = vi.fn();
    public disconnect = vi.fn();
};