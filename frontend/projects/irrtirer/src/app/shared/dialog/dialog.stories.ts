import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DialogComponent } from './dialog.component';
import { DialogData } from './dialog-data.interface';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-dialog-host',
    imports: [MatButtonModule],
    template: `<button mat-raised-button (click)="openDialog()">Otwórz Dialog</button>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class DialogHostComponent {
    public readonly dialogData = input.required<DialogData>();

    private readonly dialog = inject(MatDialog);

    public openDialog(): void {
        this.dialog.open(DialogComponent, { data: this.dialogData() }).afterClosed();
    }
}

const meta: Meta<DialogComponent> = {
    title: 'Example/Dialog',
    component: DialogComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [DialogHostComponent],
        }),
    ],
};

export default meta;
type Story = StoryObj<DialogComponent>;

export const Default: Story = {
    args: {
        title: 'Przykładowy tytuł dialogu',
        message: 'To jest przykładowa wiadomość wyświetlana w oknie dialogowym.',
    },
    render: (args: DialogData) => {
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
