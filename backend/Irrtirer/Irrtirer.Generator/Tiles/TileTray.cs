using System.Collections.Generic;

namespace Irrtirer.Generator.Tiles
{
    public class TileTray
    {
        private readonly HashSet<Tile> avalibleTiles;
        private readonly HashSet<Tile> unavalibleTiles;

        public TileTray(IEnumerable<Tile> tiles)
        {
            this.avalibleTiles = new HashSet<Tile>(tiles);
            this.unavalibleTiles = new HashSet<Tile>();
        }

        public IEnumerable<Tile> GetAvalibleTilesForMosaicSet()
        {
            return avalibleTiles;
        }

        public void RemoveTiles(IEnumerable<Tile> tiles)
        {
            foreach (Tile tile in tiles)
            {
                avalibleTiles.Remove(tile);
                unavalibleTiles.Add(tile);
            }
        }
    }
}
