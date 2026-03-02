import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

const meta: Meta = {
    title: 'Style/Animacje/Chevron',
    decorators: [
        moduleMetadata({
            imports: [MatIcon, MatIconButton],
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
                <button mat-icon-button (click)="isOpen.update(v => !v)">
                    <mat-icon class="chevron" [class.closed]="!isOpen()">
                        keyboard_arrow_up
                    </mat-icon>
                </button>
                {{ isOpen() ? 'Otwarty' : 'Zamknięty' }}
            </div>
        `,
    }),
};
