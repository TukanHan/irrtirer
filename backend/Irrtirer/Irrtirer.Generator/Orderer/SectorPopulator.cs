using Irrtirer.Generator.ColorCompatibility;
using Irrtirer.Generator.Helpers;
using Irrtirer.Generator.Models;
using Irrtirer.Generator.MosaicStructure;
using Irrtirer.Generator.Tiles;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Irrtirer.Generator.Orderer.SectionLayout;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace Irrtirer.Generator.Orderer
{
    internal class SectorPopulator
    {
        private readonly EventBus eventBus;
        private readonly RandomFactory randomFactory;
        private readonly SectorTileTray sectorFilteredTileSource;
        private readonly BluredImageObject pixelSourceForSector;
        private readonly ParallelOptions parallelOptions;
        private readonly ILogger logger;

        public SectorPopulator(
            ILogger logger,
            RandomFactory randomFactory,
            IImageSource imageObject,
            EventBus eventBus,
            CancellationTokenSource cancellationTokenSource,
            SectorModel sector,
            SectorTileTray sectorFilteredTileSource)
        {
            this.logger = logger;
            this.eventBus = eventBus;
            this.randomFactory = randomFactory;
            this.sectorFilteredTileSource = sectorFilteredTileSource;

            pixelSourceForSector = GetPixelSourceForSector(sector, imageObject);
            parallelOptions = new ParallelOptions()
            {
                MaxDegreeOfParallelism = 5,
                CancellationToken = cancellationTokenSource.Token
            };
        }

        public List<TileTransform> PopulateSection(SectionModel section)
        {
            SectionPopulator sectionPopulator = new SectionPopulator(logger, randomFactory, pixelSourceForSector, parallelOptions, section);

            Tile[] avalibleTiles = sectorFilteredTileSource.GetAvalibleTilesForSector();
            PossibleLayout bestLayout = sectionPopulator.SearchForBestSectionLayout(avalibleTiles);

            MarkBestSectionLayout(bestLayout);

            eventBus.OnSectionOrderingEnd(section);
            return bestLayout.TilesLayout;
        }

        private void MarkBestSectionLayout(PossibleLayout layout)
        {
            layout.Section.DirectTiles = layout.TilesLayout;

            sectorFilteredTileSource.RemoveTiles(layout.TilesLayout.Select(tileTransform => tileTransform.Tile));

            foreach (var singleTileRate in layout.LayoutTilesRates)
            {
                foreach (var sectionOccupance in singleTileRate.Value.SectionsOcupance)
                {
                    SectionModel section = sectionOccupance.Key;
                    section.Intersections.AddIntersection(new IntersectionRecord()
                    {
                        Tile = singleTileRate.Key,
                        Area = sectionOccupance.Value
                    });
                }
            }
        }

        private BluredImageObject GetPixelSourceForSector(SectorModel sector, IImageSource imageObject)
        {
            float worldRadial = MathF.Max(sector.TileMaxRadius / 2, sector.TileMinRadius) / 2;
            return imageObject.GetBluredImage(worldRadial, sector.Contour);
        }
    }
}
