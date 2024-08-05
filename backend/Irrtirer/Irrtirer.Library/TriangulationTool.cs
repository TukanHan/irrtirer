using Irrtirer.Library.Helpers;
using Irrtirer.Library.Models;
using Irrtirer.Library.Extensions;
using System.Collections.Generic;
using System.Linq;
using TriangleNet.Geometry;
using TriangleNet.Meshing;
using TriangleNet.Topology;
using System.Numerics;

namespace Irrtirer.Library
{
    public class TriangulationTool
    {
        public IEnumerable<TriangleModel> GetPolygonTriangulationMesh(Vector2[] polygonVertices, float sectionMaxArea, float sectionMinAngle)
        {
            IPolygon polygon = CreatePolygon(polygonVertices);
            QualityOptions quality = new QualityOptions()
            {
                MinimumAngle = sectionMinAngle,
                MaximumArea = sectionMaxArea
            };

            IMesh mesh = polygon.Triangulate(quality);
            ICollection<Triangle> triangles = mesh.Triangles;

            return OrderAndMapTriangles(triangles);
        }

        private static IPolygon CreatePolygon(IEnumerable<Vector2> vertices)
        {
            Polygon sectorPolygon = new Polygon();
            Contour contour = new Contour(vertices.Select(vertex => new Vertex(vertex.X, vertex.Y)));
            sectorPolygon.Add(contour);

            return sectorPolygon;
        }

        private static IEnumerable<TriangleModel> OrderAndMapTriangles(IEnumerable<Triangle> initialCollection)
        {
            List<TriangleModel> orderedMappedTriangles = new List<TriangleModel>();

            HashSet<ITriangle> seenTriangles = new HashSet<ITriangle>();
            TriangleNeighborhoodCollection collection = new TriangleNeighborhoodCollection();
            foreach (Triangle triangle in initialCollection)
            {
                collection.Add(new TriangleNeighborhoodEntity(triangle));
            }

            while (collection.Count > 0)
            {
                ITriangle triangle = collection.DequeueNextTriangle();
                orderedMappedTriangles.Add(triangle.ToTriangleModel());
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
