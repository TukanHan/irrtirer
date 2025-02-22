using System;
using System.Numerics;

namespace Irrtirer.Generator.MosaicStructure
{
    public class Triangle
    {
        public Vector2[] Vertices { get; }

        public float Area { get; }

        public Triangle(Vector2[] vertices)
        {
            if (vertices?.Length != 3)
            {
                throw new ArgumentException("Wrong triangle shape");
            }

            Vertices = vertices;
            Area = CalculateArea(Vertices);
        }

        private static float CalculateArea(Vector2[] v)
        {
            return MathF.Abs(v[0].X * (v[1].Y - v[2].Y) + v[1].X * (v[2].Y - v[0].Y) + v[2].X * (v[0].Y - v[1].Y)) / 2;
        }
    }
}
