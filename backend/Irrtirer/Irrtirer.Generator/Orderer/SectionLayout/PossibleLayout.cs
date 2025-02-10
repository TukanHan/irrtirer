using Irrtirer.Generator.MosaicStructure;
using Irrtirer.Generator.Tiles;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Irrtirer.Generator.Orderer.SectionLayout
{
    internal class PossibleLayout : ICloneable
    {
        public SectionModel Section { get; private set; }

        public float Rate { get; set; } = float.MinValue;

        public LayoutTilesRate LayoutTilesRates { get; private set; } = new LayoutTilesRate();
        public List<TileTransform> TilesLayout { get { return LayoutTilesRates.Keys.ToList(); } }

        public HashSet<int> UsedTilesIndexes { get; set; }
        public Tile[] TilesAvalibleForLayout { get; set; }

        private PossibleLayout() { }

        public PossibleLayout(SectionModel section)
        {
            Section = section;
        }

        public object Clone()
        {
            return new PossibleLayout()
            {
                Section = Section,
                Rate = Rate,
                LayoutTilesRates = (LayoutTilesRate)LayoutTilesRates.Clone(),
                UsedTilesIndexes = UsedTilesIndexes.ToHashSet(),
                TilesAvalibleForLayout = TilesAvalibleForLayout
            };
        }
    }
}
