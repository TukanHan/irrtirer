namespace Irrtirer.Models
{
    public class SectionMeshResult
    {
        public required Guid SectorId { get; set; }
        public required IEnumerable<TileTransformModel> TilesTransforms { get; set; }
    }
}
