import { IterableUnion } from '../../../../core/helpers/iterable-union';
import { PointToPolygonDistanceCalculator } from '../../../../core/helpers/polygon/point-to-polygon-distance-calculator';
import { PresenceInPoligonHelper } from '../../../../core/helpers/polygon/presence-in-polygon-helper';
import { RandomHelper } from '../../../../core/helpers/random-helper';
import { Black } from '../../../../core/models/color.model';
import { Vector } from '../../../../core/models/vector.model';
import { BluredImageObject } from '../../color-compatibility/blured-image-object.model';
import { GeometryObject } from '../../models/geometry-object.model';
import { Tile } from '../../models/tile';
import { TileTransform } from '../../models/tile-transform.model';
import { PopulationParams } from '../../sectors/generation-params/population-params.interface';
import { SectionModel } from '../../sectors/section.model';
import { SectionPointFilteredTray } from '../../tray/section-point-filtered-tray';
import { PossibleLayout } from './possible-layout';
import { PossibleLayoutEvaluator } from './possible-layout-evaluator';

export class SectionLayoutPreparer {
    private readonly neighbourTiles: TileTransform[];
    private readonly populationParams: PopulationParams;
    private readonly evaluator: PossibleLayoutEvaluator;

    constructor(private pixelSource: BluredImageObject, private section: SectionModel, neighbourTiles: TileTransform[]) {
        this.neighbourTiles = neighbourTiles;
        this.populationParams = section.parent.populationParams;
        this.evaluator = new PossibleLayoutEvaluator(section.parent.evaluationParams, pixelSource, section);
    }

    public createInitialLayout(avalibleTiles: Tile[]): PossibleLayout {
        const layout: PossibleLayout = new PossibleLayout(this.section);
        layout.usedTilesIndexes = new Set<number>();
        layout.tilesAvalibleForLayout = avalibleTiles;

        const pointFilteredTray: SectionPointFilteredTray = new SectionPointFilteredTray(avalibleTiles, layout.usedTilesIndexes);

        for (let i = 0; i < this.populationParams.countOfRandomingTrianglePosition && pointFilteredTray.hasAnyAvailableTiles(); ++i) {
            this.TryAddTile(layout, pointFilteredTray);
        }

        layout.rate = this.evaluator.evaluate(layout);
        return layout;
    }

    public ModifyLayout(layout: PossibleLayout, count: number): PossibleLayout {
        throw new Error();
    }

    private TryAddTile(layout: PossibleLayout, pointFilteredTray: SectionPointFilteredTray): boolean {
        const randomPoint: Vector = RandomHelper.randomPointInTriangle(this.section.triangle.vertices);
        if (!this.testIfPointIsInsideTile(new IterableUnion([this.neighbourTiles, layout.getTilesLayout()]), randomPoint)) {
            pointFilteredTray.setFilterForPoint({
                maxInnerRadius:
                    this.getMinDistanceToNeighbourTiles(new IterableUnion([this.neighbourTiles, layout.getTilesLayout()]), randomPoint) ??
                    Number.MAX_VALUE,
                preferredColor: this.pixelSource.getPictureColorAtPosition(randomPoint) ?? Black,
                countOfColorMatchingAttempts: this.populationParams.countOfColorMatchingAttempts,
            });

            const tileTransform: TileTransform = this.tryFindTileTransformForPoint(pointFilteredTray, layout.getTilesLayout(), randomPoint);
            if (tileTransform != null) {
                this.addTile(layout, pointFilteredTray, tileTransform);
                return true;
            }
        }

        return false;
    }

    private TryMoveTile(layout: PossibleLayout, pointFilteredTray: SectionPointFilteredTray): boolean {
        throw new Error();
    }

    private TryRotateTile(layout: PossibleLayout, pointFilteredTray: SectionPointFilteredTray): boolean {
        throw new Error();
    }

    private TryReplaceTile(layout: PossibleLayout, pointFilteredTray: SectionPointFilteredTray): boolean {
        throw new Error();
    }

    private tryFindTileTransformForPoint(
        pointFilteredTray: SectionPointFilteredTray,
        tilesInLayout: TileTransform[],
        randomPoint: Vector
    ): TileTransform {
        for (let i = 0; i < this.populationParams.countOfTriesToInsertTile; ++i) {
            const randomedTile: Tile = pointFilteredTray.randomTile();
            if (randomedTile == null) {
                break;
            }

            const tileTransform: TileTransform = new TileTransform(randomedTile, randomPoint, RandomHelper.nextFloat(0, 360));
            if (
                this.testIfTileMaintaininMarginDistance(
                    tileTransform,
                    new IterableUnion([this.neighbourTiles, tilesInLayout]),
                    this.section.parent.tileMargin
                )
            ) {
                return tileTransform;
            }
        }

        return null;
    }

    private testIfTileMaintaininMarginDistance(pretenderTile: GeometryObject, tilesToTest: Iterable<GeometryObject>, margin: number): boolean {
        for (const tile of tilesToTest) {
            if (!pretenderTile.isMaintainingMinimalDistance(tile, margin)) {
                return false;
            }
        }

        return true;
    }

    private testIfPointIsInsideTile(tilesToTest: Iterable<GeometryObject>, point: Vector): boolean {
        for (const tile of tilesToTest) {
            if (PresenceInPoligonHelper.isPointInsidePolygon(tile.getWorldVertices(), point)) {
                return true;
            }
        }

        return false;
    }

    private getMinDistanceToNeighbourTiles(tilesToTest: IterableUnion<GeometryObject>, point: Vector): number | null {
        let minDistance: number | null = null;
        for (const tile of tilesToTest) {
            const distance: number = PointToPolygonDistanceCalculator.calculatePointToPolygonDistance(point, tile.getWorldVertices());

            if (!minDistance || distance < minDistance) minDistance = distance;
        }

        return minDistance;
    }

    private addTile(layout: PossibleLayout, pointFilteredTray: SectionPointFilteredTray, tileTransform: TileTransform): void {
        pointFilteredTray?.markTileUsed(tileTransform.tile);
        layout.layoutTilesRates.set(tileTransform, this.evaluator.rateTile(tileTransform));
    }
}
