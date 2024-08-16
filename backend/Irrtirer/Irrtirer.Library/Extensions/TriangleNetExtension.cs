using System.Numerics;
using TriangleNet.Geometry;

namespace Irrtirer.Library.Extensions
{
    public static class TriangleNetExtension
    {
        public static Vector2 CalculateCentroid(this ITriangle triangle)
        {
            var a = triangle.GetVertex(0);
            var b = triangle.GetVertex(1);
            var c = triangle.GetVertex(2);

            return new Vector2((float)(a.X + b.X + c.X) / 3, (float)(a.Y + b.Y + c.Y) / 3);
        }

        public static Vector2[] ToVector2Array(this ITriangle triangle)
        {
            return new[]
            {
                triangle.GetVertex(0).ToVector2(),
                triangle.GetVertex(1).ToVector2(),
                triangle.GetVertex(2).ToVector2(),
            };
        }

        public static Vector2 ToVector2(this Vertex vertex)
        {
            return new Vector2((float)vertex.X, (float)vertex.Y);
        }
    }
}
