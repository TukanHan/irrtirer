using Irrtirer.Generator.Models.GenerationParams;
using Irrtirer.Library.Models;

namespace Irrtirer.Models
{
    public class InitMosaicGenerationRequest
    {
        public required string Base64Image { get; set; }
        public required float MosaicWidth { get; set; }
        public required SectorGenerationParams[] SectorsGenerationParams { get; set; }
    }

    public class SectorGenerationParams
    {
        public required SectorTriangulationModel TriangulationData { get; set; }
        public required EvaluationParams EvaluationParams { get; set; }
        public required PopulationParams PopulationParams { get; set; }

        public required float TileMinRadius { get; set; }
        public required float TileMaxRadius { get; set; }
        public required float TileMargin { get; set; }
    }
}
