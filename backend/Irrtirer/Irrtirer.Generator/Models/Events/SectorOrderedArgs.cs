using System;
using System.Collections.Generic;

namespace Irrtirer.Generator.Models.Events
{
    public class SectorOrderedArgs : EventArgs
    {
        public IEnumerable<TileTransformResult> Tiles { get; set; }
    }
}
