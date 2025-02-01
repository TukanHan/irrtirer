using System.Collections.Generic;
using System.Numerics;

namespace Irrtirer.Generator.Helpers.PolygonHelpers
{
    internal class SutherlandHodgmanAlgorithm
    {
        private class Plane
        {
            public Vector2 position;
            public Vector2 normal;

            public Plane(Vector2 position, Vector2 normal)
            {
                this.position = position;
                this.normal = normal;
            }

            public float DistanceFromPointToPlane(Vector2 pointPos)
            {
                return Vector2.Dot(normal, pointPos - position);
            }

            public Vector2 GetRayPlaneIntersectionCoordinate(Vector2 rayStart, Vector2 rayDir)
            {
                float denominator = Vector2.Dot(-normal, rayDir);
                Vector2 vecBetween = position - rayStart;
                float t = Vector2.Dot(vecBetween, -normal) / denominator;
                return rayStart + rayDir * t;
            }
        }

        /// <summary>
        /// Clip Polygon
        /// </summary>
        /// <param name="shapeVectors">Assumes the polygons are oriented counter clockwise, poly_1 is the polygon we want to cut</param>
        /// <param name="maskVectors">Assumes the polygon we want to remove from the other polygon is convex, so poly_2 has to be convex</param>
        /// <returns>Intersection of the polygons</returns>
        public static Vector2[] ClipPolygon(Vector2[] shapeVectors, Vector2[] maskVectors)
        {
            //Calculate the clipping planes
            Plane[] clippingPlanes = new Plane[maskVectors.Length];

            for (int i = 0; i < maskVectors.Length; i++)
            {
                Vector2 v1 = maskVectors[i];
                Vector2 v2 = maskVectors[(i + 1) % maskVectors.Length];

                //Doesnt have to be center but easier to debug
                Vector2 planePos = (v1 + v2) * 0.5f;

                Vector2 planeDir = v2 - v1;

                //Should point inwards
                Vector2 planeNormal = Vector2.Normalize(new Vector2(-planeDir.Y, planeDir.X));

                clippingPlanes[i] = new Plane(planePos, planeNormal);
            }

            return ClipPolygon(shapeVectors, clippingPlanes);
        }

        //Sometimes its more efficient to calculate the planes once before we call the method
        //if we want to cut several polygons with the same planes
        private static Vector2[] ClipPolygon(Vector2[] shapeVectors, Plane[] clippingPlanes)
        {
            //Clone the vertices because we will remove vertices from this list
            List<Vector2> clippedShapeVectors = new List<Vector2>(shapeVectors);

            //Save the new vertices temporarily in this list before transfering them to vertices
            List<Vector2> tempClipedShapeVectors = new List<Vector2>();

            //Clip the polygon
            foreach (Plane plane in clippingPlanes)
            {
                for (int i = 0; i < clippedShapeVectors.Count; i++)
                {
                    Vector2 v1 = clippedShapeVectors[i];
                    Vector2 v2 = clippedShapeVectors[(i + 1) % clippedShapeVectors.Count];

                    //Calculate the distance to the plane from each vertex
                    //This is how we will know if they are inside or outside
                    //If they are inside, the distance is positive, which is why the planes normals have to be oriented to the inside

                    float dist_to_v1 = plane.DistanceFromPointToPlane(v1);
                    float dist_to_v2 = plane.DistanceFromPointToPlane(v2);

                    //Case 1. Both are outside (= to the right), do nothing  
                    //Case 2. Both are inside (= to the left), save v2
                    if (dist_to_v1 > 0f && dist_to_v2 > 0f)
                    {
                        tempClipedShapeVectors.Add(v2);
                    }
                    //Case 3. Outside -> Inside, save intersection point and v2
                    else if (dist_to_v1 < 0f && dist_to_v2 > 0f)
                    {
                        Vector2 rayDir = Vector2.Normalize(v2 - v1);

                        Vector2 intersectionPoint = plane.GetRayPlaneIntersectionCoordinate(v1, rayDir);

                        tempClipedShapeVectors.Add(intersectionPoint);

                        tempClipedShapeVectors.Add(v2);
                    }
                    //Case 4. Inside -> Outside, save intersection point
                    else if (dist_to_v1 > 0f && dist_to_v2 < 0f)
                    {
                        Vector2 rayDir = Vector2.Normalize(v2 - v1);

                        Vector2 intersectionPoint = plane.GetRayPlaneIntersectionCoordinate(v1, rayDir);

                        tempClipedShapeVectors.Add(intersectionPoint);
                    }
                }

                clippedShapeVectors.Clear();
                clippedShapeVectors.AddRange(tempClipedShapeVectors);

                tempClipedShapeVectors.Clear();
            }

            return clippedShapeVectors.ToArray();
        }
    }
}
