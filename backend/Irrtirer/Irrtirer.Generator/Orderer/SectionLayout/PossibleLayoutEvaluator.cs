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
        private readonly BlurredImageObject pixelSource;
        private readonly SectionModel section;

        public PossibleLayoutEvaluator(EvaluationParams evaluationParams, BlurredImageObject pixelSource, SectionModel section)
        {
            this.evaluationParams = evaluationParams;
            this.pixelSource = pixelSource;
            this.section = section;
        }

        public float Evaluate(PossibleLayout possibleLayout)
        {
            float sectionSpaceOccupanceRate = EvaluateCurrentSectionPopulation(possibleLayout) * evaluationParams.SingleSectionPopulation;
            float sectorSpaceOverlappingPenalty = EvaluateOverlappingAreaOutsideSector(possibleLayout) * evaluationParams.OverlappingAreaOutsideSector;
            float c = EvaluateAdditionalPopulationOfNeighboringSectors(possibleLayout) * evaluationParams.AdditionalPopulationOfNeighboringSectors;
            float d = EvaluateOverlappingNotPopulatedSections(possibleLayout) * evaluationParams.OverlappingNotPopulatedSections;
            float tileColorMismatchPenalty = EvaluateColorMismatch(possibleLayout) * evaluationParams.TileColorMismatch;

            return sectionSpaceOccupanceRate + sectorSpaceOverlappingPenalty + c + d + tileColorMismatchPenalty;
        }

        private float EvaluateCurrentSectionPopulation(PossibleLayout possibleLayout)
        {
            float neighborsTilesArea = possibleLayout.Section.Intersections.IntersectionArea;
            float directTilesArea = possibleLayout.LayoutTilesRates.GetSectionOccupance(possibleLayout.Section);
            return (neighborsTilesArea + directTilesArea) / possibleLayout.Section.Triangle.Area;
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
            IEnumerable<SectionModel> generatedSectionNeighbors = possibleLayout
                .Section
                .Neighbors
                .Where(s => s.WasGenerated && s.Parent == possibleLayout.Section.Parent);

            float totalUtilization = 0;
            float totalArea = 0;

            foreach (SectionModel neighbor in generatedSectionNeighbors)
            {
                float sectionOccupance = possibleLayout.LayoutTilesRates.GetSectionOccupance(neighbor);
                float possibleSectorUtilization = neighbor.Intersections.IntersectionArea + sectionOccupance;
                totalUtilization += possibleSectorUtilization;
                totalArea += neighbor.Triangle.Area;
            }

            return totalArea == 0 ? 0 : totalUtilization / totalArea;
        }

        private float EvaluateOverlappingNotPopulatedSections(PossibleLayout possibleLayout)
        {
            IEnumerable<SectionModel> notPopulatedSectionNeighbors = possibleLayout
                .Section
                .Neighbors
                .Where(s => !s.WasGenerated && s.Parent == possibleLayout.Section.Parent);

            float intrusionArea = 0;
            float totalArea = 0;

            foreach (SectionModel neighbor in notPopulatedSectionNeighbors)
            {
                intrusionArea += possibleLayout.LayoutTilesRates.GetSectionOccupance(neighbor);
                totalArea += neighbor.Triangle.Area;
            }

            return totalArea == 0 ? 0 : intrusionArea / totalArea;
        }

        private float EvaluateColorMismatch(PossibleLayout possibleLayout)
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
            foreach (SectionModel neighborSection in section.GetNeighborsAndSelf())
            {
                float intersectionArea = tileTransform.GetIntersectionArea(neighborSection);
                if (intersectionArea > 0)
                {
                    tileRate.SectionsOccupancy[neighborSection] = intersectionArea;
                    if (neighborSection.Parent == section.Parent)
                    {
                        tileRate.SectorOccupance += intersectionArea;
                    }
                }
            }

            RateTileColorMismatch(tileTransform, out float differenceForTile, out float countForTile);
            tileRate.DifferenceForTile = differenceForTile;
            tileRate.CountForTile = countForTile;

            return tileRate;
        }

        private void RateTileColorMismatch(TileTransform transformedTile, out float differenceForTile, out float countForTile)
        {
            differenceForTile = countForTile = 0;

            foreach (Vector2 vertex in transformedTile.GetWorldVertices().Union(new Vector2[] { transformedTile.Position }))
            {
                Color? vertexPreferredColor = pixelSource.GetPictureColorAtPosition(vertex);
                if (vertexPreferredColor.HasValue)
                {
                    differenceForTile += ColorHelper.CompareColorsSqrt(vertexPreferredColor.Value, transformedTile.Tile.Color);
                    countForTile++;
                }
            }
        }
    }
}
