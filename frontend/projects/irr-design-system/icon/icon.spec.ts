import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ErrorHandler, inject, provideAppInitializer } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { describe, expect, it, vi } from 'vitest';
import { IdsIcon } from './icon';
import { IdsIconRegistry } from './registry/icon-registry';

const SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Lorem ipsum</title></svg>';

async function renderWithRegistry(template: string, handleError = vi.fn()): Promise<HttpTestingController> {
    await render(template, {
        imports: [IdsIcon],
        providers: [
            provideHttpClient(),
            provideHttpClientTesting(),
            provideAppInitializer(() => inject(IdsIconRegistry).register('lorem', '/lorem.svg')),
            { provide: ErrorHandler, useValue: { handleError } },
        ],
    });
    return TestBed.inject(HttpTestingController);
}

describe('IdsIcon', () => {
    it('renders the icon name as a font ligature', async () => {
        await render('<ids-icon name="home" />', { imports: [IdsIcon] });

        expect(screen.getByText('home')).toBeTruthy();
    });

    it('is hidden from assistive technology', async () => {
        await render('<ids-icon name="home" />', { imports: [IdsIcon] });

        expect(screen.getByText('home').getAttribute('aria-hidden')).toBe('true');
    });

    it('does not add its name to the accessible name of the surrounding control', async () => {
        await render('<button><ids-icon name="home" />Lorem ipsum</button>', { imports: [IdsIcon] });

        expect(screen.getByRole('button', { name: 'Lorem ipsum' })).toBeTruthy();
    });

    it('inlines a registered SVG instead of the ligature', async () => {
        const http = await renderWithRegistry('<ids-icon name="home" svg="lorem" />');

        http.expectOne('/lorem.svg').flush(SVG);

        expect(await screen.findByTitle('Lorem ipsum')).toBeTruthy();
        expect(screen.queryByText('home')).toBeNull();
    });

    it('reports an SVG that is not registered', async () => {
        const handleError = vi.fn();

        await renderWithRegistry('<ids-icon svg="ipsum" />', handleError);

        await vi.waitFor(() => expect(handleError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('"ipsum"') })));
    });
});
