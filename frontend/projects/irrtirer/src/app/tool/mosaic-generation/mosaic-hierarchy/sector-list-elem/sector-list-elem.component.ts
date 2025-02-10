import { ChangeDetectionStrategy, Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { GeneratedSectorModel } from '../../mosaic-generation.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-sector-list-elem',
    imports: [MatIconModule, MatButtonModule, CommonModule],
    templateUrl: './sector-list-elem.component.html',
    styleUrl: './sector-list-elem.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorListElemComponent {
    public sectorSignal: InputSignal<GeneratedSectorModel> = input.required();

    public isOpen: WritableSignal<boolean> = signal(false);

    protected toggle(): void {
        this.isOpen.update((value) => !value);
    }
}
