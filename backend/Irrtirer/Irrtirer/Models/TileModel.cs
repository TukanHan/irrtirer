using System.Numerics;

namespace Irrtirer.Models
{
    public class TileModel
    {
        public required Guid Id { get; set; }
        public required string Color { get; set; }
        public required Vector2[] Vertices { get; set; }
    }
}
