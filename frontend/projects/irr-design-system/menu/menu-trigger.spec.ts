import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { IdsFramedButton } from 'irr-design-system/action';
import { describe, expect, it } from 'vitest';
import { IdsMenu } from './menu';
import { IdsMenuItem } from './menu-item/menu-item';
import { IdsMenuTrigger } from './menu-trigger';

const imports = [IdsFramedButton, IdsMenu, IdsMenuItem, IdsMenuTrigger];

const menu = `
    <ids-menu #menu>
        <ids-menu-item>Dolor sit</ids-menu-item>
    </ids-menu>
`;

async function renderTrigger(): Promise<void> {
    await render(`<ids-framed-button [idsMenuTriggerFor]="menu">Lorem ipsum</ids-framed-button>${menu}`, { imports });
}

describe('IdsMenuTrigger', () => {
    it('keeps the menu closed initially', async () => {
        await renderTrigger();

        expect(screen.queryByRole('menuitem', { name: 'Dolor sit' })).toBeNull();
    });

    it('opens the menu when the host is clicked', async () => {
        const user = userEvent.setup();
        await renderTrigger();

        await user.click(screen.getByRole('button', { name: 'Lorem ipsum' }));

        expect(await screen.findByRole('menuitem', { name: 'Dolor sit' })).not.toBeNull();
    });

    it('closes the menu when the host is clicked again', async () => {
        const user = userEvent.setup();
        await renderTrigger();
        const trigger = screen.getByRole('button', { name: 'Lorem ipsum' });
        await user.click(trigger);
        await screen.findByRole('menuitem', { name: 'Dolor sit' });

        await user.click(trigger);

        expect(screen.queryByRole('menuitem', { name: 'Dolor sit' })).toBeNull();
    });

    it('marks the host button as opening a menu', async () => {
        await renderTrigger();

        expect(screen.getByRole('button', { name: 'Lorem ipsum' }).getAttribute('aria-haspopup')).toBe('menu');
    });

    it('is collapsed initially', async () => {
        await renderTrigger();

        expect(screen.getByRole('button', { name: 'Lorem ipsum' }).getAttribute('aria-expanded')).toBe('false');
    });

    it('is expanded while the menu is open', async () => {
        const user = userEvent.setup();
        await renderTrigger();
        const trigger = screen.getByRole('button', { name: 'Lorem ipsum' });

        await user.click(trigger);
        await screen.findByRole('menuitem', { name: 'Dolor sit' });

        expect(trigger.getAttribute('aria-expanded')).toBe('true');
    });

    it('is collapsed again after the menu closes', async () => {
        const user = userEvent.setup();
        await renderTrigger();
        const trigger = screen.getByRole('button', { name: 'Lorem ipsum' });
        await user.click(trigger);
        await screen.findByRole('menuitem', { name: 'Dolor sit' });

        await user.click(trigger);

        expect(trigger.getAttribute('aria-expanded')).toBe('false');
    });

    it('opens a menu named by the trigger', async () => {
        const user = userEvent.setup();
        await renderTrigger();

        await user.click(screen.getByRole('button', { name: 'Lorem ipsum' }));

        expect(await screen.findByRole('menu', { name: 'Lorem ipsum' })).not.toBeNull();
    });

    it('points aria-controls at the open menu', async () => {
        const user = userEvent.setup();
        await renderTrigger();
        const trigger = screen.getByRole('button', { name: 'Lorem ipsum' });

        await user.click(trigger);
        const openMenu = await screen.findByRole('menu');

        expect(trigger.getAttribute('aria-controls')).toBe(openMenu.id);
    });

    it('has no aria-controls while the menu is closed', async () => {
        await renderTrigger();

        expect(screen.getByRole('button', { name: 'Lorem ipsum' }).hasAttribute('aria-controls')).toBe(false);
    });

    it('throws when the host exposes no native control', async () => {
        const rendering = render(`<div [idsMenuTriggerFor]="menu"></div>${menu}`, { imports });

        await expect(rendering).rejects.toThrow(/IdsNativeControlHost/);
    });

    it('throws when only an ancestor exposes a native control', async () => {
        const rendering = render(`<ids-framed-button><span [idsMenuTriggerFor]="menu">Lorem ipsum</span></ids-framed-button>${menu}`, { imports });

        await expect(rendering).rejects.toThrow(/IdsNativeControlHost/);
    });
});
