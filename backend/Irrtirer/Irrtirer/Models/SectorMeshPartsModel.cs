using Irrtirer.Library.Models;
using System.Numerics;

namespace Irrtirer.Models
{
    public class SectorMeshPartsModel
    {
        public required IEnumerable<SectorMeshModel> Parts { get; set; }
    }

    public class SectorMeshModel
    {
        public required Triangle[] Triangles { get; set; }
        public required Vector2[] Contour { get; set; }
    }
}
