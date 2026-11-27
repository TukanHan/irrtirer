import { afterNextRender, Directive, inject } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { IDS_NATIVE_CONTROL_HOST } from 'irr-design-system/core';
import { IdsFlatButton } from './flat-button';

@Directive({ selector: '[idsFocusNativeControl]' })
class FocusNativeControl {
    constructor() {
        const host = inject(IDS_NATIVE_CONTROL_HOST, { self: true });
        afterNextRender(() => host.nativeControl().nativeElement.focus());
    }
}

describe('IdsFlatButton', () => {
    it('exposes the native button to library directives', async () => {
        await render('<ids-flat-button idsFocusNativeControl>Lorem ipsum</ids-flat-button>', { imports: [IdsFlatButton, FocusNativeControl] });

        expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Lorem ipsum' }));
    });

    it('uses the projected content as its accessible name', async () => {
        await render('<ids-flat-button>Lorem ipsum</ids-flat-button>', { imports: [IdsFlatButton] });

        expect(screen.queryByRole('button', { name: 'Lorem ipsum' })).not.toBeNull();
    });

    it('uses ariaLabel as its accessible name', async () => {
        await render('<ids-flat-button ariaLabel="Dolor"><span aria-hidden="true">sit</span></ids-flat-button>', { imports: [IdsFlatButton] });

        expect(screen.queryByRole('button', { name: 'Dolor' })).not.toBeNull();
    });

    it('emits clicked with the mouse event when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        await render('<ids-flat-button (clicked)="onClick($event)">Lorem ipsum</ids-flat-button>', {
            imports: [IdsFlatButton],
            componentProperties: { onClick },
        });

        await user.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledExactlyOnceWith(expect.any(MouseEvent));
    });

    it('is disabled and does not emit clicked when disabled', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        await render('<ids-flat-button disabled (clicked)="onClick($event)">Lorem ipsum</ids-flat-button>', {
            imports: [IdsFlatButton],
            componentProperties: { onClick },
        });
        const button = screen.getByRole<HTMLButtonElement>('button');

        await user.click(button);

        expect(button.disabled).toBe(true);
        expect(onClick).not.toHaveBeenCalled();
    });

    it('defaults to type button', async () => {
        await render('<ids-flat-button>Lorem ipsum</ids-flat-button>', { imports: [IdsFlatButton] });

        expect(screen.getByRole<HTMLButtonElement>('button').type).toBe('button');
    });

    it.each(['submit', 'reset'] as const)('applies type %s', async (type) => {
        await render('<ids-flat-button [type]="type">Lorem ipsum</ids-flat-button>', {
            imports: [IdsFlatButton],
            componentProperties: { type },
        });

        expect(screen.getByRole<HTMLButtonElement>('button').type).toBe(type);
    });

    // Variants are purely visual - the modifier class is the only observable effect in the DOM.
    it('defaults to the neutral variant', async () => {
        await render('<ids-flat-button>Lorem ipsum</ids-flat-button>', { imports: [IdsFlatButton] });

        expect(screen.getByRole('button').classList).toContain('ids-flat-button--neutral');
    });

    it.each(['accent', 'danger'] as const)('applies the %s variant', async (variant) => {
        await render('<ids-flat-button [variant]="variant">Lorem ipsum</ids-flat-button>', {
            imports: [IdsFlatButton],
            componentProperties: { variant },
        });

        expect(screen.getByRole('button').classList).toContain(`ids-flat-button--${variant}`);
    });
});
