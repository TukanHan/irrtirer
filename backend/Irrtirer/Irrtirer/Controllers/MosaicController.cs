using Irrtirer.Library;
using Irrtirer.Library.Models;
using Irrtirer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Numerics;

namespace Irrtirer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MosaicController : ControllerBase
    {
        private readonly ILogger<MosaicController> _logger;

        public MosaicController(ILogger<MosaicController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IEnumerable<VertexModel[]> PolygonTriangulationMesh([FromBody] VertexModel[] polygon, float sectionMaxArea, float sectionMinAngle)
        {
            TriangulationTool tool = new TriangulationTool();
            Vector2[] polygonVertices = polygon.Select(vertex => new Vector2(vertex.X, vertex.Y)).ToArray();
            return tool.GetPolygonTriangulationMesh(polygonVertices, sectionMaxArea, sectionMinAngle)
                    .Select(triangle => new[] { new VertexModel(triangle.A), new VertexModel(triangle.B), new VertexModel(triangle.C) });
        }
    }
}
