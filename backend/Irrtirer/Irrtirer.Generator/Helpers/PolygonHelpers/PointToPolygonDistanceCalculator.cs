using System;
using System.Numerics;

namespace Irrtirer.Generator.Helpers.PolygonHelpers
{
    internal static class PointToPolygonDistanceCalculator
    {
        public static float CalculatePointToPolygonDistance(Vector2 point, Vector2[] vertices)
        {
            float minDistance = float.MaxValue;

            for (int i = 0; i < vertices.Length; i++)
            {
                Vector2 p1 = vertices[i];
                Vector2 p2 = vertices[(i + 1) % vertices.Length];

                var r = Vector2.Dot(p2 - p1, point - p1) / MathF.Pow((p2 - p1).Length(), 2);

                float distance;
                if (r < 0)
                {
                    distance = (point - p1).Length();
                }
                else if (r > 1)
                {
                    distance = (p2 - point).Length();
                }
                else
                {
                    distance = MathF.Sqrt(MathF.Pow((point - p1).Length(), 2) - MathF.Pow(r * (p2 - p1).Length(), 2));
                }

                if (distance < minDistance)
                {
                    minDistance = distance;
                }
            }

            return minDistance;
        }
    }
}
