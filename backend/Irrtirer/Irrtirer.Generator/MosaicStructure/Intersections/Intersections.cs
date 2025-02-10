using System.Collections.Generic;

namespace Irrtirer.Generator.MosaicStructure
{
    internal class Intersections
    {
        public List<IntersectionRecord> Records { get; private set; } = new List<IntersectionRecord>();
        public float IntersectionArea { get; private set; }

        public void AddIntersection(IntersectionRecord record)
        {
            Records.Add(record);
            IntersectionArea += record.Area;
        }
    }
}
