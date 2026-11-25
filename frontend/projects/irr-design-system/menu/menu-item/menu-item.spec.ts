import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { IdsMenuItem } from './menu-item';

describe('IdsMenuItem', () => {
    it('renders a menu item named by its content', async () => {
        await render('<ids-menu-item>Lorem ipsum</ids-menu-item>', { imports: [IdsMenuItem] });

        expect(screen.queryByRole('menuitem', { name: 'Lorem ipsum' })).not.toBeNull();
    });

    it('stays out of the tab sequence', async () => {
        await render('<ids-menu-item>Lorem ipsum</ids-menu-item>', { imports: [IdsMenuItem] });

        expect(screen.getByRole('menuitem').getAttribute('tabindex')).toBe('-1');
    });

    it('emits clicked with the mouse event when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        await render('<ids-menu-item (clicked)="onClick($event)">Lorem ipsum</ids-menu-item>', {
            imports: [IdsMenuItem],
            componentProperties: { onClick },
        });

        await user.click(screen.getByRole('menuitem'));

        expect(onClick).toHaveBeenCalledExactlyOnceWith(expect.any(MouseEvent));
    });

    it('is disabled and does not emit clicked when disabled', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        await render('<ids-menu-item disabled (clicked)="onClick($event)">Lorem ipsum</ids-menu-item>', {
            imports: [IdsMenuItem],
            componentProperties: { onClick },
        });
        const item = screen.getByRole<HTMLButtonElement>('menuitem');

        await user.click(item);

        expect(item.disabled).toBe(true);
        expect(onClick).not.toHaveBeenCalled();
    });
});
