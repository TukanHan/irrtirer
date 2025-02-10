using System;
using System.Numerics;

namespace Irrtirer.Generator.Helpers
{
    internal static class RandomExtension
    {
        public static float Next(this Random random, float min, float max)
        {
            return (float)(random.NextDouble() * (max - min) + min);
        }

        public static Vector2 NextPointInsideCircle(this Random random)
        {
            Vector2 randomVector = Vector2.Normalize(new Vector2(random.Next(-1f, 1f), random.Next(-1, 1)));
            randomVector *= random.Next(0f, 1f);
            return randomVector;
        }

        public static Vector2 RandomPointInTriangle(this Random random, Vector2[] v)
        {
            float r1 = (float)random.NextDouble();
            float r2 = (float)random.NextDouble();

            float x = (1 - MathF.Sqrt(r1)) * v[0].X + (MathF.Sqrt(r1) * (1 - r2)) * v[1].X + (MathF.Sqrt(r1) * r2) * v[2].X;
            float y = (1 - MathF.Sqrt(r1)) * v[0].Y + (MathF.Sqrt(r1) * (1 - r2)) * v[1].Y + (MathF.Sqrt(r1) * r2) * v[2].Y;

            return new Vector2(x, y);
        }
    }
}
