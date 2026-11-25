import { AfterViewInit, Component, DestroyRef, inject, signal } from '@angular/core';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Observable } from 'rxjs';
import { TileModel, TilesSet } from '../../core/models/mosaic-project.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TileTreemap } from './tile-treemap';
import { CanvasToolkit } from '../canvas-toolkit';

@Component({
    selector: 'app-tray',
    imports: [RouterOutlet],
    templateUrl: './tray.html',
    styleUrl: './tray.scss',
})
export class Tray implements ToolView, AfterViewInit {
    private readonly store = inject(Store);

    private readonly destroyRef = inject(DestroyRef);

    private readonly canvasToolkit = inject(CanvasToolkit);

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
        return {
            ribbon: [
                {
                    iconName: 'crop',
                    visibility: signal('on'),
                    tooltipKey: 'tool.ribbon.takeSnapshot',
                    onClick: () => this.canvasToolkit.openTakeSnapshotDialog(this.activeCanvas, 'sectors_snapshot.png'),
                },
            ],
        };
    }

    private drawTiles(tiles: TileModel[]): void {
        this.activeCanvas.removeObjects();

        if (tiles.length) {
            TileTreemap.drawTiles(tiles, this.activeCanvas);
        }

        this.activeCanvas.redraw();
    }
}
