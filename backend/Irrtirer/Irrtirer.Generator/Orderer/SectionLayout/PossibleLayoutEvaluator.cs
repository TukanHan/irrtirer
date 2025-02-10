using Irrtirer.Generator.ColorCompatibility;
using Irrtirer.Generator.Helpers;
using Irrtirer.Generator.Models.GenerationParams;
using Irrtirer.Generator.MosaicStructure;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Numerics;

namespace Irrtirer.Generator.Orderer.SectionLayout
{
    internal class PossibleLayoutEvaluator
    {
        private readonly EvaluationParams evaluationParams;
        private readonly BluredImageObject pixelSource;
        private readonly SectionModel section;

        public PossibleLayoutEvaluator(EvaluationParams evaluationParams, BluredImageObject pixelSource, SectionModel section)
        {
            this.evaluationParams = evaluationParams;
            this.pixelSource = pixelSource;
            this.section = section;
        }

        public float Evaluate(PossibleLayout possibleLayout)
        {
            float sectionSpaceOccupanceRate = EvaluateCurrentSectionPopulation(possibleLayout) * evaluationParams.SingleSectionPopulation;
            float sectorSpaceOverlappingPentality = EvaluateOverlappingAreaOutsideSector(possibleLayout) * evaluationParams.OverlappingAreaOutsideSector;
            float c = EvaluateAdditionalPopulationOfNeighboringSectors(possibleLayout) * evaluationParams.AdditionalPopulationOfNeighboringSectors;
            float d = EvaluateOverlappingNotPopulatedSections(possibleLayout) * evaluationParams.OverlappingNotPopulatedSections;
            float tileColorMismatchPentality = EvaluateColorMismath(possibleLayout) * evaluationParams.TileColorMismatch;

            return sectionSpaceOccupanceRate + sectorSpaceOverlappingPentality + c + d + tileColorMismatchPentality;
        }

        private float EvaluateCurrentSectionPopulation(PossibleLayout possibleLayout)
        {
            float neighboursTilesArea = possibleLayout.Section.Intersections.IntersectionArea;
            float directTilesArea = possibleLayout.LayoutTilesRates.GetSectionOccupance(possibleLayout.Section);
            return (neighboursTilesArea + directTilesArea) / possibleLayout.Section.Triangle.Area;
        }

        private float EvaluateOverlappingAreaOutsideSector(PossibleLayout possibleLayout)
        {
            float areaOutsideSector = 0;
            float totalArea = 0;
            foreach (var tilesRates in possibleLayout.LayoutTilesRates)
            {
                TileTransform transformedTile = tilesRates.Key;

                areaOutsideSector += transformedTile.Area - tilesRates.Value.SectorOccupance;
                totalArea += transformedTile.Area;
            }

            return totalArea == 0 ? 0 : areaOutsideSector / totalArea;
        }

        private float EvaluateAdditionalPopulationOfNeighboringSectors(PossibleLayout possibleLayout)
        {
            IEnumerable<SectionModel> generatedSectionNeighbours = possibleLayout
                .Section
                .Neighbours
                .Where(s => s.WasGenerated && s.Parent == possibleLayout.Section.Parent);

            float totalUtilization = 0;
            float totalArea = 0;

            foreach (SectionModel neighbour in generatedSectionNeighbours)
            {
                float sectionOccupance = possibleLayout.LayoutTilesRates.GetSectionOccupance(neighbour);
                float possibleSectorUtilization = neighbour.Intersections.IntersectionArea + sectionOccupance;
                totalUtilization += possibleSectorUtilization;
                totalArea += neighbour.Triangle.Area;
            }

            return totalArea == 0 ? 0 : totalUtilization / totalArea;
        }

        private float EvaluateOverlappingNotPopulatedSections(PossibleLayout possibleLayout)
        {
            IEnumerable<SectionModel> notPopulatedSectionNeighbours = possibleLayout
                .Section
                .Neighbours
                .Where(s => !s.WasGenerated && s.Parent == possibleLayout.Section.Parent);

            float intrusionArea = 0;
            float totalArea = 0;

            foreach (SectionModel neighbour in notPopulatedSectionNeighbours)
            {
                intrusionArea += possibleLayout.LayoutTilesRates.GetSectionOccupance(neighbour);
                totalArea += neighbour.Triangle.Area;
            }

            return totalArea == 0 ? 0 : intrusionArea / totalArea;
        }

        private float EvaluateColorMismath(PossibleLayout possibleLayout)
        {
            float accumulatedDifference = 0;

            if (!possibleLayout.LayoutTilesRates.Any())
            {
                return accumulatedDifference;
            }

            foreach (var tileRates in possibleLayout.LayoutTilesRates.Values)
            {
                accumulatedDifference += tileRates.DifferenceForTile / (ColorHelper.MaxDifferenceSqrt * tileRates.CountForTile);
            }

            return accumulatedDifference / possibleLayout.LayoutTilesRates.Count;
        }

        public SingleTileLayoutRate RateTile(TileTransform tileTransform)
        {
            SingleTileLayoutRate tileRate = new SingleTileLayoutRate();
            foreach (SectionModel neighbourSection in section.GetNeighboursAndSelf())
            {
                float intersectionArea = tileTransform.GetIntersectionArea(neighbourSection);
                if (intersectionArea > 0)
                {
                    tileRate.SectionsOcupance[neighbourSection] = intersectionArea;
                    if (neighbourSection.Parent == section.Parent)
                    {
                        tileRate.SectorOccupance += intersectionArea;
                    }
                }
            }

            RateTileColorMismath(tileTransform, out float differenceForTile, out float countForTile);
            tileRate.DifferenceForTile = differenceForTile;
            tileRate.CountForTile = countForTile;

            return tileRate;
        }

        private void RateTileColorMismath(TileTransform transformedTile, out float differenceForTile, out float countForTile)
        {
            differenceForTile = countForTile = 0;

            foreach (Vector2 vertex in transformedTile.GetWorldVertices().Union(new Vector2[] { transformedTile.Position }))
            {
                Color? vertexPrefferedColor = pixelSource.GetPictureColorAtPosition(vertex);
                if (vertexPrefferedColor.HasValue)
                {
                    differenceForTile += ColorHelper.CompareColorsSqrt(vertexPrefferedColor.Value, transformedTile.Tile.Color);
                    countForTile++;
                }
            }
        }
    }
}
