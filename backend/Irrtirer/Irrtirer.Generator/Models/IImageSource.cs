using Irrtirer.Generator.ColorCompatibility;
using System.Numerics;

namespace Irrtirer.Generator.Models
{
    public interface IImageSource
    {
        BlurredImageObject GetBlurredImage(float worldRadial, Vector2[] polygon);
    }
}
