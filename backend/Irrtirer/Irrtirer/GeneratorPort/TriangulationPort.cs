﻿using Irrtirer.Library;
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

        public SectorMeshPartsModel[] TriangulateOneMeshBasedOnSectors(IEnumerable<SectorGenerationParams> sectorsTriangulationRequestData)
        {
            return triangulationTool
                .GetMosaicTriangulationMesh(sectorsTriangulationRequestData.Select(sector => sector.TriangulationData))
                .Zip(sectorsTriangulationRequestData, (mesh, request) => new { mesh, request })
                .Select(elem => new SectorMeshPartsModel()
                {
                    SectorId = elem.request.Id,
                    Parts = groupingTool.GroupMeshParts(elem.mesh).Select(sectorPart => getSectorMeshData(sectorPart))
                })
                .ToArray();
        }

        private SectorMeshModel getSectorMeshData(IEnumerable<ITriangle> sectorPart)
        {
            Triangle[] triangles = MeshTileOrderer
                .OrderAndMapTriangles(sectorPart)
                .Select(trinagle => new Triangle(trinagle.ToVector2Array()))
                .ToArray();

            Vector2[] contour = MeshContourFinder.FindContour(triangles);

            return new SectorMeshModel()
            {
                Triangles = triangles,
                Contour = contour
            };
        }
    }
}
