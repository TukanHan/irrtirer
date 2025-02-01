//Based on https://alienryderflex.com/polygon_fill/

using System.Drawing;
using System.Numerics;

namespace Irrtirer.Generator.ColorCompatibility
{
    internal class PolygonRasterizationTool
    {
        private const int ImageLeftBorder = 0;

        private readonly Size imageSize;
        private readonly RectangleF imagePosition;

        public PolygonRasterizationTool(RectangleF imagePosition, Size imageSize)
        {
            this.imagePosition = imagePosition;
            this.imageSize = imageSize;
        }

        public bool[] RasterizePolygonInRange(Vector2[] vertices)
        {
            Vector2[] verticesInPixelSpace = TranslateVerticesToPixelSpace(vertices);
            return PrepareMask(verticesInPixelSpace, imageSize);
        }

        private Vector2[] TranslateVerticesToPixelSpace(Vector2[] vertices)
        {
            Vector2[] translated = new Vector2[vertices.Length];
            for (int i = 0; i < vertices.Length; i++)
            {
                translated[i] = new Vector2((vertices[i].X - imagePosition.X) / imagePosition.Width * imageSize.Width,
                                            (vertices[i].Y - imagePosition.Y) / imagePosition.Height * imageSize.Height);
            }

            return translated;
        }

        private bool[] PrepareMask(Vector2[] vertices, Size imageSize)
        {
            bool[] mask = new bool[imageSize.Width * imageSize.Height];

            int[] nodeX = new int[vertices.Length];

            //  Loop through the rows of the image.
            for (int pixelY = 0; pixelY < imageSize.Height; ++pixelY)
            {
                BuildArrayOfNodes(vertices, nodeX, out int nodesInRowCount, pixelY);
                SortNodes(nodeX, nodesInRowCount);

                //  Fill the pixels between node pairs.
                for (int i = 0; i < nodesInRowCount; i += 2)
                {
                    if (nodeX[i] >= imageSize.Width)
                        break;

                    if (nodeX[i + 1] > ImageLeftBorder)
                    {
                        if (nodeX[i] < ImageLeftBorder)
                            nodeX[i] = ImageLeftBorder;
                        if (nodeX[i + 1] > imageSize.Width)
                            nodeX[i + 1] = imageSize.Width;

                        for (int pixelX = nodeX[i]; pixelX < nodeX[i + 1]; pixelX++)
                        {
                            mask[pixelX + pixelY * imageSize.Width] = true;
                        }
                    }
                }
            }

            return mask;
        }

        private static void BuildArrayOfNodes(Vector2[] vertices, int[] nodeX, out int nodesInRowCount, int pixelY)
        {
            nodesInRowCount = 0;
            for (int i = 0, j = vertices.Length - 1; i < vertices.Length; i++)
            {
                if (vertices[i].Y < pixelY && vertices[j].Y >= pixelY || vertices[j].Y < pixelY && vertices[i].Y >= pixelY)
                {
                    nodeX[nodesInRowCount++] = (int)(vertices[i].X + (pixelY - vertices[i].Y) / (vertices[j].Y - vertices[i].Y) * (vertices[j].X - vertices[i].X));
                }
                j = i;
            }
        }

        private static void SortNodes(int[] nodeX, int nodesInRowCount)
        {
            int i = 0;
            while (i < nodesInRowCount - 1)
            {
                if (nodeX[i] > nodeX[i + 1])
                {
                    int swapValue = nodeX[i];
                    nodeX[i] = nodeX[i + 1];
                    nodeX[i + 1] = swapValue;
                    if (i != 0)
                    {
                        i--;
                    }
                }
                else
                {
                    i++;
                }
            }
        }
    }
}
