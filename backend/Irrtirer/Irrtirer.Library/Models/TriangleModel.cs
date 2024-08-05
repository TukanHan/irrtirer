using System.Numerics;

namespace Irrtirer.Library.Models
{
    public class TriangleModel
    {
        public Vector2[] Vertices { get; }

        public Vector2 A { get { return Vertices[0]; } }
        public Vector2 B { get { return Vertices[1]; } }
        public Vector2 C { get { return Vertices[2]; } }

        public TriangleModel(Vector2 a, Vector2 b, Vector2 c)
        {
            Vertices = new Vector2[3] { a, b, c };
        }
    }
}
