using System.Numerics;

namespace Irrtirer.Models
{
    public class VertexModel
    {
        public float X { get; set; }
        public float Y { get; set; }

        public VertexModel()
        {
            X = 0;
            Y = 0;
        }

        public VertexModel(float x, float y)
        {
            X = x;
            Y = y;
        }

        public VertexModel(Vector2 vector)
        {
            X = vector.X;
            Y = vector.Y;
        }
    }
}
