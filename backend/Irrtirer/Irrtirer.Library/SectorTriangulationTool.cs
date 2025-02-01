using Irrtirer.Library.Helpers;
using Irrtirer.Library.Models;
using Irrtirer.Library.Extensions;
using System.Collections.Generic;
using System.Linq;
using TriangleNet.Geometry;
using TriangleNet.Meshing;
using System.Numerics;
using Triangle = TriangleNet.Topology.Triangle;

namespace Irrtirer.Library
{
    public class SectorTriangulationTool
    {
        public IEnumerable<ITriangle> GetPolygonTriangulationMesh(SectorTriangulationModel sectorTriangulationData)
        {
            IPolygon polygon = CreatePolygonFromContours(new[] { sectorTriangulationData.PolygonVertices });
            QualityOptions quality = new QualityOptions()
            {
                MinimumAngle = sectorTriangulationData.SectionMinAngle,
                MaximumArea = sectorTriangulationData.SectionMaxArea
            };

            IMesh mesh = polygon.Triangulate(quality);
            ICollection<Triangle> triangles = mesh.Triangles;

            return OrderAndMapTriangles(triangles);
        }

        public IEnumerable<IEnumerable<ITriangle>> GetMosaicTriangulationMesh(IEnumerable<SectorTriangulationModel> sectorsTriangulationData)
        {
            List<Vector2[]> polygons = sectorsTriangulationData.Select(s => s.PolygonVertices).ToList();
            foreach(SectorTriangulationModel sectorTriangulationData in sectorsTriangulationData)
            {
                QualityOptions quality = new QualityOptions()
                {
                    MinimumAngle = sectorTriangulationData.SectionMinAngle,
                    MaximumArea = sectorTriangulationData.SectionMaxArea,
                };

                yield return GeSectorTriangulationMesh(polygons, quality);
                polygons.RemoveAt(0);
            }
        }

        private IEnumerable<ITriangle> GeSectorTriangulationMesh(List<Vector2[]> polygonsVertices, QualityOptions quality)
        {
            IPolygon polygon = CreatePolygonFromContours(polygonsVertices);
            IMesh mesh = polygon.Triangulate(new ConstraintOptions() { ConformingDelaunay = true } ,quality);

            Stack<Triangle> selectedTriangles = new Stack<Triangle>();

            foreach(Triangle triangle in mesh.Triangles)
            {
                if(TestIfPointLayOnlyInMainPolygon(triangle.CalculateCentroid(), polygonsVertices))
                {
                    selectedTriangles.Push(triangle);
                }
            }

            return OrderAndMapTriangles(selectedTriangles);
        }

        private bool TestIfPointLayOnlyInMainPolygon(Vector2 point, List<Vector2[]> polygonsVertices)
        {
            if(!PresenceInPoligonHelper.IsPointInsidePolygon(polygonsVertices[0], point))
            {
                return false;
            }

            for (int i = 1; i < polygonsVertices.Count; i++)
            {
                if(PresenceInPoligonHelper.IsPointInsidePolygon(polygonsVertices[i], point))
                {
                    return false;
                }
            }

            return true;
        }

        private IPolygon CreatePolygonFromContours(IEnumerable<IEnumerable<Vector2>> polygonsContours)
        {
            Polygon sectorPolygon = new Polygon();

            foreach (IEnumerable<Vector2> polygonContour in polygonsContours)
            {
                Contour contour = new Contour(polygonContour.Select(vertex => new Vertex(vertex.X, vertex.Y)));
                sectorPolygon.Add(contour);
            }

            return sectorPolygon;
        }

        private static IEnumerable<ITriangle> OrderAndMapTriangles(IEnumerable<Triangle> initialCollection)
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
