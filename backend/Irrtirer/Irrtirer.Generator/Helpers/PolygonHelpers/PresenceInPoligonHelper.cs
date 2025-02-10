//Based on https://www.tutorialspoint.com/Check-if-a-given-point-lies-inside-a-Polygon

using Irrtirer.Generator.Models;
using System;
using System.Numerics;

namespace Irrtirer.Generator.Helpers.PolygonHelpers
{
    internal class PresenceInPoligonHelper
    {
        public static bool IsPointInsidePolygon(Vector2[] vertices, Vector2 point)
        {
            // When polygon has less than 3 edge, it is not polygon
            if (vertices.Length < 3)
                return false;

            // Create a point at infinity, y is same as point p
            Vector2 pt = new Vector2(float.MaxValue, point.Y);
            Line exline = new Line(point, pt);
            int count = 0;
            int i = 0;
            do
            {
                // Forming a line from two consecutive points of
                // poly
                Line side = new Line(vertices[i], vertices[(i + 1) % vertices.Length]);
                if (AreLineIntersecting(side, exline))
                {
                    // If side is intersects exline
                    if (GetDirection(side.Start, point, side.End) == 0)
                    {
                        return IsPointOnLine(side, point);
                    }

                    count++;
                }

                i = (i + 1) % vertices.Length;
            } while (i != 0);

            // When count is odd
            return (count & 1) == 1;
        }

        public static bool AreLineIntersecting(Line lineA, Line lineB)
        {
            // Four direction for two lines and points of other line
            int dir1 = GetDirection(lineA.Start, lineA.End, lineB.Start);
            int dir2 = GetDirection(lineA.Start, lineA.End, lineB.End);
            int dir3 = GetDirection(lineB.Start, lineB.End, lineA.Start);
            int dir4 = GetDirection(lineB.Start, lineB.End, lineA.End);

            // When intersecting
            if (dir1 != dir2 && dir3 != dir4)
                return true;

            // When p2 of line2 are on the line1
            if (dir1 == 0 && IsPointOnLine(lineA, lineB.Start))
                return true;

            // When p1 of line2 are on the line1
            if (dir2 == 0 && IsPointOnLine(lineA, lineB.End))
                return true;

            // When p2 of line1 are on the line2
            if (dir3 == 0 && IsPointOnLine(lineB, lineA.Start))
                return true;

            // When p1 of line1 are on the line2
            if (dir4 == 0 && IsPointOnLine(lineB, lineA.End))
                return true;

            return false;
        }

        private static bool IsPointOnLine(Line line, Vector2 point)
        {
            return point.X <= MathF.Max(line.Start.X, line.End.X) &&
                    point.X >= MathF.Min(line.Start.X, line.End.X) &&
                    point.Y <= MathF.Max(line.Start.Y, line.End.Y) &&
                    point.Y >= MathF.Min(line.Start.Y, line.End.Y);
        }

        private static int GetDirection(Vector2 a, Vector2 b, Vector2 c)
        {
            float val = (b.Y - a.Y) * (c.X - b.X) - (b.X - a.X) * (c.Y - b.Y);

            if (val == 0)
            {
                return 0;   // Collinear
            }
            else if (val < 0)
            {
                return 2;   // Anti-clockwise direction
            }
            else
            {
                return 1;   // Clockwise direction
            }
        }

        public static bool IsPointInsideTriangle(Vector2 point, Vector2[] vertices)
        {
            float dir1 = sign(point, vertices[0], vertices[1]);
            float dir2 = sign(point, vertices[1], vertices[2]);
            float dir3 = sign(point, vertices[2], vertices[0]);

            bool hasNegtiveDir = (dir1 < 0) || (dir2 < 0) || (dir3 < 0);
            bool hasPositiveDir = (dir1 > 0) || (dir2 > 0) || (dir3 > 0);

            return !(hasNegtiveDir && hasPositiveDir);
        }

        private static float sign(Vector2 a, Vector2 b, Vector2 c)
        {
            return (a.X - c.X) * (b.Y - c.Y) - (b.X - c.X) * (a.Y - c.Y);
        }
    }
}
