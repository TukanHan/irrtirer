import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';
import { IdsFlatLink } from './flat-link';

async function renderLink(template: string): Promise<void> {
    await render(template, {
        imports: [IdsFlatLink],
        providers: [provideRouter([{ path: 'project', children: [] }])],
    });
}

describe('IdsFlatLink', () => {
    it('links to an internal route in the same tab', async () => {
        await renderLink('<ids-flat-link link="/project">Lorem ipsum</ids-flat-link>');

        const link = screen.getByRole('link', { name: 'Lorem ipsum' });

        expect(link.getAttribute('href')).toBe('/project');
        expect(link.getAttribute('target')).toBeNull();
    });

    it('opens an external link safely in a new tab', async () => {
        await renderLink('<ids-flat-link link="https://example.com" linkType="external">Lorem ipsum</ids-flat-link>');

        const link = screen.getByRole('link', { name: 'Lorem ipsum' });

        expect(link.getAttribute('href')).toBe('https://example.com');
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('marks the link to the current page', async () => {
        await renderLink('<ids-flat-link link="/project">Lorem ipsum</ids-flat-link>');

        await TestBed.inject(Router).navigateByUrl('/project');

        const link = screen.getByRole('link', { name: 'Lorem ipsum' });
        expect(link.getAttribute('aria-current')).toBe('page');
    });
});
