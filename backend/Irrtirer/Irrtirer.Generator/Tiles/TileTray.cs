using System.Collections.Generic;

namespace Irrtirer.Generator.Tiles
{
    public class TileTray
    {
        private readonly HashSet<Tile> availableTiles;
        private readonly HashSet<Tile> unavailableTiles;

        public TileTray(IEnumerable<Tile> tiles)
        {
            this.availableTiles = new HashSet<Tile>(tiles);
            this.unavailableTiles = new HashSet<Tile>();
        }

        public IEnumerable<Tile> GetAvailableTilesForMosaicSet()
        {
            return availableTiles;
        }

        public void RemoveTiles(IEnumerable<Tile> tiles)
        {
            foreach (Tile tile in tiles)
            {
                availableTiles.Remove(tile);
                unavailableTiles.Add(tile);
            }
        }
    }
}
