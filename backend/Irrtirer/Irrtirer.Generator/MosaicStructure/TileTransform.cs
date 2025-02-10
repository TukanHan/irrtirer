using Irrtirer.Generator.Helpers.PolygonHelpers;
using Irrtirer.Generator.Helpers;
using System.Numerics;
using Irrtirer.Generator.Tiles;
using Irrtirer.Generator.Models;

namespace Irrtirer.Generator.MosaicStructure
{
    internal class TileTransform : GeometryObject
    {
        public Tile Tile { get; }

        public Vector2 Position { get; private set; }
        public float Angle { get; private set; }
        public float Scale { get; private set; }

        public override float OuterRadius { get; protected set; }
        public override float InnerRadius { get; protected set; }


        private float? area = null;
        public float Area
        {
            get
            {
                area ??= PolygonHelper.CalculatePolygonArea(GetWorldVertices());
                return area.Value;
            }
        }

        private Vector2[] worldVertices = null;

        public TileTransform(Tile tile, Vector2 position, float angle = 1, float scale = 1)
        {
            Tile = tile;
            Position = position;
            Angle = angle;
            Scale = scale;
            OuterRadius = tile.OuterRadius * scale;
            InnerRadius = tile.InnerRadius * scale;
        }

        public TileTransform Transform(Vector2 position, float angle, float scale = 1)
        {
            return new TileTransform(Tile, position, angle, scale);
        }

        public override Vector2 GetCentroid()
        {
            return Position;
        }

        public override Vector2[] GetWorldVertices()
        {
            worldVertices ??= GetWorldVertices(Tile.Vertices, Position, Angle, Scale);
            return worldVertices;
        }

        private static Vector2[] GetWorldVertices(Vector2[] vertices, Vector2 position, float angle = 0, float scale = 1)
        {
            Vector2[] worldVertices = new Vector2[vertices.Length];
            for (int i = 0; i < vertices.Length; ++i)
            {
                worldVertices[vertices.Length - 1 - i] = TrigonometryHelper.RotatePointAroundPoint(vertices[i], Vector2.Zero, angle) * scale + position;
            }

            return worldVertices;
        }
    }

    internal static class TileTransformExtension
    {
        public static TileTransformResult ToResult(this TileTransform tileTransform)
        {
            return new TileTransformResult()
            {
                Tile = tileTransform.Tile,
                Position = tileTransform.Position,
                Angle = tileTransform.Angle
            };
        }
    }
}
