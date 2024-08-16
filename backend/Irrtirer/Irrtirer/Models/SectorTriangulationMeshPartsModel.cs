using System.Numerics;

namespace Irrtirer.Models
{
    public class SectorTriangulationMeshPartsModel
    {
        public required IEnumerable<SectorTriangulationMeshModel> Parts { get; set; }
    }

    public class SectorTriangulationMeshModel
    {
        public required IEnumerable<IEnumerable<Vector2>> Triangles { get; set; }
    }
}
