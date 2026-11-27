import { provideRouter } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';
import { IdsSideNav } from './side-nav';
import { IdsSideNavItem } from './side-nav-item/side-nav-item';

describe('IdsSideNav', () => {
    it('renders a navigation landmark named by ariaLabel', async () => {
        await render('<ids-side-nav ariaLabel="Lorem"><ids-side-nav-item link="/ipsum" label="Ipsum" icon="folder" /></ids-side-nav>', {
            imports: [IdsSideNav, IdsSideNavItem],
            providers: [provideRouter([])],
        });

        const navigation = screen.getByRole('navigation', { name: 'Lorem' });

        expect(navigation.contains(screen.getByRole('link', { name: 'Ipsum' }))).toBe(true);
    });
});
