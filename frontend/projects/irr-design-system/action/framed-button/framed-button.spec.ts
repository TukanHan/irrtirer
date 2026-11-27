import { afterNextRender, Directive, inject } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { IDS_NATIVE_CONTROL_HOST } from 'irr-design-system/core';
import { IdsFramedButton } from './framed-button';

@Directive({ selector: '[idsFocusNativeControl]' })
class FocusNativeControl {
    constructor() {
        const host = inject(IDS_NATIVE_CONTROL_HOST, { self: true });
        afterNextRender(() => host.nativeControl().nativeElement.focus());
    }
}

describe('IdsFramedButton', () => {
    it('exposes the native button to library directives', async () => {
        await render('<ids-framed-button idsFocusNativeControl>Lorem ipsum</ids-framed-button>', { imports: [IdsFramedButton, FocusNativeControl] });

        expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Lorem ipsum' }));
    });

    it('uses the projected content as its accessible name', async () => {
        await render('<ids-framed-button>Lorem ipsum</ids-framed-button>', { imports: [IdsFramedButton] });

        expect(screen.queryByRole('button', { name: 'Lorem ipsum' })).not.toBeNull();
    });

    it('uses ariaLabel as its accessible name', async () => {
        await render('<ids-framed-button ariaLabel="Dolor"><span aria-hidden="true">sit</span></ids-framed-button>', { imports: [IdsFramedButton] });

        expect(screen.queryByRole('button', { name: 'Dolor' })).not.toBeNull();
    });

    it('emits clicked with the mouse event when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        await render('<ids-framed-button (clicked)="onClick($event)">Lorem ipsum</ids-framed-button>', {
            imports: [IdsFramedButton],
            componentProperties: { onClick },
        });

        await user.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledExactlyOnceWith(expect.any(MouseEvent));
    });

    it('is disabled and does not emit clicked when disabled', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        await render('<ids-framed-button disabled (clicked)="onClick($event)">Lorem ipsum</ids-framed-button>', {
            imports: [IdsFramedButton],
            componentProperties: { onClick },
        });
        const button = screen.getByRole<HTMLButtonElement>('button');

        await user.click(button);

        expect(button.disabled).toBe(true);
        expect(onClick).not.toHaveBeenCalled();
    });

    it('defaults to type button', async () => {
        await render('<ids-framed-button>Lorem ipsum</ids-framed-button>', { imports: [IdsFramedButton] });

        expect(screen.getByRole<HTMLButtonElement>('button').type).toBe('button');
    });

    it.each(['submit', 'reset'] as const)('applies type %s', async (type) => {
        await render('<ids-framed-button [type]="type">Lorem ipsum</ids-framed-button>', {
            imports: [IdsFramedButton],
            componentProperties: { type },
        });

        expect(screen.getByRole<HTMLButtonElement>('button').type).toBe(type);
    });

    // Variants are purely visual - the modifier class is the only observable effect in the DOM.
    it('defaults to the neutral variant', async () => {
        await render('<ids-framed-button>Lorem ipsum</ids-framed-button>', { imports: [IdsFramedButton] });

        expect(screen.getByRole('button').classList).toContain('ids-framed-button--neutral');
    });

    it.each(['accent', 'danger'] as const)('applies the %s variant', async (variant) => {
        await render('<ids-framed-button [variant]="variant">Lorem ipsum</ids-framed-button>', {
            imports: [IdsFramedButton],
            componentProperties: { variant },
        });

        expect(screen.getByRole('button').classList).toContain(`ids-framed-button--${variant}`);
    });
});
