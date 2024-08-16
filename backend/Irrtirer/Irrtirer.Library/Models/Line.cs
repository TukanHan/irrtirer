using System;
using System.Numerics;

namespace Irrtirer.Library.Models
{
    internal struct Line
    {
        public Vector2 Start { get; set; }
        public Vector2 End { get; set; }

        public Line(Vector2 start, Vector2 end)
        {
            Start = start;
            End = end;
        }

        public override bool Equals(object obj)
        {
            if (obj is Line l)
            {
                if ((l.Start == Start && l.End == End) || (l.Start == End && l.End == Start))
                    return true;
            }

            return false;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Start, End);
        }
    }
}
