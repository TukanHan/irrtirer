using Irrtirer.Library;
using Irrtirer.Library.Models;
using Irrtirer.Models;
using Microsoft.AspNetCore.Mvc;
using Irrtirer.Library.Extensions;

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
                var result = triangulationTool
                    .GetPolygonTriangulationMesh(sectorTriangulationData)
                    .Select(triangle => triangle.ToVector2Array());

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        public IActionResult MosaicTriangulationMesh([FromBody] SectorTriangulationModel[] sectorsTriangulationRequestData)
        {
            SectorTriangulationTool triangulationTool = new SectorTriangulationTool();
            TriangleGroupingTool groupingTool = new TriangleGroupingTool();

            try
            {
                var result = triangulationTool
                    .GetMosaicTriangulationMesh(sectorsTriangulationRequestData)
                    .Select(sectorMesh => new SectorTriangulationMeshPartsModel()
                        {
                            Parts = groupingTool.GroupMeshParts(sectorMesh).Select(sectorPart => new SectorTriangulationMeshModel()
                            {
                                Triangles = sectorPart.Select(trinagle => trinagle.ToVector2Array())
                            })
                        }
                    );
                
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
