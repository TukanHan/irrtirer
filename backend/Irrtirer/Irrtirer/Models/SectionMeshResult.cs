namespace Irrtirer.Models
{
    public class SectionMeshResult
    {
        public Guid SectorId { get; set; }
        public IEnumerable<TileTransformModel> TilesTransforms { get; set; }
    }
}
