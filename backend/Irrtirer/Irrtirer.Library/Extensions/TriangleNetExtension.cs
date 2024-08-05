using Irrtirer.Library.Models;
using System.Numerics;
using TriangleNet.Geometry;

namespace Irrtirer.Library.Extensions
{
    internal static class TriangleNetExtension
    {
        public static TriangleModel ToTriangleModel(this ITriangle triangle)
        {
            return new TriangleModel(
                triangle.GetVertex(0).ToVertexModel(),
                triangle.GetVertex(1).ToVertexModel(),
                triangle.GetVertex(2).ToVertexModel()
            );
        }

        public static Vector2 ToVertexModel(this Vertex vertex)
        {
            return new Vector2((float)vertex.X, (float)vertex.Y);
        }
    }
}
