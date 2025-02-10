using System.Numerics;

namespace Irrtirer.Generator.Helpers.PolygonHelpers
{
    public class SeparatingAxisTheorem
    {
        // Calculate the projection of a polygon on an axis
        // and returns it as a [min, max] interval
        private static void ProjectPolygon(Vector2 axis, Vector2[] vertices, ref float min, ref float max)
        {
            // To project a point on an axis use the dot product
            float dotProduct = Vector2.Dot(axis, vertices[0]);
            min = max = dotProduct;
            for (int i = 1; i < vertices.Length; ++i)
            {
                dotProduct = Vector2.Dot(vertices[i], axis);
                if (dotProduct < min)
                {
                    min = dotProduct;
                }
                else if (dotProduct > max)
                {
                    max = dotProduct;
                }
            }
        }

        // Calculate the distance between [minA, maxA] and [minB, maxB]
        // The distance will be negative if the intervals overlap
        public static float IntervalDistance(float minA, float maxA, float minB, float maxB)
        {
            if (minA < minB)
            {
                return minB - maxA;
            }
            else
            {
                return minA - maxB;
            }
        }

        // Check if polygon A is going to collide with polygon B.
        // The last parameter is the *relative* velocity 
        // of the polygons (i.e. velocityA - velocityB)
        public static bool TestIfPolygonCollide(Vector2[] verticesA, Vector2[] verticesB)
        {
            Vector2[] edgesA = PrepareEdges(verticesA);
            Vector2[] edgesB = PrepareEdges(verticesB);

            // Loop through all the edges of both polygons
            for (int edgeIndex = 0, n = edgesA.Length + edgesB.Length; edgeIndex < n; ++edgeIndex)
            {
                Vector2 edge = (edgeIndex < edgesA.Length) ? edgesA[edgeIndex] : edgesB[edgeIndex - edgesA.Length];

                // Find the axis perpendicular to the current edge
                Vector2 axis = Vector2.Normalize(new Vector2(-edge.Y, edge.X));

                // Find the projection of the polygon on the current axis
                float minA = 0; float minB = 0; float maxA = 0; float maxB = 0;
                ProjectPolygon(axis, verticesA, ref minA, ref maxA);
                ProjectPolygon(axis, verticesB, ref minB, ref maxB);

                // Check if the polygon projections are currentlty intersecting
                if (IntervalDistance(minA, maxA, minB, maxB) > 0)
                    return false;
            }

            return true;
        }

        public static float GetMinDistance(Vector2[] verticesA, Vector2[] verticesB)
        {
            Vector2[] edgesA = PrepareEdges(verticesA);
            Vector2[] edgesB = PrepareEdges(verticesB);
            float maxDistance = float.NegativeInfinity;

            // Loop through all the edges of both polygons
            for (int edgeIndex = 0, n = edgesA.Length + edgesB.Length; edgeIndex < n; ++edgeIndex)
            {
                Vector2 edge = (edgeIndex < edgesA.Length) ? edgesA[edgeIndex] : edgesB[edgeIndex - edgesA.Length];

                // Find the axis perpendicular to the current edge
                Vector2 axis = Vector2.Normalize(new Vector2(-edge.Y, edge.X));

                // Find the projection of the polygon on the current axis
                float minA = 0; float minB = 0; float maxA = 0; float maxB = 0;
                ProjectPolygon(axis, verticesA, ref minA, ref maxA);
                ProjectPolygon(axis, verticesB, ref minB, ref maxB);

                // Check if the polygon projections are currentlty intersecting
                float distance = IntervalDistance(minA, maxA, minB, maxB);

                if (maxDistance < distance)
                    maxDistance = distance;
            }

            return maxDistance;
        }

        private static Vector2[] PrepareEdges(Vector2[] vertices)
        {
            Vector2[] edges = new Vector2[vertices.Length];
            for (int i = 0; i < vertices.Length; ++i)
            {
                edges[i] = vertices[(i + 1) % vertices.Length] - vertices[i];
            }

            return edges;
        }
    }
}
