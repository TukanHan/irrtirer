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

        expect(screen.queryByRole('button', { name: 'Dolor sit' })).toBeNull();
    });

    it('opens the menu when the host is clicked', async () => {
        const user = userEvent.setup();
        await renderTrigger();

        await user.click(screen.getByRole('button', { name: 'Lorem ipsum' }));

        expect(await screen.findByRole('button', { name: 'Dolor sit' })).not.toBeNull();
    });

    it('closes the menu when the host is clicked again', async () => {
        const user = userEvent.setup();
        await renderTrigger();
        const trigger = screen.getByRole('button', { name: 'Lorem ipsum' });
        await user.click(trigger);
        await screen.findByRole('button', { name: 'Dolor sit' });

        await user.click(trigger);

        expect(screen.queryByRole('button', { name: 'Dolor sit' })).toBeNull();
    });

    it('throws when the host is not clickable', async () => {
        const rendering = render(`<div [idsMenuTriggerFor]="menu"></div>${menu}`, { imports });

        await expect(rendering).rejects.toThrow(/IdsClickable/);
    });

    it('throws when only an ancestor is clickable', async () => {
        const rendering = render(`<ids-framed-button><span [idsMenuTriggerFor]="menu">Lorem ipsum</span></ids-framed-button>${menu}`, { imports });

        await expect(rendering).rejects.toThrow(/IdsClickable/);
    });
});
