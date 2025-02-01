using Irrtirer.Generator.Helpers.PolygonHelpers;
using Irrtirer.Generator.MosaicStructure;
using Irrtirer.Models;
using System.Linq;

namespace Irrtirer.GeneratorPort
{
    public class MosaicSetMapper
    {
        public MosaicSetModel Map(SectorGenerationParams[] sectorsParams, SectorMeshPartsModel[] sectorsMeshes)
        {
            List<SectionModel> allSections = new List<SectionModel>();

            List<SectorModel> sectors = new List<SectorModel>();
            for (int i = 0; i < sectorsParams.Count(); i++)
            {
                var sectorParams = sectorsParams[i];
                foreach(SectorMeshModel sectorMesh in sectorsMeshes[i].Parts)
                {
                    /*
                    if (sectorParams.SectorContour.Count < 3)
                    {
                        throw new Exception("The sector does not have enough vertices");
                    }
                    */

                    SectorModel sector = new SectorModel()
                    {
                        TileMinRadius = sectorParams.TileMinRadius,
                        TileMaxRadius = sectorParams.TileMaxRadius,
                        TileMargin = sectorParams.TileMargin,
                        PopulationParams = sectorParams.PopulationParams,
                        EvaluationParams = sectorParams.EvaluationParams,
                        Contour = sectorMesh.Contour,
                    };

                    sector.Sections = GetSectorSections(sector, sectorMesh);
                    sectors.Add(sector);

                    allSections.AddRange(sectors[i].Sections);
                }
            }

            foreach (SectionModel section in allSections)
            {
                section.Neighbours = allSections.Where(s => s != section && AreNeighborlyTriangles(s, section)).ToArray();
            }

            return new MosaicSetModel()
            {
                Sectors = sectors.AsEnumerable().Reverse().ToArray(),
            };
        }

        private SectionModel[] GetSectorSections(SectorModel sector, SectorMeshModel sectorMesh)
        {
            return sectorMesh.Triangles
                .Select(triangle => new SectionModel(new Triangle(triangle.GetVertices().ToArray()))
                {
                    Parent = sector
                })
                .ToArray();
        }

        private static bool AreNeighborlyTriangles(SectionModel a, SectionModel b)
        {
            float distance = MathF.Max(a.Parent.TileMaxRadius, b.Parent.TileMaxRadius);
            return SeparatingAxisTheorem.GetMinDistance(a.GetWorldVertices(), b.GetWorldVertices()) < distance;
        }
    }
}
