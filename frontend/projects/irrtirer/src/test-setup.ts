import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { FakeMatIconRegistry } from '@angular/material/icon/testing';
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
        providers: [{ provide: MatIconRegistry, useClass: FakeMatIconRegistry }],
    });
});
