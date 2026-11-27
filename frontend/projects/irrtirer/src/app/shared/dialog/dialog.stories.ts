import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IdsFramedButton } from 'irr-design-system/action';
import { Dialog } from './dialog';
import { DialogData } from './dialog-data.interface';

@Component({
    selector: 'app-dialog-host',
    imports: [IdsFramedButton],
    template: ` <ids-framed-button (clicked)="openDialog()"> Otwórz Dialog </ids-framed-button> `,
})
class DialogHostComponent {
    public readonly dialogData = input.required<DialogData>();

    private readonly dialog = inject(MatDialog);

    public openDialog(): void {
        this.dialog.open(Dialog, { data: this.dialogData() }).afterClosed();
    }
}

const meta: Meta<DialogData> = {
    title: 'Komponenty/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [DialogHostComponent],
        }),
    ],
};

export default meta;
type Story = StoryObj<DialogData>;

export const Default: Story = {
    args: {
        title: 'Przykładowy tytuł dialogu',
        message: 'To jest przykładowa wiadomość wyświetlana w oknie dialogowym.',
    },
    render: (args) => {
        const dialogData: DialogData = {
            title: args.title,
            message: args.message,
            noCustomLabel: args.noCustomLabel,
            yesCustomLabel: args.yesCustomLabel,
        };
        return {
            props: { dialogData },
            template: `<app-dialog-host [dialogData]="dialogData" />`,
        };
    },
};
