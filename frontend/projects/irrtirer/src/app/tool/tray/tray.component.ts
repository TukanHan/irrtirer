import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { ToolView, ToolViewInitSetting } from '../tool-view.interface';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTilesSets } from '../../core/state/mosaic-project/mosaic-project.selectors';
import { Observable } from 'rxjs';
import { TileModel, TilesSet } from '../../core/models/mosaic-project.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TileObject } from '../../shared/canvas-objects/tile-object';
import { PolygonHelper } from '../../core/helpers/polygon/polygon-helper';
import { transformPolygon } from '../../core/helpers/polygon/trigonometry-helper';
import { Vector } from '../../core/models/math/vector.model';

interface TileWithRadius {
    tile: TileModel;
    radius: number;
}

@Component({
    selector: 'app-tray',
    imports: [RouterOutlet],
    templateUrl: './tray.component.html',
    styleUrl: './tray.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrayComponent implements ToolView, AfterViewInit {
    private tilesSets$: Observable<TilesSet[]> = this.store.select(selectTilesSets);

    private activeCanvas: IActiveCanvas;

    constructor(private store: Store, private destroyRef: DestroyRef) {}

    public ngAfterViewInit(): void {
        queueMicrotask(() => this.subscribeOnTilesSetsChange());
    }

    private subscribeOnTilesSetsChange(): void {
        this.tilesSets$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((tilesSets) => this.draw(tilesSets.flatMap((tileSet) => tileSet.tiles)));
    }

    public sectionEntered(activeCanvas: IActiveCanvas): ToolViewInitSetting {
        this.activeCanvas = activeCanvas;
        return { ribbon: [] };
    }

    private draw(tiles: TileModel[]): void {
        this.activeCanvas.removeObjects();

        let x: number = 0;
        const tilesWithRadius: TileWithRadius[] = tiles.map((tile) => ({ tile, radius: PolygonHelper.calculateOuterRadius(tile.vertices) }));
        tilesWithRadius.sort((a, b) => b.radius - a.radius);

        //const y = this.splitTileArrayInHalf(tilesWithRadius);

        for (const tileWithRadius of tilesWithRadius) {
            const worldTileVertices: Vector[] = transformPolygon(tileWithRadius.tile.vertices, new Vector(x, 0), 0);
            const tileObject: TileObject = new TileObject(worldTileVertices, tileWithRadius.tile.color);
            this.activeCanvas.addCanvasObject(tileObject);
            x += tileWithRadius.radius * 2;
        }

        this.activeCanvas.redraw();
    }

    //TODO
    /*
    private splitTileArrayInHalf(tileWithRadiusArr: TileWithRadius[]): TileWithRadius[][] {
        const sum = tileWithRadiusArr.reduce((acc, curr) => acc + curr.radius, 0);
        const sumMid = sum / 2;

        let currentSum: number = 0;
        const firstArr: TileWithRadius[] = [];
        const secondArr: TileWithRadius[] = [];

        for (const element of tileWithRadiusArr) {
            if (currentSum + element.radius <= sumMid) {
                firstArr.push(element);
                currentSum += element.radius;
            } else {
                secondArr.push(element);
            }
        }

        return [firstArr, secondArr];
    }
    */
}
