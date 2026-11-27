import { Component, input, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';
import { ExpandablePanel } from '../../../../shared/expandable-panel/expandable-panel';

@Component({
    selector: 'app-extended-panel',
    imports: [MatIcon, IdsFlatButton, ExpandablePanel, TranslatePipe],
    template: `
        <div class="label">
            <span class="label-content">{{ label() }}</span>
            <ids-flat-button
                class="toggle-button ids-flat-button--size-small"
                [ariaLabel]="(isOpen() ? 'common.collapse' : 'common.expand') | translate"
                (clicked)="toggle()"
            >
                <mat-icon class="chevron" [class.closed]="!isOpen()"> keyboard_arrow_up </mat-icon>
            </ids-flat-button>
        </div>
        <app-expandable-panel class="panel" [isOpen]="isOpen()">
            <ng-content />
        </app-expandable-panel>
    `,
    styleUrl: './extended-panel.scss',
})
export class ExtendedPanel implements OnInit {
    public readonly label = input.required<string>();

    public readonly shouldBeOpen = input<boolean>(true);

    protected readonly isOpen = signal<boolean>(true);

    public ngOnInit(): void {
        this.isOpen.set(this.shouldBeOpen());
    }

    protected toggle(): void {
        this.isOpen.update((value) => !value);
    }
}
