import { TestBed } from '@angular/core/testing';
import { beforeEach, vi } from 'vitest';
import { provideIdsFakeIconRegistry } from 'irr-design-system/icon/testing';
import 'vitest-canvas-mock';

globalThis.ResizeObserver = class ResizeObserver {
    constructor() {}
    public observe = vi.fn();
    public unobserve = vi.fn();
    public disconnect = vi.fn();
};

beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [provideIdsFakeIconRegistry()],
    });
});
