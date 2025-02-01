using System;
using System.Numerics;

namespace Irrtirer.Generator.Helpers
{
    internal class TrigonometryHelper
    {
        const float Deg2Rad = MathF.PI / 180;

        public static Vector2 RotatePointAroundPoint(Vector2 point, Vector2 center, float angle)
        {
            angle *= Deg2Rad;
            float x = MathF.Cos(angle) * (point.X - center.X) - MathF.Sin(angle) * (point.Y - center.Y) + center.X;
            float y = MathF.Sin(angle) * (point.X - center.X) + MathF.Cos(angle) * (point.Y - center.Y) + center.Y;

            return new Vector2(x, y);
        }
    }
}
