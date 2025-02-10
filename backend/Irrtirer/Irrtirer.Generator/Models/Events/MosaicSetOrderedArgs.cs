using System;
using System.Collections.Generic;

namespace Irrtirer.Generator.Models.Events
{
    public class MosaicSetOrderedArgs : EventArgs
    {
        public IEnumerable<TileTransformResult> Tiles { get; set; }
    }
}
