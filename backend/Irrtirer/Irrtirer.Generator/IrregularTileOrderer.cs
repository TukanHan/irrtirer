using Irrtirer.Generator.Helpers;
using Irrtirer.Generator.Models;
using Irrtirer.Generator.Models.Events;
using Irrtirer.Generator.MosaicStructure;
using Irrtirer.Generator.Orderer;
using Irrtirer.Generator.Tiles;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using static Irrtirer.Generator.Tiles.SectorTileTray;

namespace Irrtirer.Generator
{
    public class IrregularTileOrderer
    {
        public event EventHandler<MosaicSetOrderedArgs> MosaicSetOrderingProgress;
        public event EventHandler<SectorOrderedArgs> SectorOrderingProgress;
        public event EventHandler<SectionOrderedArgs> SectionOrderingProgress;

        private readonly MosaicSetModel mosaicSetModel;
        private readonly IImageSource pictureObject;
        private readonly ILogger logger;

        private readonly EventBus eventBus = new EventBus();
        private readonly CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();

        public IrregularTileOrderer(ILogger logger, IImageSource imageObject, MosaicSetModel mosaicSectors)
        {
            this.logger = logger;
            this.pictureObject = imageObject;
            this.mosaicSetModel = mosaicSectors;

            SubscribeEventBusEvents();
        }

        public Task StartGenerating(TileTray avalibleTiles, int randomSeed = 0)
        {
            RandomFactory randomFactory = new RandomFactory(randomSeed);
            return Task.Factory.StartNew(() => PopulateMosaicSet(avalibleTiles, randomFactory), cancellationTokenSource.Token);
        }

        private List<TileTransform> PopulateMosaicSet(TileTray tileTray, RandomFactory randomFactory)
        {
            List<TileTransform> mosaicSetTiles = new List<TileTransform>();
            foreach (SectorModel sector in mosaicSetModel.Sectors)
            {
                IEnumerable<TileTransform> sectorTiles = PopulateSector(sector, tileTray.GetAvalibleTilesForMosaicSet(), randomFactory);

                mosaicSetTiles.AddRange(sectorTiles);
                tileTray.RemoveTiles(mosaicSetTiles.Select(tileTransform => tileTransform.Tile));
            }

            eventBus.OnMosaicSetOrderingEnd(mosaicSetModel);
            return mosaicSetTiles;
        }

        private IEnumerable<TileTransform> PopulateSector(SectorModel sector, IEnumerable<Tile> avalibleTiles, RandomFactory randomFactory)
        {
            SectorTileTray sectionFilteredTray = new SectorTileTray(avalibleTiles, new SectionTrayFilter()
            {
                MaxRadius = sector.TileMaxRadius,
                MinRadius = sector.TileMinRadius
            });

            SectorPopulator sectorPopulator = new SectorPopulator(logger, randomFactory, pictureObject, eventBus, cancellationTokenSource, sector, sectionFilteredTray);

            List<TileTransform> sectorTiles = new List<TileTransform>();
            foreach (SectionModel section in sector.Sections)
            {
                if (cancellationTokenSource.IsCancellationRequested)
                {
                    return Enumerable.Empty<TileTransform>();
                }

                List<TileTransform> tileLayout = sectorPopulator.PopulateSection(section);
                sectorTiles.AddRange(tileLayout);
            }

            eventBus.OnSectorOrderingEnd(sector);
            return sectorTiles;
        }

        public void Dispose()
        {
            cancellationTokenSource.Cancel();
            eventBus.SectionOrderingProgress -= SubscribeSectionOrderingProgress;
            eventBus.SectorOrderingProgress -= SubscribeSectorOrderingProgress;
            eventBus.MosaicSetOrderingProgress -= SubscribeMosaicSetOrderingProgress;
        }

        private void SubscribeEventBusEvents()
        {
            eventBus.SectionOrderingProgress += SubscribeSectionOrderingProgress;
            eventBus.SectorOrderingProgress += SubscribeSectorOrderingProgress;
            eventBus.MosaicSetOrderingProgress += SubscribeMosaicSetOrderingProgress;
        }

        private void SubscribeSectionOrderingProgress(object sender, SectionOrderedArgs args)
        {
            SectionOrderingProgress?.Invoke(this, args);
        }

        private void SubscribeSectorOrderingProgress(object sender, SectorOrderedArgs args)
        {
            SectorOrderingProgress?.Invoke(this, args);
        }

        private void SubscribeMosaicSetOrderingProgress(object sender, MosaicSetOrderedArgs args)
        {
            MosaicSetOrderingProgress?.Invoke(this, args);
        }
    }
}
