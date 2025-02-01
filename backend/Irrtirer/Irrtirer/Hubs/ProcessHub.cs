using Irrtirer.Generator;
using Irrtirer.Generator.Models;
using Irrtirer.Generator.Tiles;
using Irrtirer.GeneratorPort;
using Irrtirer.Models;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;
using System.Drawing;

namespace Irrtirer.Hubs
{
    public interface IProcessHub
    {
        Task ReceiveMosaicSectorsMesh(IEnumerable<SectorMeshPartsModel> mesh);
        Task ReceiveMosaicSectionTiles(IEnumerable<TileTransformModel> tilesTransforms);
        Task ReceiveFinishNotification();
    }

    public class ProcessHub : Hub<IProcessHub>
    {
        private static readonly ConcurrentDictionary<string, IrregularTileOrderer> Resources = new ConcurrentDictionary<string, IrregularTileOrderer>();

        private readonly ILogger<ProcessHub> logger;

        public ProcessHub(ILogger<ProcessHub> logger)
        {
            this.logger = logger;
        }

        public async Task InitMosaicTriangulation(InitMosaicGenerationRequest requestData)
        {
            var imageSourceConverter = new Base64ToImageSourceConverter();
            var triangulationPort = new TriangulationPort();
            var mosaicSetMapper = new MosaicSetMapper();

            try
            {
                var sectorsTriangulationParams = requestData.SectorsGenerationParams.Select(x => x.TriangulationData).ToArray();
                SectorMeshPartsModel[] mesh = triangulationPort.TriangulateOneMeshBasedOnSectors(sectorsTriangulationParams);

                IImageSource imageObject = imageSourceConverter.ToImageSource(requestData.Base64Image, requestData.MosaicWidth);
                var mosaicSetModel = mosaicSetMapper.Map(requestData.SectorsGenerationParams, mesh);

                IrregularTileOrderer irrtirer = new IrregularTileOrderer(logger, imageObject, mosaicSetModel);

                Resources.TryAdd(Context.ConnectionId, irrtirer);

                await Clients.Caller.ReceiveMosaicSectorsMesh(mesh);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.ToString());
            }
        }

        public async Task StartMosaicGeneration(IEnumerable<TileModel> tiles)
        {
            try
            {
                if (!Resources.TryRemove(Context.ConnectionId, out var irrtirer))
                {
                    logger.LogError("Nie znaleziono obiektu");
                    return;
                }

                TileTray tileTray = new TileTray(tiles.Select(x => new Tile(x.Id, x.Vertices, ColorTranslator.FromHtml(x.Color))));

                irrtirer.SectionOrderingProgress += async (sender, evt) =>
                {
                    IEnumerable<TileTransformModel> sectionTiles = evt.Tiles.Select(tileTransform => new TileTransformModel(tileTransform));
                    await Clients.Caller.ReceiveMosaicSectionTiles(sectionTiles);
                };

                irrtirer.MosaicSetOrderingProgress += async (sender, evt) =>
                {
                    await Clients.Caller.ReceiveFinishNotification();
                };

                await irrtirer.StartGenerating(tileTray, new Random().Next());
            }
            catch (Exception ex)
            {
                logger.LogError(ex.ToString());
            }
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            if (Resources.TryRemove(Context.ConnectionId, out var irrtirer))
            {
                irrtirer.Dispose();
            }
            
            return base.OnDisconnectedAsync(exception);
        }
    }
}
