using Irrtirer.Generator.Helpers.PolygonHelpers;
using System;
using System.Drawing;
using System.Linq;
using System.Numerics;

namespace Irrtirer.Generator.Tiles
{
    [Obsolete("Później zrobić prywatny")]
    public class Tile
    {
        public Guid Id { get; private set; }

        public Color Color { get; private set; }
        public Vector2[] Vertices { get; }

        public float OuterRadius { get; protected set; }
        public float InnerRadius { get; protected set; }

        public Tile(Guid id, Vector2[] unnormalizedVertices, Color color)
        {
            Id = id;

            this.Color = color;
            Vector2 centroid = PolygonHelper.CalculatePolygonCentroid(unnormalizedVertices);
            this.Vertices = unnormalizedVertices.Select(v => v - centroid).ToArray();
            this.OuterRadius = MathF.Sqrt(Vertices.Max(v => (v.X * v.X) + (v.Y * v.Y)));
            this.InnerRadius = PointToPolygonDistanceCalculator.CalculatePointToPolygonDistance(Vector2.Zero, this.Vertices);
        }

        public override bool Equals(object obj)
        {
            return obj is Tile tile && Id.Equals(tile.Id);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id);
        }
    }
}
