import { render, screen } from '@testing-library/angular';
import { IdsError } from 'irr-design-system/form';
import { describe, expect, it } from 'vitest';
import { IdsNumberInput } from './number-input';

describe('IdsNumberInput', () => {
    it.each([
        { invalid: false, touched: true, disabled: false, showsError: false },
        { invalid: true, touched: false, disabled: false, showsError: false },
        { invalid: true, touched: true, disabled: false, showsError: true },
        { invalid: true, touched: true, disabled: true, showsError: false },
    ])(
        'shows the error: $showsError (invalid: $invalid, touched: $touched, disabled: $disabled)',
        async ({ invalid, touched, disabled, showsError }) => {
            await render(
                `<ids-number-input label="Lorem" [invalid]="invalid" [touched]="touched" [disabled]="disabled">
                    <ids-error>Dolor sit</ids-error>
                </ids-number-input>`,
                { imports: [IdsNumberInput, IdsError], componentProperties: { invalid, touched, disabled } },
            );

            expect(screen.getByRole('spinbutton', { name: 'Lorem' }).getAttribute('aria-invalid')).toBe(showsError ? 'true' : null);
            expect(screen.queryByText('Dolor sit') !== null).toBe(showsError);
        },
    );
});
