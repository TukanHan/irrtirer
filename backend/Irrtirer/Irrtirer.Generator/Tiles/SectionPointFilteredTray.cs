using Irrtirer.Generator.Helpers;
using System;
using System.Collections.Generic;
using System.Drawing;

namespace Irrtirer.Generator.Tiles
{
    internal class SectionPointFilteredTray
    {
        internal class SectionPointTrayFilter
        {
            public float MaxInnerRadius { get; set; }
            public Color PreferredColor { get; set; }
            public int CountOfColorMatchingAttempts { get; set; }

            public SectionPointTrayFilter() { }

            public SectionPointTrayFilter(float maxInnerRadius, Color preferredColor, int countOfColorMatchingAttempts)
            {
                MaxInnerRadius = maxInnerRadius;
                PreferredColor = preferredColor;
                CountOfColorMatchingAttempts = countOfColorMatchingAttempts;
            }
        }

        private readonly Tile[] tilesForSection;
        private readonly HashSet<int> usedTilesIndexes;
        private readonly Random random;

        private SectionPointTrayFilter filter;
        private int indexOfMaxMatchingInnerRadius;
        private int countOfMatchingInnerRadiusTiles;

        public SectionPointFilteredTray(Random random, Tile[] tilesForSection, HashSet<int> usedTilesIndexes)
        {
            this.random = random;
            this.tilesForSection = tilesForSection;
            this.usedTilesIndexes = usedTilesIndexes;
        }

        public void SetFilterForPoint(SectionPointTrayFilter filter)
        {
            this.filter = filter;
            indexOfMaxMatchingInnerRadius = SearchIndexOfMaxMatchingInnerRadius(0, tilesForSection.Length - 1, filter.MaxInnerRadius);
            countOfMatchingInnerRadiusTiles = indexOfMaxMatchingInnerRadius + 1;
        }

        public Tile RandomTile()
        {
            if (indexOfMaxMatchingInnerRadius == -1)
            {
                return null;
            }

            Tile mostSuitableColorTile = null;
            float mostSuitableTileColorDifference = float.PositiveInfinity;

            int index = random.Next(0, countOfMatchingInnerRadiusTiles);
            int countOfTriesToInsertTile = Math.Min(filter.CountOfColorMatchingAttempts, countOfMatchingInnerRadiusTiles);

            int currentProbeIndex = 0;
            int currentIteration = 0;
            while (currentProbeIndex < countOfTriesToInsertTile && currentIteration < countOfMatchingInnerRadiusTiles)
            {
                if (index > indexOfMaxMatchingInnerRadius)
                    index = 0;

                if (!usedTilesIndexes.Contains(index))
                {
                    Tile tile = tilesForSection[index];
                    float colorDifference = ColorHelper.ComparisonWithWeight(this.filter.PreferredColor, tile.Color);

                    if (colorDifference < mostSuitableTileColorDifference)
                    {
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

        public void MarkTileUsed(Tile usedTile)
        {
            int index = Array.BinarySearch(tilesForSection, usedTile, TileInnerRadiusComparer.Instance);
            usedTilesIndexes.Add(index);
        }

        public void ReleaseTile(Tile releasedTile)
        {
            int index = Array.BinarySearch(tilesForSection, releasedTile, TileInnerRadiusComparer.Instance);
            usedTilesIndexes.Remove(index);
        }

        public bool HasAnyAvailableTiles()
        {
            return usedTilesIndexes.Count < tilesForSection.Length;
        }

        private int SearchIndexOfMaxMatchingInnerRadius(int startIndex, int endIndex, float searchedMaxValue)
        {
            if (startIndex == endIndex)
            {
                return tilesForSection[startIndex].InnerRadius <= searchedMaxValue ? startIndex : -1;
            }

            int mid_idx = startIndex + (endIndex - startIndex) / 2;

            if (searchedMaxValue < tilesForSection[mid_idx].InnerRadius)
            {
                return SearchIndexOfMaxMatchingInnerRadius(startIndex, mid_idx, searchedMaxValue);
            }
                
            int ret = SearchIndexOfMaxMatchingInnerRadius(mid_idx + 1, endIndex, searchedMaxValue);
            return ret == -1 ? mid_idx : ret;
        }
    }
}
