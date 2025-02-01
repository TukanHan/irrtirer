using System.Numerics;

namespace Irrtirer.Library.Models
{
    public struct Line
    {
        public Vector2 Start { get; }
        public Vector2 End { get; }

        public Line(Vector2 start, Vector2 end)
        {
            Start = start;
            End = end;
        }

        public override bool Equals(object obj)
        {
            if (obj is Line l)
            {
                return (l.Start == Start && l.End == End) || (l.Start == End && l.End == Start);
            }

            return false;
        }

        public override int GetHashCode()
        {
            return Start.GetHashCode() ^ End.GetHashCode();
        }
    }
}
