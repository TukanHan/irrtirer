using System.Collections.Generic;
using System.Numerics;

namespace Irrtirer.Library.Models
{
    public struct Triangle
    {
        public Vector2 A { get; }
        public Vector2 B { get; }
        public Vector2 C { get; }

        public Triangle(Vector2 a, Vector2 b, Vector2 c)
        {
            A = a;
            B = b;
            C = c;
        }

        public Triangle(Vector2[] vertices)
        {
            A = vertices[0];
            B = vertices[1];
            C = vertices[2];
        }

        public IEnumerable<Line> GetEdges()
        {
            yield return new Line(A, B);
            yield return new Line(B, C);
            yield return new Line(C, A);
        }

        public IEnumerable<Vector2> GetVertices()
        {
            yield return A;
            yield return B;
            yield return C;
        }
    }
}
