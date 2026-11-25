import { Component, input, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ExpandablePanel } from '../../../../shared/expandable-panel/expandable-panel';
import { TranslatePipe } from '@ngx-translate/core';
import { IdsFlatButton } from 'irr-design-system/action';

@Component({
    selector: 'app-extended-panel',
    imports: [MatIconModule, IdsFlatButton, ExpandablePanel, TranslatePipe],
    templateUrl: './extended-panel.html',
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
