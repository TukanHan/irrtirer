using Irrtirer.Generator.ColorCompatibility;
using Irrtirer.Generator.Helpers.PolygonHelpers;
using Irrtirer.Generator.Helpers;
using Irrtirer.Generator.Models.GenerationParams;
using Irrtirer.Generator.MosaicStructure;
using Irrtirer.Generator.Tiles;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Numerics;
using static Irrtirer.Generator.Tiles.SectionPointFilteredTray;

namespace Irrtirer.Generator.Orderer.SectionLayout
{
    internal class SectionLayoutPreparer
    {
        private readonly SectionModel section;
        private readonly RandomFactory randomFactory;
        private readonly BlurredImageObject pixelSource;
        private readonly TileTransform[] neighborTiles;
        private readonly PopulationParams populationParams;
        private readonly PossibleLayoutEvaluator evaluator;

        public SectionLayoutPreparer(RandomFactory rnd, BlurredImageObject pixelSource, SectionModel section, TileTransform[] neighborTiles)
        {
            this.randomFactory = rnd;
            this.pixelSource = pixelSource;
            this.section = section;
            this.neighborTiles = neighborTiles;
            this.populationParams = section.Parent.PopulationParams;
            this.evaluator = new PossibleLayoutEvaluator(section.Parent.EvaluationParams, pixelSource, section);
        }

        public PossibleLayout CreateInitialLayout(Tile[] availableTiles)
        {
            PossibleLayout layout = new PossibleLayout(section)
            {
                UsedTilesIndexes = new HashSet<int>(),
                TilesAvailableForLayout = availableTiles
            };

            Random random = randomFactory.GetRandomObject();
            SectionPointFilteredTray pointFilteredTray = new SectionPointFilteredTray(random, availableTiles, layout.UsedTilesIndexes);

            for (int i = 0; i < populationParams.CountOfTrianglePositionDraws && pointFilteredTray.HasAnyAvailableTiles(); ++i)
            {
                TryAddTile(layout, pointFilteredTray, random);
            }

            layout.Rate = evaluator.Evaluate(layout);
            return layout;
        }

        public PossibleLayout ModifyLayout(PossibleLayout layout, int count)
        {
            Random random = randomFactory.GetRandomObject();
            SectionPointFilteredTray pointFilteredTray = new SectionPointFilteredTray(random, layout.TilesAvailableForLayout, layout.UsedTilesIndexes);

            for (int i = 0; i < count; ++i)
            {
                ModificationOperation possibleOperations = ModificationOperation.None;
                if (pointFilteredTray.HasAnyAvailableTiles())
                {
                    possibleOperations |= ModificationOperation.Add;
                }
                if (layout.LayoutTilesRates.Any())
                {
                    possibleOperations |= ModificationOperation.Transform;
                    possibleOperations |= ModificationOperation.Change;
                    possibleOperations |= ModificationOperation.Rotate;
                }

                ModificationOperation operation = random.RandomModificationOperation(possibleOperations);
                switch (operation)
                {
                    case ModificationOperation.Add:
                        TryAddTile(layout, pointFilteredTray, random);
                        break;
                    case ModificationOperation.Change:
                        TryReplaceTile(layout, pointFilteredTray, random);
                        break;
                    case ModificationOperation.Transform:
                        TryMoveTile(layout, pointFilteredTray, random);
                        break;
                    case ModificationOperation.Rotate:
                        TryRotateTile(layout, pointFilteredTray, random);
                        break;
                }
            }

            layout.Rate = evaluator.Evaluate(layout);
            return layout;
        }

        private bool TryAddTile(PossibleLayout layout, SectionPointFilteredTray pointFilteredTray, Random random)
        {
            Vector2 randomPoint = random.RandomPointInTriangle(section.Triangle.Vertices);
            if (!TestIfPointIsInsideTile(neighborTiles.Union(layout.TilesLayout), randomPoint))
            {
                pointFilteredTray.SetFilterForPoint(new SectionPointTrayFilter()
                {
                    MaxInnerRadius = GetMinDistanceToNeighborTiles(neighborTiles.Union(layout.TilesLayout), randomPoint) ?? float.MaxValue,
                    PreferredColor = pixelSource.GetPictureColorAtPosition(randomPoint) ?? Color.Transparent,
                    CountOfColorMatchingAttempts = populationParams.CountOfColorMatchingAttempts
                });

                TileTransform tileTransform = TryFindTileTransformForPoint(pointFilteredTray, layout.TilesLayout, randomPoint);
                if (tileTransform != null)
                {
                    AddTile(layout, pointFilteredTray, tileTransform);
                    return true;
                }
            }

            return false;
        }

        private bool TryMoveTile(PossibleLayout layout, SectionPointFilteredTray pointFilteredTray, Random random)
        {
            TileTransform tile = layout.LayoutTilesRates.ElementAt(random.Next(layout.LayoutTilesRates.Count)).Key;

            for (int i = 0; i < populationParams.CountOfTriesToInsertTile; ++i)
            {
                float newAngle = (tile.Angle + random.Next(-15, 15)) % 360;

                Vector2 newPosition;
                do
                {
                    newPosition = tile.Position + random.NextPointInsideCircle() * section.Parent.TileMinRadius / 100;
                }
                while (!PresenceInPolygonHelper.IsPointInsideTriangle(newPosition, section.Triangle.Vertices));

                TileTransform rotatedTile = tile.Transform(newPosition, newAngle);

                if (TestIfTileMaintainsMarginDistance(rotatedTile, neighborTiles.Union(layout.TilesLayout).Except(new[] { tile }), section.Parent.TileMargin))
                {
                    RemoveTile(layout, pointFilteredTray, tile);
                    AddTile(layout, pointFilteredTray, rotatedTile);
                    return true;
                }
            }

            return false;
        }

        private bool TryRotateTile(PossibleLayout layout, SectionPointFilteredTray pointFilteredTray, Random random)
        {
            TileTransform tile = layout.LayoutTilesRates.ElementAt(random.Next(layout.LayoutTilesRates.Count)).Key;

            for (int i = 0; i < populationParams.CountOfTriesToInsertTile; ++i)
            {
                TileTransform rotatedTile = tile.Transform(tile.Position, random.Next(0, 360));

                if (TestIfTileMaintainsMarginDistance(rotatedTile, neighborTiles.Union(layout.TilesLayout).Except(new[] { tile }), section.Parent.TileMargin))
                {
                    RemoveTile(layout, pointFilteredTray, tile);
                    AddTile(layout, pointFilteredTray, rotatedTile);
                    return true;
                }
            }

            return false;
        }

        private bool TryReplaceTile(PossibleLayout layout, SectionPointFilteredTray pointFilteredTray, Random random)
        {
            TileTransform tile = layout.LayoutTilesRates.ElementAt(random.Next(layout.LayoutTilesRates.Count)).Key;
            IEnumerable<TileTransform> tilesInLayoutWithoutReplaced = layout.TilesLayout.Except(new[] { tile });

            pointFilteredTray.SetFilterForPoint(new SectionPointTrayFilter()
            {
                MaxInnerRadius = GetMinDistanceToNeighborTiles(neighborTiles.Union(tilesInLayoutWithoutReplaced), tile.Position) ?? float.MaxValue,
                PreferredColor = pixelSource.GetPictureColorAtPosition(tile.Position) ?? Color.Transparent,
                CountOfColorMatchingAttempts = populationParams.CountOfColorMatchingAttempts
            });

            TileTransform tileTransform = TryFindTileTransformForPoint(pointFilteredTray, tilesInLayoutWithoutReplaced, tile.Position);
            if (tileTransform != null)
            {
                RemoveTile(layout, pointFilteredTray, tile);
                AddTile(layout, pointFilteredTray, tileTransform);
                return true;
            }

            return false;
        }

        private TileTransform TryFindTileTransformForPoint(SectionPointFilteredTray pointFilteredTray, IEnumerable<TileTransform> tilesInLayout, Vector2 randomPoint)
        {
            for (int i = 0; i < populationParams.CountOfTriesToInsertTile; ++i)
            {
                Tile drawnTile = pointFilteredTray.RandomTile();
                if (drawnTile == null)
                {
                    break;
                }

                TileTransform tileTransform = new TileTransform(drawnTile, randomPoint, randomFactory.Next(0, 360));
                if (TestIfTileMaintainsMarginDistance(tileTransform, neighborTiles.Union(tilesInLayout), section.Parent.TileMargin))
                {
                    return tileTransform;
                }
            }

            return null;
        }

        private bool TestIfTileMaintainsMarginDistance(GeometryObject pretenderTile, IEnumerable<GeometryObject> tilesToTest, float margin)
        {
            foreach (GeometryObject tile in tilesToTest)
            {
                if (!pretenderTile.IsMaintainingMinimalDistance(tile, margin))
                    return false;
            }

            return true;
        }

        private bool TestIfPointIsInsideTile(IEnumerable<GeometryObject> tilesToTest, Vector2 point)
        {
            foreach (GeometryObject tile in tilesToTest)
            {
                if (PresenceInPolygonHelper.IsPointInsidePolygon(tile.GetWorldVertices(), point))
                    return true;
            }

            return false;
        }

        private float? GetMinDistanceToNeighborTiles(IEnumerable<GeometryObject> tilesToTest, Vector2 point)
        {
            float? minDistance = null;
            foreach (GeometryObject tile in tilesToTest)
            {
                float distance = PointToPolygonDistanceCalculator.CalculatePointToPolygonDistance(point, tile.GetWorldVertices());

                if (!minDistance.HasValue || distance < minDistance.Value)
                    minDistance = distance;
            }

            return minDistance;
        }

        private void AddTile(PossibleLayout layout, SectionPointFilteredTray pointFilteredTray, TileTransform tileTransform)
        {
            pointFilteredTray?.MarkTileUsed(tileTransform.Tile);
            layout.LayoutTilesRates[tileTransform] = evaluator.RateTile(tileTransform);
        }

        private void RemoveTile(PossibleLayout layout, SectionPointFilteredTray pointFilteredTray, TileTransform tileTransform)
        {
            pointFilteredTray?.ReleaseTile(tileTransform.Tile);
            layout.LayoutTilesRates.Remove(tileTransform);
        }
    }
}
