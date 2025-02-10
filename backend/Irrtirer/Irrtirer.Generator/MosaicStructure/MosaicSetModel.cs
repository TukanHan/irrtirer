using System.Collections.Generic;
using System.Linq;

namespace Irrtirer.Generator.MosaicStructure
{
    public class MosaicSetModel
    {
        public SectorModel[] Sectors { get; set; }

        internal IEnumerable<TileTransform> MosaicSetTiles
        {
            get
            {
                return Sectors.SelectMany(x => x.SectorTiles);
            }
        }
    }
}
