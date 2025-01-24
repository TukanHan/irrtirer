import { ArrayHelpers } from '../../../core/helpers/array-helpers';
import { ColorHelper } from '../../../core/helpers/color-helper';
import { RandomHelper } from '../../../core/helpers/random-helper';
import { Color } from '../../../core/models/color.model';
import { Tile } from '../models/tile';
import { tileInnerRadiusComparsion } from './tile-inner-radius-comparer';

export interface SectionPointTrayFilter {
    maxInnerRadius: number;
    preferredColor: Color;
    countOfColorMatchingAttempts: number;
}

export class SectionPointFilteredTray {
    private readonly tilesForSection: Tile[];
    private readonly usedTilesIndexes: Set<number>;

    private filter: SectionPointTrayFilter;
    private indexOfMaxMatchingInnerRadius: number;
    private countOfMatchingInnerRadiusTiles: number;

    public constructor(tilesForSection: Tile[], usedTilesIndexes: Set<number>) {
        this.tilesForSection = tilesForSection;
        this.usedTilesIndexes = usedTilesIndexes;
    }

    public setFilterForPoint(filter: SectionPointTrayFilter): void {
        this.filter = filter;
        this.indexOfMaxMatchingInnerRadius = this.searchIndexOfMaxMathingInnerRadius(0, this.tilesForSection.length - 1, filter.maxInnerRadius);
        this.countOfMatchingInnerRadiusTiles = this.indexOfMaxMatchingInnerRadius + 1;
    }

    public randomTile(): Tile {
        if (this.indexOfMaxMatchingInnerRadius == -1) {
            return null;
        }

        let mostSuitableColorTile: Tile = null;
        let mostSuitableTileColorDifference: number = Number.MAX_VALUE;

        let index: number = RandomHelper.nextInt(0, this.countOfMatchingInnerRadiusTiles);
        const countOfTriesToInsertTile: number = Math.min(this.filter.countOfColorMatchingAttempts, this.countOfMatchingInnerRadiusTiles);

        let currentProbeIndex = 0;
        let currentIteration = 0;
        while (currentProbeIndex < countOfTriesToInsertTile && currentIteration < this.countOfMatchingInnerRadiusTiles) {
            if (index > this.indexOfMaxMatchingInnerRadius) {
                index = 0;
            }

            if (!this.usedTilesIndexes.has(index)) {
                const tile: Tile = this.tilesForSection[index];
                const colorDifference: number = ColorHelper.comarsionWithWeight(this.filter.preferredColor, tile.color);

                if (colorDifference < mostSuitableTileColorDifference) {
                    mostSuitableTileColorDifference = colorDifference;
                    mostSuitableColorTile = tile;
                }

                ++currentProbeIndex;
            }

            ++index;
            ++currentIteration;
        }

        return mostSuitableColorTile;
    }

    public markTileUsed(usedTile: Tile): void {
        const index: number = ArrayHelpers.binarySearch(this.tilesForSection, usedTile, tileInnerRadiusComparsion);
        this.usedTilesIndexes.add(index);
    }

    public hasAnyAvailableTiles(): boolean {
        return this.usedTilesIndexes.size < this.tilesForSection.length;
    }

    private searchIndexOfMaxMathingInnerRadius(startIndex: number, endIndex: number, searchedMaxValue: number): number {
        if (startIndex == endIndex) {
            return this.tilesForSection[startIndex].innerRadius <= searchedMaxValue ? startIndex : -1;
        }

        const mid_idx: number = Math.floor(startIndex + (endIndex - startIndex) / 2);

        if (searchedMaxValue < this.tilesForSection[mid_idx].innerRadius) {
            return this.searchIndexOfMaxMathingInnerRadius(startIndex, mid_idx, searchedMaxValue);
        }

        const ret: number = this.searchIndexOfMaxMathingInnerRadius(mid_idx + 1, endIndex, searchedMaxValue);
        return ret == -1 ? mid_idx : ret;
    }
}
