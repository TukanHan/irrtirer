using Irrtirer.Generator.ColorCompatibility;
using Irrtirer.Generator.Models;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp;
using Color = System.Drawing.Color;
using RectangleF = System.Drawing.RectangleF;
using SizeF = System.Drawing.SizeF;
using PointF = System.Drawing.PointF;


namespace Irrtirer.GeneratorPort
{
    public class Base64ToImageSourceConverter
    {
        public IImageSource ToImageSource(string base64Image, float width)
        {
            byte[] imageBytes = Base64ToByteArray(base64Image);
            using (Image<Rgba32> image = Image.Load<Rgba32>(imageBytes))
            {
                Color[] colors = GetImageColors(image);
                RectangleF mosiacRect = GetMosaicRectriangle(image, width);
                var pixelArraySize = new System.Drawing.Size(image.Width, image.Height);

                return new BasePictureSource(colors, mosiacRect, pixelArraySize);
            }
        }

        private byte[] Base64ToByteArray(string base64Image)
        {
            string? base64Content = base64Image?.Split(',').LastOrDefault();
            if (base64Content == null)
            {
                throw new ArgumentException("Base64 image is invalid", nameof(base64Image));
            }

            return Convert.FromBase64String(base64Content);
        }

        private Color[] GetImageColors(Image<Rgba32> image)
        {
            Color[] pixelColors = new Color[image.Height * image.Width];

            for (int y = 0; y < image.Height; y++)
            {
                for (int x = 0; x < image.Width; x++)
                {
                    Rgba32 pixel = image[x, y];
                    pixelColors[y * image.Width + x] = Color.FromArgb(pixel.A, pixel.R, pixel.G, pixel.B);
                }
            }

            return pixelColors;
        }

        private RectangleF GetMosaicRectriangle(Image image, float mosaicWidth)
        {
            var size = new SizeF(mosaicWidth, mosaicWidth * image.Height / image.Width);
            var position = new PointF(size.Width / -2, size.Height / -2);
            return new RectangleF(position, size);
        }
    }
}
