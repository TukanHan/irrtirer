import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { IdsTooltip } from './tooltip';

describe('IdsTooltip', () => {
    it('shows the text and describes the host when the host is focused', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });

        await user.tab();

        expect((await screen.findByRole('tooltip')).textContent.trim()).toBe('Lorem ipsum');
        expect(screen.getByRole('textbox', { name: 'Name', description: 'Lorem ipsum' })).not.toBeNull();
    });

    it('describes the focused descendant of the host', async () => {
        const user = userEvent.setup();
        await render('<div idsTooltip="Lorem ipsum"><button>Dolor</button></div>', { imports: [IdsTooltip] });

        await user.tab();
        await screen.findByRole('tooltip');

        expect(screen.getByRole('button', { name: 'Dolor', description: 'Lorem ipsum' })).not.toBeNull();
    });

    it('keeps existing descriptions and restores them on blur', async () => {
        const user = userEvent.setup();
        await render('<p id="hint">Sit amet</p><input aria-label="Name" aria-describedby="hint" idsTooltip="Lorem ipsum" />', {
            imports: [IdsTooltip],
        });
        const input = screen.getByRole('textbox');

        await user.tab();
        await screen.findByRole('tooltip');
        const describedWhileFocused = screen.getByRole('textbox', { description: 'Sit amet Lorem ipsum' });
        await user.tab();

        expect(describedWhileFocused).toBe(input);
        expect(screen.queryByRole('tooltip')).toBeNull();
        expect(input.getAttribute('aria-describedby')).toBe('hint');
    });

    it('removes the description when focus leaves', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });
        const input = screen.getByRole('textbox');

        await user.tab();
        await screen.findByRole('tooltip');
        await user.tab();

        expect(screen.queryByRole('tooltip')).toBeNull();
        expect(input.hasAttribute('aria-describedby')).toBe(false);
    });

    it('shows the text on hover without describing the host', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });

        await user.hover(screen.getByRole('textbox'));

        expect(await screen.findByRole('tooltip')).not.toBeNull();
        expect(screen.getByRole('textbox').hasAttribute('aria-describedby')).toBe(false);
    });

    it('does not describe an element already named by the same text', async () => {
        const user = userEvent.setup();
        await render('<button aria-label="Lorem ipsum" idsTooltip="Lorem ipsum">x</button>', { imports: [IdsTooltip] });

        await user.tab();
        await screen.findByRole('tooltip');

        expect(screen.getByRole('button').hasAttribute('aria-describedby')).toBe(false);
    });

    it('closes as soon as the pointer leaves the host', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });
        await user.hover(screen.getByRole('textbox'));
        await screen.findByRole('tooltip');

        await user.unhover(screen.getByRole('textbox'));

        expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('stays open while the pointer moves between the host and the panel', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });
        await user.hover(screen.getByRole('textbox'));
        const input = screen.getByRole('textbox');
        const tooltip = await screen.findByRole('tooltip');

        // fireEvent: user-event does not set relatedTarget on mouseleave
        fireEvent.mouseLeave(input, { relatedTarget: tooltip });
        fireEvent.mouseOut(tooltip, { relatedTarget: input });

        expect(screen.queryByRole('tooltip')).toBe(tooltip);
    });

    it('closes as soon as the pointer leaves the panel', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });
        await user.hover(screen.getByRole('textbox'));
        const tooltip = await screen.findByRole('tooltip');
        await user.hover(tooltip);

        await user.unhover(tooltip);

        expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('closes on Escape while focus stays on the host', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });
        const input = screen.getByRole('textbox');

        await user.tab();
        await screen.findByRole('tooltip');
        await user.keyboard('{Escape}');

        expect(screen.queryByRole('tooltip')).toBeNull();
        expect(input.hasAttribute('aria-describedby')).toBe(false);
        expect(document.activeElement).toBe(input);
    });

    it('closes on Escape while hovered', async () => {
        const user = userEvent.setup();
        await render('<input aria-label="Name" idsTooltip="Lorem ipsum" />', { imports: [IdsTooltip] });

        await user.hover(screen.getByRole('textbox'));
        await screen.findByRole('tooltip');
        await user.keyboard('{Escape}');

        expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('shows nothing when the text is blank', async () => {
        const user = userEvent.setup();
        const { fixture } = await render('<input aria-label="Name" idsTooltip=" " />', { imports: [IdsTooltip] });

        await user.tab();
        await fixture.whenStable();

        expect(screen.queryByRole('tooltip')).toBeNull();
        expect(screen.getByRole('textbox').hasAttribute('aria-describedby')).toBe(false);
    });
});
