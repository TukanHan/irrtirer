import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Observable } from 'rxjs';
import { TileModel, TilesSet } from '../../core/models/mosaic-project.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TrayService } from './tray.service';

@Component({
    selector: 'app-tray',
    imports: [RouterOutlet],
    templateUrl: './tray.component.html',
    styleUrl: './tray.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrayComponent implements ToolView, AfterViewInit {
    private readonly store = inject(Store);

    private readonly destroyRef = inject(DestroyRef);

    private readonly tilesSets$: Observable<TilesSet[]> = this.store.select(selectTilesSets);

    private activeCanvas!: IActiveCanvas;

    public ngAfterViewInit(): void {
        queueMicrotask(() => this.subscribeOnTilesSetsChange());
    }

    private subscribeOnTilesSetsChange(): void {
        this.tilesSets$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((tilesSets) => this.drawTiles(tilesSets.flatMap((tileSet) => tileSet.tiles)));
    }

    public sectionEntered(activeCanvas: IActiveCanvas): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;
        return { ribbon: [] };
    }

    private drawTiles(tiles: TileModel[]): void {
        this.activeCanvas.removeObjects();

        if (tiles.length) {
            TrayService.drawTiles(tiles, this.activeCanvas);
        }

        this.activeCanvas.redraw();
    }
}