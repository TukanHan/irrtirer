using System.Collections.Generic;
using System.Linq;
using TriangleNet.Geometry;

namespace Irrtirer.Library
{
    public class TriangleGroupingTool
    {
        public IEnumerable<IEnumerable<ITriangle>> GroupMeshParts(IEnumerable<ITriangle> meshTriangles)
        {
            HashSet<ITriangle> allVisited = new HashSet<ITriangle>();

            foreach (ITriangle triangle in meshTriangles)
            {
                if (!allVisited.Contains(triangle))
                {
                    HashSet<ITriangle> visitedInGroup = new HashSet<ITriangle>();
                    Stack<ITriangle> stack = new Stack<ITriangle>(new[] { triangle });

                    while (stack.Count > 0)
                    {
                        ITriangle current = stack.Pop();
                        visitedInGroup.Add(current);
                        allVisited.Add(current);

                        for (int i = 0; i < 3; ++i)
                        {
                            ITriangle neighbor = current.GetNeighbor(i);
                            if (neighbor != null && !visitedInGroup.Contains(neighbor) && meshTriangles.Contains(neighbor))
                            {
                                stack.Push(neighbor);
                            }
                        }
                    }

                    yield return visitedInGroup;
                }
            }
        }
    }
}
