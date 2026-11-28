import { signal } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IdsFlatButton } from 'irr-design-system/action';
import { IdsIcon } from 'irr-design-system/icon';

const meta: Meta = {
    title: 'Style/Animacje/Chevron',
    decorators: [
        moduleMetadata({
            imports: [IdsIcon, IdsFlatButton],
        }),
    ],
    parameters: { backgrounds: { disable: true } },
    globals: { theme: 'light', locale: 'pl' },
};

export default meta;

export const Example: StoryObj = {
    render: () => ({
        props: { isOpen: signal(true) },
        template: `
            <div class="flex flex-row items-center gap-4">
                <ids-flat-button ariaLabel="Lorem ipsum" (clicked)="isOpen.update(v => !v)">
                    <ids-icon class="chevron" name="keyboard_arrow_up" [class.closed]="!isOpen()" />
                </ids-flat-button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        `,
    }),
};
