using Irrtirer.Generator.Models.Events;
using Irrtirer.Generator.MosaicStructure;
using System;
using System.Linq;

namespace Irrtirer.Generator.Orderer
{
    internal class EventBus
    {
        public event EventHandler<MosaicSetOrderedArgs> MosaicSetOrderingProgress;
        public event EventHandler<SectorOrderedArgs> SectorOrderingProgress;
        public event EventHandler<SectionOrderedArgs> SectionOrderingProgress;

        public void OnMosaicSetOrderingEnd(MosaicSetModel mosaicSet)
        {
            MosaicSetOrderingProgress?.Invoke(this, new MosaicSetOrderedArgs()
            {
                Tiles = mosaicSet.MosaicSetTiles.Select(x => x.ToResult())
            });
        }

        public void OnSectorOrderingEnd(SectorModel sectorModel)
        {
            SectorOrderingProgress?.Invoke(this, new SectorOrderedArgs()
            {
                Tiles = sectorModel.SectorTiles.Select(x => x.ToResult())
            });
        }

        public void OnSectionOrderingEnd(SectionModel sectionModel)
        {
            SectionOrderingProgress?.Invoke(this, new SectionOrderedArgs()
            {
                Tiles = sectionModel.DirectTiles.Select(x => x.ToResult())
            });
        }
    }
}
