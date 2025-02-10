using Irrtirer.Generator.Models;
using System.Numerics;

namespace Irrtirer.Models
{
    public class TileTransformModel
    {
        public Guid TileId { get; set; }
        public Vector2 Position { get; set; }
        public float Angle { get; set; }

        public TileTransformModel(TileTransformResult transform)
        {
            TileId = transform.Tile.Id;
            Position = transform.Position;
            Angle = transform.Angle;
        }
    }
}
