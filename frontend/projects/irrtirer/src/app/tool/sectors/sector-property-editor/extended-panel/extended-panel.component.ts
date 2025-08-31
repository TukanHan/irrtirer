import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExpandablePanelComponent } from '../../../../shared/expandable-panel/expandable-panel.component';

@Component({
    selector: 'app-extended-panel',
    imports: [MatIconModule, MatButtonModule, ExpandablePanelComponent],
    templateUrl: './extended-panel.component.html',
    styleUrl: './extended-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendedPanelComponent implements OnInit {
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
