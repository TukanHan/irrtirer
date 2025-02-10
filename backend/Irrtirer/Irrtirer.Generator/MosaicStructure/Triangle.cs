using Irrtirer.Generator.Helpers;
using System;
using System.Numerics;

namespace Irrtirer.Generator.MosaicStructure
{
    public class Triangle
    {
        public Vector2[] Vertices { get; }

        public Vector2 A { get { return Vertices[0]; } }
        public Vector2 B { get { return Vertices[1]; } }
        public Vector2 C { get { return Vertices[2]; } }

        public float Area { get; }

        public Triangle(Vector2 a, Vector2 b, Vector2 c)
        {
            Vertices = new Vector2[] { a, b, c };
            Area = CalculateArea(Vertices);
        }

        public Triangle(Vector2[] vertices)
        {
            if (vertices?.Length != 3)
            {
                throw new ArgumentException("Wrong triangle shape");
            }

            Vertices = vertices;
            Area = CalculateArea(Vertices);
        }

        public Triangle GetTransformed(Vector2 newPosition, float angle, float scale)
        {
            Vector2 a = TrigonometryHelper.RotatePointAroundPoint(A, Vector2.Zero, angle) * scale + newPosition;
            Vector2 b = TrigonometryHelper.RotatePointAroundPoint(B, Vector2.Zero, angle) * scale + newPosition;
            Vector2 c = TrigonometryHelper.RotatePointAroundPoint(C, Vector2.Zero, angle) * scale + newPosition;

            return new Triangle(a, b, c);
        }

        public static float CalculateArea(Vector2[] v)
        {
            return MathF.Abs(v[0].X * (v[1].Y - v[2].Y) + v[1].X * (v[2].Y - v[0].Y) + v[2].X * (v[0].Y - v[1].Y)) / 2;
        }
    }
}
