using Irrtirer.Library.Models;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace Irrtirer.Library
{
    public class ContourFinder
    {
        public static Vector2[] FindContour(IEnumerable<Triangle> mesh)
        {
            Dictionary<Line, int> edgeCount = GetCountOfEdgeOccurance(mesh);
            List<Line> contourEdges = GetOuterEdges(edgeCount);
            return RestoreContourFromEdges(contourEdges);
        }

        private static Dictionary<Line, int> GetCountOfEdgeOccurance(IEnumerable<Triangle> mesh)
        {
            var edgeCount = new Dictionary<Line, int>();

            foreach (Triangle triangle in mesh)
            {
                foreach (Line edge in triangle.GetEdges())
                {
                    if (edgeCount.ContainsKey(edge))
                    {
                        edgeCount[edge]++;
                    }
                    else
                    {
                        edgeCount[edge] = 1;
                    }
                }
            }

            return edgeCount;
        }

        private static List<Line> GetOuterEdges(Dictionary<Line, int> edgeCount)
        {
            return edgeCount
                .Where(ec => ec.Value == 1)
                .Select(ec => ec.Key)
                .ToList();
        }

        private static Vector2[] RestoreContourFromEdges(List<Line> contourEdges)
        {
            List<Vector2> contourPoints = new List<Vector2>();
            Line currentEdge = contourEdges.First();
            Vector2 currentPoint = currentEdge.Start;

            for(int i = 0; i< contourEdges.Count; ++i)
            {
                if(!contourPoints.Any(vertex => vertex.Equals(currentPoint)))
                {
                    contourPoints.Add(currentPoint);
                }

                currentEdge = contourEdges.Find(edge => !currentEdge.Equals(edge) && currentPoint.Equals(edge.Start) || currentPoint.Equals(edge.End));
                currentPoint = currentPoint.Equals(currentEdge.Start) ? currentEdge.End : currentEdge.Start;
            }

            return contourPoints.ToArray();
        }
    }
}
