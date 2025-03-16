import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTilesSets } from '../../../core/state/mosaic-project/mosaic-project.selectors';
import { TileModel } from '../../../core/models/mosaic-project.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { ColorPickerComponent } from '../../../shared/color-picker/color-picker.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tile-detail',
    imports: [TranslateModule, MatButtonModule, ColorPickerComponent, FormsModule],
    templateUrl: './tile-detail.component.html',
    styleUrl: './tile-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileDetailComponent implements OnInit {
    protected tileSignal: WritableSignal<TileModel> = signal(null);

    constructor(
        private route: ActivatedRoute,
        private store: Store,
        private router: Router,
        protected translate: TranslateService
    ) {}

    public ngOnInit(): void {
        const tileId: string = this.route.snapshot.paramMap.get('id');
        if (tileId) {
            const tileModel: TileModel = this.getTileModel(tileId);
            this.tileSignal.set(tileModel);
        }
    }

    private getTileModel(id: string): TileModel {
        const tilesSets = this.store.selectSignal(selectTilesSets)();
        return tilesSets.flatMap((tilesSets) => tilesSets.tiles).find((x) => x.id === id);
    }

    protected navigateToMenu(): void {
        this.router.navigate(['/tool/tray']);
    }
}
