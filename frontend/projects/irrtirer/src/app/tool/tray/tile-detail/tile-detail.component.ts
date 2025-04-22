import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
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
    protected readonly tile = signal<TileModel | null>(null);

    private readonly route = inject(ActivatedRoute);
    
    private readonly store = inject(Store);
    
    private readonly router = inject(Router);
    
    protected readonly translate = inject(TranslateService);

    public ngOnInit(): void {
        const tileId = this.route.snapshot.paramMap.get('id');
        if (tileId) {
            const tileModel = this.getTileModel(tileId);
            if(tileModel) {
                this.tile.set(tileModel);
            }
        }
    }

    private getTileModel(id: string): TileModel | undefined {
        const tilesSets = this.store.selectSignal(selectTilesSets)();
        return tilesSets.flatMap((tilesSets) => tilesSets.tiles).find((x) => x.id === id);
    }

    protected navigateToMenu(): void {
        this.router.navigate(['/tool/tray']);
    }
}
