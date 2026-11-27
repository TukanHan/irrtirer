import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it } from 'vitest';
import { IdsIconRegistry } from './icon-registry';

const SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Lorem ipsum</title></svg>';

describe('IdsIconRegistry', () => {
    let registry: IdsIconRegistry;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
        registry = TestBed.inject(IdsIconRegistry);
        http = TestBed.inject(HttpTestingController);
    });

    it('downloads a registered icon as an SVG element', async () => {
        registry.register('lorem', '/lorem.svg');

        const svg = firstValueFrom(registry.getSvg('lorem'));
        http.expectOne('/lorem.svg').flush(SVG);

        expect((await svg).querySelector('title')?.textContent).toBe('Lorem ipsum');
    });

    it('downloads each icon once and gives every caller its own element', async () => {
        registry.register('lorem', '/lorem.svg');

        const first = firstValueFrom(registry.getSvg('lorem'));
        http.expectOne('/lorem.svg').flush(SVG);
        const second = await firstValueFrom(registry.getSvg('lorem'));

        http.expectNone('/lorem.svg');
        expect(second).not.toBe(await first);
    });

    it('fails for an icon that is not registered', async () => {
        const svg = firstValueFrom(registry.getSvg('lorem'));

        await expect(svg).rejects.toThrow('no SVG icon registered as "lorem"');
    });

    it('fails for a file that is not an SVG', async () => {
        registry.register('lorem', '/lorem.svg');

        const svg = firstValueFrom(registry.getSvg('lorem'));
        http.expectOne('/lorem.svg').flush('<html></html>');

        await expect(svg).rejects.toThrow('not an SVG');
    });
});
