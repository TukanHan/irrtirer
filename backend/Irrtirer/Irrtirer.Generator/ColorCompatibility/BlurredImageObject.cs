using System.Drawing;
using System.Numerics;

namespace Irrtirer.Generator.ColorCompatibility
{
    public class BlurredImageObject
    {
        public Color[] BlurredImage { get; }
        public Size TextureSize { get; }

        private readonly RectangleF imageObjectPosition;

        public BlurredImageObject(Color[] blurredImage, Size textureSize, RectangleF imageObjectPosition)
        {
            this.BlurredImage = blurredImage;
            this.TextureSize = textureSize;
            this.imageObjectPosition = imageObjectPosition;
        }

        public Color? GetPictureColorAtPosition(Vector2 worldPos)
        {
            if (IsPointInsidePictureBorder(worldPos))
            {
                return GetColorFromWorldPoint(worldPos);
            }

            return null;
        }

        protected Color GetColorFromWorldPoint(Vector2 worldPos)
        {
            Point pixelPos = GetPixelPositionFromWorldPosition(worldPos);
            return BlurredImage[pixelPos.Y * TextureSize.Width + pixelPos.X];
        }

        protected Point GetPixelPositionFromWorldPosition(Vector2 worldPos)
        {
            PointF localPos = new PointF(worldPos.X - imageObjectPosition.X, worldPos.Y - imageObjectPosition.Y);
            PointF normalPos = new PointF(localPos.X / imageObjectPosition.Size.Width, localPos.Y / imageObjectPosition.Size.Height);
            Point spritePixelPos = new Point((int)(normalPos.X * TextureSize.Width), (int)(normalPos.Y * TextureSize.Height));

            return new Point(spritePixelPos.X, spritePixelPos.Y);
        }

        public bool IsPointInsidePictureBorder(Vector2 point)
        {
            return imageObjectPosition.Contains(point.X, point.Y);
        }
    }
}
