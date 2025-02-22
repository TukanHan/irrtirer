using System.Collections.Generic;
using System.Linq;

namespace Irrtirer.Generator.Tiles
{
    internal class SectorTileTray
    {
        internal class SectionTrayFilter
        {
            public float MinRadius { get; set; }
            public float MaxRadius { get; set; }

            public SectionTrayFilter() { }

            public SectionTrayFilter(float minRadius, float maxRadius)
            {
                MinRadius = minRadius;
                MaxRadius = maxRadius;
            }
        }

        private readonly List<Tile> availableTiles;

        public SectorTileTray(IEnumerable<Tile> inputTileSet, SectionTrayFilter filter)
        {
            availableTiles = inputTileSet
                .Where(tile => IsTileMatching(tile, filter))
                .OrderBy((tile) => tile, TileInnerRadiusComparer.Instance)
                .ToList();
        }

        public Tile[] GetAvailableTilesForSector()
        {
            return availableTiles.ToArray();
        }

        public void RemoveTiles(IEnumerable<Tile> tiles)
        {
            foreach (var tile in tiles)
            {
                availableTiles.RemoveAt(availableTiles.BinarySearch(tile, TileInnerRadiusComparer.Instance));
            }
        }

        private bool IsTileMatching(Tile tile, SectionTrayFilter filter)
        {
            if (tile.OuterRadius < filter.MinRadius || tile.OuterRadius > filter.MaxRadius)
            {
                return false;
            }

            return true;
        }
    }
}
