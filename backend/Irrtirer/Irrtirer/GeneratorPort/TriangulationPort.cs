using Irrtirer.Library;
using Irrtirer.Models;
using Irrtirer.Library.Extensions;
using Irrtirer.Library.Models;
using System.Numerics;
using TriangleNet.Geometry;

namespace Irrtirer.GeneratorPort
{
    public class TriangulationPort
    {
        private readonly SectorTriangulationTool triangulationTool = new SectorTriangulationTool();
        private readonly TriangleGroupingTool groupingTool = new TriangleGroupingTool();

        public SectorMeshPartsModel[] TriangulateOneMeshBasedOnSectors(IEnumerable<SectorTriangulationModel> sectorsTriangulationRequestData)
        {
            return triangulationTool
                .GetMosaicTriangulationMesh(sectorsTriangulationRequestData)
                .Select(sectorMesh => new SectorMeshPartsModel()
                {
                    Parts = groupingTool.GroupMeshParts(sectorMesh).Select(sectorPart => getSectorMeshData(sectorPart))
                })
                .ToArray();
        }

        private SectorMeshModel getSectorMeshData(IEnumerable<ITriangle> sectorPart)
        {
            Triangle[] triangles = sectorPart.Select(trinagle => new Triangle(trinagle.ToVector2Array())).ToArray();
            Vector2[] contour = ContourFinder.FindContour(triangles);

            return new SectorMeshModel()
            {
                Triangles = triangles,
                Contour = contour
            };
        }
    }
}
