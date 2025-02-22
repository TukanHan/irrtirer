using System;
using System.Drawing;

namespace Irrtirer.Generator.Helpers
{
    internal class ColorHelper
    {
        public static int MaxDifference = 255 * 255 * 3;
        public static float MaxDifferenceSqrt = MathF.Sqrt(255 * 255 * 3);

        public static int CompareColors(Color a, Color b)
        {
            int rChanel = a.R - b.R;
            int gChanel = a.G - b.G;
            int bChanel = a.B - b.B;

            return (rChanel * rChanel) + (gChanel * gChanel) + (bChanel * bChanel);
        }

        public static float ComparisonWithWeight(Color a, Color b)
        {
            float rChanel = (a.R - b.R) * 0.3f;
            float gChanel = (a.G - b.G) * 0.59f;
            float bChanel = (a.B - b.B) * 0.11f;

            return (rChanel * rChanel) + (gChanel * gChanel) + (bChanel * bChanel);
        }

        public static float CompareColorsSqrt(Color a, Color b)
        {
            return MathF.Sqrt(CompareColors(a, b));
        }
    }
}
