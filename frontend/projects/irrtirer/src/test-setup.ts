import { TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { beforeEach, vi } from 'vitest';
import 'vitest-canvas-mock';

globalThis.ResizeObserver = class ResizeObserver {
    constructor() {}
    public observe = vi.fn();
    public unobserve = vi.fn();
    public disconnect = vi.fn();
};

beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [MatIconTestingModule],
    });
});
