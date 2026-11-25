import { provideTranslateService } from '@ngx-translate/core';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ExtendedPanel } from './extended-panel';

describe('ExtendedPanel', () => {
    it('labels the toggle button with the action it performs', async () => {
        const user = userEvent.setup();
        await render('<app-extended-panel label="Lorem">Ipsum</app-extended-panel>', {
            imports: [ExtendedPanel],
            providers: [provideTranslateService({})],
        });

        await user.click(screen.getByRole('button', { name: 'common.collapse' }));

        expect(screen.queryByRole('button', { name: 'common.expand' })).not.toBeNull();
    });
});
