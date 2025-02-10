//based on thread https://forum.unity.com/threads/contribution-texture2d-blur-in-c.185694/

using System.Drawing;
using System.Threading.Tasks;

namespace Irrtirer.Generator.ColorCompatibility
{
    internal class GaussianBlurWithMask
    {
        private struct ColorSum
        {
            private int r;
            private int g;
            private int b;
            private int a;

            private int count;

            public void Add(Color color)
            {
                r += color.R;
                g += color.G;
                b += color.B;
                a += color.A;

                count++;
            }

            public void Subtract(Color color)
            {
                r -= color.R;
                g -= color.G;
                b -= color.B;
                a -= color.A;

                count--;
            }

            public Color GetColor()
            {
                return Color.FromArgb(a / count, r / count, g / count, b / count);
            }
        }

        private readonly Color[] oryginalColors;
        private readonly int width;
        private readonly int height;

        private bool[] mask;

        private readonly ParallelOptions parallelOptions = new ParallelOptions
        {
            MaxDegreeOfParallelism = 8
        };

        public GaussianBlurWithMask(Color[] oryginalColors, Size size)
        {
            this.oryginalColors = oryginalColors;
            width = size.Width;
            height = size.Height;
        }

        public Color[] Blur(bool[] mask, int radius, int iterations)
        {
            this.mask = mask;

            Color[] arrayA = (Color[])oryginalColors.Clone();
            Color[] arrayB = new Color[oryginalColors.Length];

            for (var i = 0; i < iterations; ++i)
            {
                HorizontalBlur(arrayA, arrayB, radius);
                VerticalBlur(arrayB, arrayA, radius);
            }

            return arrayA;
        }

        private void HorizontalBlur(Color[] inputColors, Color[] outputColors, int radius)
        {
            Parallel.For(0, height, parallelOptions, (imgY) =>
            {
                ColorSum colorSum = new ColorSum();

                for (int imgX = 0; imgX < width; ++imgX)
                {
                    if (imgX == 0)
                    {
                        for (int x = 0; x <= radius; ++x)
                        {
                            Point pos = new Point(x, imgY);
                            if (IsPixelInArrayAndIsVisable(pos))
                            {
                                colorSum.Add(inputColors[pos.Y * width + pos.X]);
                            }
                        }
                    }
                    else
                    {
                        Point pxToSubstractPos = new Point(imgX - radius - 1, imgY);
                        if (IsPixelInArrayAndIsVisable(pxToSubstractPos))
                        {
                            colorSum.Subtract(inputColors[pxToSubstractPos.Y * width + pxToSubstractPos.X]);
                        }

                        Point pxToAddPos = new Point(imgX + radius, imgY);
                        if (IsPixelInArrayAndIsVisable(pxToAddPos))
                        {
                            colorSum.Add(inputColors[pxToAddPos.Y * width + pxToAddPos.X]);
                        }
                    }

                    int index = imgY * width + imgX;
                    outputColors[index] = mask[index] ? colorSum.GetColor() : inputColors[index];
                }
            });
        }

        private void VerticalBlur(Color[] inputColors, Color[] outputColors, int radius)
        {
            Parallel.For(0, width, parallelOptions, (imgX) =>
            {
                ColorSum colorSum = new ColorSum();

                for (int imgY = 0; imgY < height; ++imgY)
                {
                    if (imgY == 0)
                    {
                        for (int y = -radius; y <= radius; ++y)
                        {
                            Point pos = new Point(imgX, y);
                            if (IsPixelInArrayAndIsVisable(pos))
                            {
                                colorSum.Add(inputColors[pos.Y * width + pos.X]);
                            }
                        }
                    }
                    else
                    {
                        Point pxToSubstractPos = new Point(imgX, imgY - radius - 1);
                        if (IsPixelInArrayAndIsVisable(pxToSubstractPos))
                        {
                            colorSum.Subtract(inputColors[pxToSubstractPos.Y * width + pxToSubstractPos.X]);
                        }

                        Point pxToAddPos = new Point(imgX, imgY + radius);
                        if (IsPixelInArrayAndIsVisable(pxToAddPos))
                        {
                            colorSum.Add(inputColors[pxToAddPos.Y * width + pxToAddPos.X]);
                        }
                    }

                    int index = imgY * width + imgX;
                    outputColors[index] = mask[index] ? colorSum.GetColor() : inputColors[index];
                }
            });
        }

        private bool IsPixelInArrayAndIsVisable(Point point)
        {
            if (point.X < 0 || point.X >= width || point.Y < 0 || point.Y >= height)
                return false;

            return mask[point.Y * width + point.X];
        }
    }
}
