using Irrtirer.Library;
using Irrtirer.Library.Models;
using Irrtirer.Models;
using Microsoft.AspNetCore.Mvc;
using Irrtirer.Library.Extensions;
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
        public IActionResult PolygonTriangulationMesh([FromBody] SectorTriangulationModel sectorTriangulationData)
        {
            SectorTriangulationTool triangulationTool = new SectorTriangulationTool();

            try
            {
                Triangle[] mesh = triangulationTool
                    .GetPolygonTriangulationMesh(sectorTriangulationData)
                    .Select(trinagle => new Triangle(trinagle.ToVector2Array()))
                    .ToArray();

                Vector2[] contour = ContourFinder.FindContour(mesh);

                return Ok(new SectorMeshModel()
                {
                    Triangles = mesh,
                    Contour = contour
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
