using System;
using System.Numerics;

namespace Irrtirer.Generator.Helpers.PolygonHelpers
{
    internal static class PolygonHelper
    {
        public static Vector2 CalculatePolygonCentroid(Vector2[] vertices)
        {
            float x = 0, y = 0;
            float area = 0;
            Vector2 b = vertices[^1];

            for (int i = 0; i < vertices.Length; i++)
            {
                Vector2 a = vertices[i];

                float tempArea = a.Y * b.X - a.X * b.Y;
                area += tempArea;
                x += (a.X + b.X) * tempArea;
                y += (a.Y + b.Y) * tempArea;

                b = a;
            }

            area *= 3;

            return area == 0 ? Vector2.Zero : new Vector2(x / area, y / area);
        }

        /// <summary>
        /// Shoelace formula
        /// </summary>
        public static float CalculatePolygonArea(Vector2[] vertices)
        {
            if (vertices.Length < 3)
            {
                throw new ArgumentException("Not enought vectors");
            }

            float up = vertices[^1].X * vertices[0].Y;
            float down = vertices[^1].Y * vertices[0].X;

            for (int i = 0, n = vertices.Length - 1; i < n; i++)
            {
                up += vertices[i].X * vertices[i + 1].Y;
                down += vertices[i].Y * vertices[i + 1].X;
            }

            return (up - down) / 2;
        }

        public static float CalculatePolygonCircumference(Vector2[] vertices)
        {
            float circumference = Vector2.Distance(vertices[0], vertices[^1]);

            for (int i = 1; i < vertices.Length; i++)
            {
                circumference += Vector2.Distance(vertices[i], vertices[i - 1]);
            }

            return circumference;
        }

        public static float CalculateConvexityFactor(Vector2[] vertices)
        {
            float area = CalculatePolygonArea(vertices);
            float circumference = CalculatePolygonCircumference(vertices);

            return MathF.Sqrt(area) / circumference;
        }

        public static Vector2[] GetPolygonMargin(Vector2[] vertices, float margin)
        {
            Vector2[] polyMargin = new Vector2[vertices.Length * 3];

            for (int i = 0; i < vertices.Length; i++)
            {
                Vector2 current = vertices[i];
                Vector2 next = vertices[(i + 1) % vertices.Length];
                Vector2 prev = vertices[(i == 0) ? vertices.Length - 1 : (i - 1)];

                Vector2 prevMarginVec = Vector2.Normalize(prev - current);
                polyMargin[i * 3] = new Vector2(-prevMarginVec.Y, prevMarginVec.X) * margin + current;

                Vector2 prevSideVec = Vector2.Normalize(current - prev);
                Vector2 nextSideVec = Vector2.Normalize(current - next);
                polyMargin[i * 3 + 1] = Vector2.Normalize(prevSideVec + nextSideVec) * margin + current;

                Vector2 nextMarginVec = Vector2.Normalize(current - next);
                polyMargin[i * 3 + 2] = new Vector2(-nextMarginVec.Y, nextMarginVec.X) * margin + current;
            }

            return polyMargin;
        }
    }
}
