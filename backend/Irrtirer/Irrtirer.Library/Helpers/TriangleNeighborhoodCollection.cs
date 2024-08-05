using System.Collections.Generic;
using System.Linq;
using TriangleNet.Geometry;

namespace Irrtirer.Library.Helpers
{
    internal class TriangleNeighborhoodEntity
    {
        public ITriangle Triangle { get; }
        public double FarthestLeft { get; }
        public int SelectedNeighbours { get; set; }

        public TriangleNeighborhoodEntity(ITriangle triangle)
        {
            Triangle = triangle;
            FarthestLeft = Enumerable.Range(0, 3).Min(vertexIndex => triangle.GetVertex(vertexIndex).X);
            SelectedNeighbours = 0;
        }
    }

    internal class TriangleNeighborhoodCollection : List<TriangleNeighborhoodEntity>
    {
        public void RegisterSelectedNeighbour(ITriangle triangle)
        {
            var triangleEntity = this.Find(x => x.Triangle.Equals(triangle));
            if (triangleEntity != null)
            {
                triangleEntity.SelectedNeighbours++;
            }
        }

        public ITriangle DequeueNextTriangle()
        {
            var selectedTriangle = this.OrderByDescending(x => x.SelectedNeighbours)
                .ThenBy(x => x.FarthestLeft)
                .FirstOrDefault();

            this.Remove(selectedTriangle);
            return selectedTriangle.Triangle;
        }
    }
}
