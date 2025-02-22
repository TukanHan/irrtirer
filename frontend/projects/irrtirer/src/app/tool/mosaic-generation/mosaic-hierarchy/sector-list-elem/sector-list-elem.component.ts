import { ChangeDetectionStrategy, Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { GeneratedSectorModel, GeneratedTileModel } from '../../mosaic-generation.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { ExpandablePanelComponent } from '../../../../shared/expandable-panel/expandable-panel.component';

@Component({
    selector: 'app-sector-list-elem',
    imports: [MatIconModule, MatButtonModule, CommonModule, ExpandablePanelComponent],
    templateUrl: './sector-list-elem.component.html',
    styleUrl: './sector-list-elem.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectorListElemComponent implements OnInit {
    @Input({ required: true })
    public sector: GeneratedSectorModel;

    protected isOpenSignal: WritableSignal<boolean> = signal(false);

    protected items$: Observable<GeneratedTileModel[]>;

    protected areTilesVisibleSignal: WritableSignal<boolean> = signal(true);

    public ngOnInit(): void {
        this.items$ = this.sector.tiles$;
    } 

    protected toggleTilesList(): void {
        this.isOpenSignal.update((value) => !value);
    }

    protected toggleTilesVisibility(): void {
        this.areTilesVisibleSignal.update(value => !value);
        this.sector.setTilesVisibility(this.areTilesVisibleSignal());
    }
}