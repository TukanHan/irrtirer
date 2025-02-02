using Irrtirer.Library.Helpers;
using System.Collections.Generic;
using TriangleNet.Geometry;
using TriangleNet.Topology;

namespace Irrtirer.Library
{
    public class MeshTileOrderer
    {
        public static IEnumerable<ITriangle> OrderAndMapTriangles(IEnumerable<ITriangle> initialCollection)
        {
            List<ITriangle> orderedMappedTriangles = new List<ITriangle>();

            HashSet<ITriangle> seenTriangles = new HashSet<ITriangle>();
            TriangleNeighborhoodCollection collection = new TriangleNeighborhoodCollection();
            foreach (Triangle triangle in initialCollection)
            {
                collection.Add(new TriangleNeighborhoodEntity(triangle));
            }

            while (collection.Count > 0)
            {
                ITriangle triangle = collection.DequeueNextTriangle();
                orderedMappedTriangles.Add(triangle);
                seenTriangles.Add(triangle);

                for (int i = 0; i < 3; i++)
                {
                    ITriangle neighbour = triangle.GetNeighbor(i);
                    if (neighbour != null && !seenTriangles.Contains(neighbour))
                    {
                        collection.RegisterSelectedNeighbour(neighbour);
                    }
                }
            }

            return orderedMappedTriangles;
        }
    }
}
