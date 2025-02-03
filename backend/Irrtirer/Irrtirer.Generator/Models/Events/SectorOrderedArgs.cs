using System;
using System.Collections.Generic;

namespace Irrtirer.Generator.Models.Events
{
    public class SectorOrderedArgs : EventArgs
    {
        public Guid SectorId { get; set; }
        public IEnumerable<TileTransformResult> Tiles { get; set; }
    }
}
