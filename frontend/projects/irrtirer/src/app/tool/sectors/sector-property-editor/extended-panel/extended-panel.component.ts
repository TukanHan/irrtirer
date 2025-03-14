import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExpandablePanelComponent } from '../../../../shared/expandable-panel/expandable-panel.component';

@Component({
    selector: 'app-extended-panel',
    imports: [CommonModule, MatIconModule, MatButtonModule, ExpandablePanelComponent],
    templateUrl: './extended-panel.component.html',
    styleUrl: './extended-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendedPanelComponent implements OnInit {
    public label: InputSignal<string> = input.required();

    public shouldBeOpen: InputSignal<boolean> = input(true);

    protected isOpenSignal: WritableSignal<boolean> = signal(true);

    public ngOnInit(): void {
        this.isOpenSignal.set(this.shouldBeOpen());
    }

    protected toggle(): void {
        this.isOpenSignal.update((value) => !value);
    }
}
