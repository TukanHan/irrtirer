import { ColorHelper, MaxDifferenceSqrt } from '../../../../core/helpers/color-helper';
import { IterableUnion } from '../../../../core/helpers/iterable-union';
import { Color } from '../../../../core/models/color.model';
import { BluredImageObject } from '../../color-compatibility/blured-image-object.model';
import { TileTransform } from '../../models/tile-transform.model';
import { EvaluationParams } from '../../sectors/generation-params/evaluation-params.interface';
import { SectionModel } from '../../sectors/section.model';
import { PossibleLayout } from './possible-layout';
import { SingleTileLayoutRate } from './single-tile-layout-rate.model';

export class PossibleLayoutEvaluator {
    public constructor(private evaluationParams: EvaluationParams, private pixelSource: BluredImageObject, private section: SectionModel) {}

    public evaluate(possibleLayout: PossibleLayout): number {
        const sectionSpaceOccupanceRate: number =
            this.evaluateCurrentSectionPopulation(possibleLayout) * this.evaluationParams.singleSectionPopulation;
        const sectorSpaceOverlappingPentality: number =
            this.evaluateOverlappingAreaOutsideSector(possibleLayout) * this.evaluationParams.overlappingAreaOutsideSector;
        const additionalPopulationOfNeighboringSectorsRate: number =
            this.evaluateAdditionalPopulationOfNeighboringSectors(possibleLayout) * this.evaluationParams.additionalPopulationOfNeighboringSectors;
        const overlappingNotPopulatedSectionsPentality: number =
            this.evaluateOverlappingNotPopulatedSections(possibleLayout) * this.evaluationParams.overlappingNotPopulatedSections;
        const tileColorMismatchPentality: number = this.evaluateColorMismath(possibleLayout) * this.evaluationParams.tileColorMismatch;

        return (
            sectionSpaceOccupanceRate +
            sectorSpaceOverlappingPentality +
            additionalPopulationOfNeighboringSectorsRate +
            overlappingNotPopulatedSectionsPentality +
            tileColorMismatchPentality
        );
    }

    private evaluateCurrentSectionPopulation(possibleLayout: PossibleLayout): number {
        const neighboursTilesArea: number = possibleLayout.section.intersections.intersectionArea;
        const directTilesArea: number = possibleLayout.layoutTilesRates.getSectionOccupance(possibleLayout.section);
        return (neighboursTilesArea + directTilesArea) / possibleLayout.section.triangle.area;
    }

    private evaluateOverlappingAreaOutsideSector(possibleLayout: PossibleLayout): number {
        let areaOutsideSector: number = 0;
        let totalArea: number = 0;
        for (const tilesRates of possibleLayout.layoutTilesRates) {
            const transformedTile: TileTransform = tilesRates[0];

            areaOutsideSector += transformedTile.getArea() - tilesRates[1].sectorOccupance;
            totalArea += transformedTile.getArea();
        }

        return totalArea == 0 ? 0 : areaOutsideSector / totalArea;
    }

    private evaluateAdditionalPopulationOfNeighboringSectors(possibleLayout: PossibleLayout): number {
        const generatedSectionNeighbours: SectionModel[] = possibleLayout.section.neighbours.filter(
            (s) => s.wasGenerated && s.parent.id === possibleLayout.section.parent.id
        );

        let totalUtilization: number = 0;
        let totalArea: number = 0;

        for (const neighbour of generatedSectionNeighbours) {
            const sectionOccupance: number = possibleLayout.layoutTilesRates.getSectionOccupance(neighbour);
            const possibleSectorUtilization: number = neighbour.intersections.intersectionArea + sectionOccupance;
            totalUtilization += possibleSectorUtilization;
            totalArea += neighbour.triangle.area;
        }

        return totalArea == 0 ? 0 : totalUtilization / totalArea;
    }

    private evaluateOverlappingNotPopulatedSections(possibleLayout: PossibleLayout): number {
        const notPopulatedSectionNeighbours: SectionModel[] = possibleLayout.section.neighbours.filter(
            (s: SectionModel) => !s.wasGenerated && s.parent.id === possibleLayout.section.parent.id
        );

        let intrusionArea: number = 0;
        let totalArea: number = 0;

        for (const neighbour of notPopulatedSectionNeighbours) {
            intrusionArea += possibleLayout.layoutTilesRates.getSectionOccupance(neighbour);
            totalArea += neighbour.triangle.area;
        }

        return totalArea == 0 ? 0 : intrusionArea / totalArea;
    }

    private evaluateColorMismath(possibleLayout: PossibleLayout): number {
        let accumulatedDifference: number = 0;

        if (!possibleLayout.layoutTilesRates.any()) {
            return accumulatedDifference;
        }

        for (const tileRates of possibleLayout.layoutTilesRates.getValues()) {
            accumulatedDifference += tileRates.differenceForTile / (MaxDifferenceSqrt * tileRates.countForTile);
        }

        return accumulatedDifference / possibleLayout.layoutTilesRates.size;
    }

    public rateTile(tileTransform: TileTransform): SingleTileLayoutRate {
        const tileRate: SingleTileLayoutRate = new SingleTileLayoutRate();
        for (const neighbourSection of [this.section, ...this.section.neighbours]) {
            const intersectionArea: number = tileTransform.getIntersectionArea(neighbourSection);
            if (intersectionArea > 0) {
                tileRate.sectionsOcupance.set(neighbourSection, intersectionArea);
                if (neighbourSection.parent == this.section.parent) {
                    tileRate.sectorOccupance += intersectionArea;
                }
            }
        }

        const { differenceForTile, countForTile } = this.rateTileColorMismath(tileTransform);
        tileRate.differenceForTile = differenceForTile;
        tileRate.countForTile = countForTile;

        return tileRate;
    }

    private rateTileColorMismath(transformedTile: TileTransform): { differenceForTile: number; countForTile: number } {
        let differenceForTile = 0,
            countForTile = 0;

        for (const vertex of new IterableUnion([transformedTile.getWorldVertices(), [transformedTile.position]])) {
            const vertexPrefferedColor: Color = this.pixelSource.getPictureColorAtPosition(vertex);
            if (vertexPrefferedColor) {
                differenceForTile += ColorHelper.compareColorsSqrt(vertexPrefferedColor, transformedTile.tile.color);
                countForTile++;
            }
        }

        return {
            differenceForTile,
            countForTile,
        };
    }
}
