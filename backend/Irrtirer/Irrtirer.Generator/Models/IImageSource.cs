using Irrtirer.Generator.ColorCompatibility;
using System.Numerics;

namespace Irrtirer.Generator.Models
{
    public interface IImageSource
    {
        BluredImageObject GetBluredImage(float worldRadial, Vector2[] polygon);
    }
}
