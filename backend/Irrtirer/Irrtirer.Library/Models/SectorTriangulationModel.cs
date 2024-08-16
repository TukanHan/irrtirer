using System.Numerics;

namespace Irrtirer.Library.Models
{
    public class SectorTriangulationModel
    {
        public Vector2[] PolygonVertices { get; set; }
        public float SectionMaxArea { get; set; }
        public float SectionMinAngle { get; set; }
    }
}
