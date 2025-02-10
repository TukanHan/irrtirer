using System.Collections.Generic;

namespace Irrtirer.Generator.Tiles
{
    internal class TileInnerRadiusComparer : IComparer<Tile>
    {
        public static TileInnerRadiusComparer Instance { get; } = new TileInnerRadiusComparer();

        public int Compare(Tile a, Tile b)
        {
            return a.InnerRadius.CompareTo(b.InnerRadius);
        }
    }
}
