namespace Irrtirer.Generator.Models.GenerationParams
{
    public class EvaluationParams
    {
        public float SingleSectionPopulation { get; set; }
        public float OverlappingAreaOutsideSector { get; set; }
        public float AdditionalPopulationOfNeighboringSectors { get; set; }
        public float OverlappingNotPopulatedSections { get; set; }
        public float TileColorMismatch { get; set; }
    }
}
