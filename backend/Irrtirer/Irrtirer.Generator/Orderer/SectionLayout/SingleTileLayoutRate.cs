using Irrtirer.Generator.MosaicStructure;
using System;
using System.Collections.Generic;

namespace Irrtirer.Generator.Orderer.SectionLayout
{
    internal class SingleTileLayoutRate : ICloneable
    {
        public Dictionary<SectionModel, float> SectionsOcupance { get; private set; } = new Dictionary<SectionModel, float>();

        public float SectorOccupance { get; set; }

        public float DifferenceForTile { get; set; }
        public float CountForTile { get; set; }

        public object Clone()
        {
            return new SingleTileLayoutRate()
            {
                SectionsOcupance = SectionsOcupance,
                SectorOccupance = SectorOccupance,
                DifferenceForTile = DifferenceForTile,
                CountForTile = CountForTile
            };
        }
    }
}
