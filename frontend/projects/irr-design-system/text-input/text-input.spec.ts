import { render, screen } from '@testing-library/angular';
import { IdsError } from 'irr-design-system/form';
import { describe, expect, it } from 'vitest';
import { IdsTextInput } from './text-input';

describe('IdsTextInput', () => {
    it.each([{ required: true }, { required: false }])('marks the field as required: $required', async ({ required }) => {
        await render('<ids-text-input label="Lorem" [required]="required" />', {
            imports: [IdsTextInput],
            componentProperties: { required },
        });

        expect(screen.getByRole<HTMLInputElement>('textbox', { name: 'Lorem' }).required).toBe(required);
    });

    it.each([
        { invalid: false, touched: true, disabled: false, showsError: false },
        { invalid: true, touched: false, disabled: false, showsError: false },
        { invalid: true, touched: true, disabled: false, showsError: true },
        { invalid: true, touched: true, disabled: true, showsError: false },
    ])(
        'shows the error: $showsError (invalid: $invalid, touched: $touched, disabled: $disabled)',
        async ({ invalid, touched, disabled, showsError }) => {
            await render(
                `<ids-text-input label="Lorem" [invalid]="invalid" [touched]="touched" [disabled]="disabled">
                    <ids-error>Dolor sit</ids-error>
                </ids-text-input>`,
                { imports: [IdsTextInput, IdsError], componentProperties: { invalid, touched, disabled } },
            );

            const input = screen.getByRole('textbox', { name: 'Lorem' });
            const describedBy = input.getAttribute('aria-describedby');
            expect(input.getAttribute('aria-invalid')).toBe(showsError ? 'true' : null);
            expect(screen.queryByText('Dolor sit') !== null).toBe(showsError);
            expect(describedBy ? document.getElementById(describedBy)?.textContent.trim() : null).toBe(showsError ? 'Dolor sit' : null);
        },
    );
});
