import { fireEvent, render, screen, waitFor } from '@testing-library/angular';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { IdsFramedButton } from 'irr-design-system/action';
import { describe, expect, it } from 'vitest';
import { IdsMenu } from './menu';
import { IdsMenuItem } from './menu-item/menu-item';
import { IdsMenuTrigger } from './menu-trigger/menu-trigger';

const imports = [IdsFramedButton, IdsMenu, IdsMenuItem, IdsMenuTrigger];

const keyCodes = { Tab: 9, Escape: 27, ArrowUp: 38, ArrowDown: 40, Home: 36, End: 35 } as const;
type Key = keyof typeof keyCodes;

async function openMenu(items: string): Promise<UserEvent> {
    const user = userEvent.setup();
    await render(`<ids-framed-button [idsMenuTriggerFor]="menu">Open</ids-framed-button><ids-menu #menu>${items}</ids-menu>`, { imports });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    await screen.findByRole('menu');
    return user;
}

function press(...keys: Key[]): void {
    for (const key of keys) {
        // The CDK key manager reads keyCode, which user-event leaves at 0 in jsdom.
        fireEvent.keyDown(document.activeElement!, { key, keyCode: keyCodes[key] });
    }
}

const threeItems = `
    <ids-menu-item>Lorem</ids-menu-item>
    <ids-menu-item>Ipsum</ids-menu-item>
    <ids-menu-item>Dolor</ids-menu-item>
`;

describe('IdsMenu', () => {
    it('focuses the first item when opened', async () => {
        await openMenu(threeItems);

        expect(document.activeElement).toBe(screen.getByRole('menuitem', { name: 'Lorem' }));
    });

    it.each<{ keys: Key[]; expected: string }>([
        { keys: ['ArrowDown'], expected: 'Ipsum' },
        { keys: ['ArrowUp'], expected: 'Dolor' },
        { keys: ['ArrowDown', 'ArrowDown', 'ArrowDown'], expected: 'Lorem' },
        { keys: ['End'], expected: 'Dolor' },
        { keys: ['End', 'Home'], expected: 'Lorem' },
    ])('moves focus to $expected on $keys', async ({ keys, expected }) => {
        await openMenu(threeItems);

        press(...keys);

        expect(document.activeElement).toBe(screen.getByRole('menuitem', { name: expected }));
    });

    it('skips disabled items', async () => {
        await openMenu(`
            <ids-menu-item>Lorem</ids-menu-item>
            <ids-menu-item disabled>Ipsum</ids-menu-item>
            <ids-menu-item>Dolor</ids-menu-item>
        `);

        press('ArrowDown');

        expect(document.activeElement).toBe(screen.getByRole('menuitem', { name: 'Dolor' }));
    });

    it.each<Key>(['Escape', 'Tab'])('closes on %s and returns focus to the trigger', async (key) => {
        await openMenu(threeItems);

        press(key);

        expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Open' }));
        await waitFor(() => expect(screen.queryByRole('menu')).toBeNull());
    });

    it('closes when an item is clicked and returns focus to the trigger', async () => {
        const user = await openMenu(threeItems);

        await user.click(screen.getByRole('menuitem', { name: 'Ipsum' }));

        expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Open' }));
        await waitFor(() => expect(screen.queryByRole('menu')).toBeNull());
    });
});
