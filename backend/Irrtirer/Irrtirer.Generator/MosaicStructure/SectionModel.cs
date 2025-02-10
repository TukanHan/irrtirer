using Irrtirer.Generator.Helpers.PolygonHelpers;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace Irrtirer.Generator.MosaicStructure
{
    public class SectionModel : GeometryObject
    {
        public SectorModel Parent { get; set; }
        public Triangle Triangle { get; }
        public SectionModel[] Neighbours { get; set; }

        internal List<TileTransform> DirectTiles { get; set; }
        internal Intersections Intersections { get; } = new Intersections();

        public bool WasGenerated { get { return DirectTiles != null; } }

        public override float OuterRadius { get; protected set; }
        public override float InnerRadius { get; protected set; }

        private readonly Vector2 centroid;

        public SectionModel(Triangle triangle)
        {
            this.Triangle = triangle;
            centroid = PolygonHelper.CalculatePolygonCentroid(Triangle.Vertices);

            InnerRadius = PointToPolygonDistanceCalculator.CalculatePointToPolygonDistance(centroid, triangle.Vertices);
            OuterRadius = Triangle.Vertices.Max(v => (v - centroid).Length());
        }

        public IEnumerable<SectionModel> GetNeighboursAndSelf()
        {
            return Neighbours.Union(new[] { this });
        }

        public override Vector2 GetCentroid()
        {
            return centroid;
        }

        public override Vector2[] GetWorldVertices()
        {
            return Triangle.Vertices;
        }
    }
}
