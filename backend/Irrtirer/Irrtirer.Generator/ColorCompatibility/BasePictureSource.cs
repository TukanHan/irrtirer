using Irrtirer.Generator.Models;
using System.Drawing;
using System.Numerics;

namespace Irrtirer.Generator.ColorCompatibility
{
    public class BasePictureSource : IImageSource
    {
        protected readonly Color[] pixelColors;
        protected readonly RectangleF imageRect;
        protected readonly Size pixelArraySize;

        private readonly GaussianBlurWithMask gaussianBlurTool;
        private readonly PolygonRasterizationTool rasterizationTool;

        public BasePictureSource(Color[] colors, RectangleF imageRect, Size pixelArraySize)
        {
            this.pixelColors = colors;
            this.imageRect = imageRect;
            this.pixelArraySize = pixelArraySize;

            gaussianBlurTool = new GaussianBlurWithMask(colors, pixelArraySize);
            rasterizationTool = new PolygonRasterizationTool(imageRect, pixelArraySize);
        }

        private int WorldUnitToPixels(float worldDistance)
        {
            float pixePerUnit = pixelArraySize.Height / imageRect.Height;
            return (int)(pixePerUnit * worldDistance);
        }

        public virtual BluredImageObject GetBluredImage(float worldRadial, Vector2[] polygon)
        {
            bool[] pixelMask = rasterizationTool.RasterizePolygonInRange(polygon);

            int radial = WorldUnitToPixels(worldRadial);
            var blured = gaussianBlurTool.Blur(pixelMask, radial, 1);

            return new BluredImageObject(blured, pixelArraySize, imageRect);
        }
    }
}
