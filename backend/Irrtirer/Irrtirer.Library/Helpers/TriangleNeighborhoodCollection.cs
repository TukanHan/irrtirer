using System.Collections.Generic;
using System.Linq;
using TriangleNet.Geometry;

namespace Irrtirer.Library.Helpers
{
    internal class TriangleNeighborhoodEntity
    {
        public ITriangle Triangle { get; }
        public double FarthestLeft { get; }
        public int SelectedNeighbors { get; set; }

        public TriangleNeighborhoodEntity(ITriangle triangle)
        {
            Triangle = triangle;
            FarthestLeft = Enumerable.Range(0, 3).Min(vertexIndex => triangle.GetVertex(vertexIndex).X);
            SelectedNeighbors = 0;
        }
    }

    internal class TriangleNeighborhoodCollection : List<TriangleNeighborhoodEntity>
    {
        public void RegisterSelectedNeighbor(ITriangle triangle)
        {
            var triangleEntity = this.Find(x => x.Triangle.Equals(triangle));
            if (triangleEntity != null)
            {
                triangleEntity.SelectedNeighbors++;
            }
        }

        public ITriangle DequeueNextTriangle()
        {
            var selectedTriangle = this.OrderByDescending(x => x.SelectedNeighbors)
                .ThenBy(x => x.FarthestLeft)
                .FirstOrDefault();

            this.Remove(selectedTriangle);
            return selectedTriangle.Triangle;
        }
    }
}
