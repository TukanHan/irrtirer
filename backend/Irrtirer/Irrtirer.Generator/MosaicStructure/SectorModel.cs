using Irrtirer.Generator.Models.GenerationParams;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace Irrtirer.Generator.MosaicStructure
{
    public class SectorModel
    {
        public float TileMinRadius { get; set; }
        public float TileMaxRadius { get; set; }
        public float TileMargin { get; set; }

        public EvaluationParams EvaluationParams { get; set; }
        public PopulationParams PopulationParams { get; set; }

        public Vector2[] Contour { get; set; }

        public SectionModel[] Sections { get; set; }

        internal IEnumerable<TileTransform> SectorTiles
        {
            get
            {
                return Sections
                    .Where(section => section.WasGenerated)
                    .SelectMany(section => section.DirectTiles);
            }
        }
    }
}
