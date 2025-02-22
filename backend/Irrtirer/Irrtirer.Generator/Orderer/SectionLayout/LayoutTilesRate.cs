using Irrtirer.Generator.MosaicStructure;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Irrtirer.Generator.Orderer.SectionLayout
{
    internal class LayoutTilesRate : Dictionary<TileTransform, SingleTileLayoutRate>, ICloneable
    {
        public float GetSectionOccupance(SectionModel section)
        {
            return this.Values.Sum(x => x.SectionsOccupancy.TryGetValue(section, out float occupance) ? occupance : 0);
        }

        public object Clone()
        {
            LayoutTilesRate cloned = new LayoutTilesRate();

            foreach (var keyPair in this)
            {
                cloned[keyPair.Key] = keyPair.Value;
            }

            return cloned;
        }
    }
}
