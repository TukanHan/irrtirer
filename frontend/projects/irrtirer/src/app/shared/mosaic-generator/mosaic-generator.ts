import { TileTray } from './tray/tile-tray';
import { MosaicSetModel } from './sectors/mosaic-set.model';
import { TileTransform } from './models/tile-transform.model';
import { SectorModel } from './sectors/sector.model';
import { Tile } from './models/tile';
import { SectionTrayFilter, SectorTileTray } from './tray/section-tile-tray';
import { SectorPopulator } from './orderer/sector-populator';
import { ImageObject } from './color-compatibility/image-object.inteface';
import { Observable } from 'rxjs';
import { EventBus } from './events/event-bus';
import { SectorOrderedArgs } from './events/sector-ordered-args.interface';
import { SectionOrderedArgs } from './events/section-ordered-args.interface';

export class MosaicGenerator {
    private readonly eventBus: EventBus = new EventBus();
    private readonly imageObject: ImageObject;

    public sectorOrderingProgress$: Observable<SectorOrderedArgs> = this.eventBus.sectorOrderingProgress$;

    public sectionOrderingProgress$: Observable<SectionOrderedArgs> = this.eventBus.sectionOrderingProgress$;

    constructor(imageObject: ImageObject) {
        this.imageObject = imageObject;
    }

    generate(mosaicSetModel: MosaicSetModel, avalibleTiles: TileTray): void {
        this.populateMosaicSet(mosaicSetModel, avalibleTiles);
    }

    populateMosaicSet(mosaicSetModel: MosaicSetModel, tileTray: TileTray): TileTransform[] {
        const mosaicSetTiles: TileTransform[] = [];
        for (const sector of mosaicSetModel.sectors) {
            const sectorTiles: TileTransform[] = this.populateSector(sector, tileTray.getAvalibleTilesForMosaicSet());

            mosaicSetTiles.push(...sectorTiles);
            tileTray.removeTiles(sectorTiles.map((tileTransform) => tileTransform.tile));
        }

        return mosaicSetTiles;
    }

    populateSector(sector: SectorModel, avalibleTiles: Iterable<Tile>): TileTransform[] {
        const filter: SectionTrayFilter = new SectionTrayFilter(sector.tileMinRadius, sector.tileMaxRadius);
        const sectionFilteredTray: SectorTileTray = new SectorTileTray(avalibleTiles, filter);

        const sectorPopulator: SectorPopulator = new SectorPopulator(
            this.imageObject,
            sector,
            sectionFilteredTray,
            this.eventBus
        );

        const sectorTiles: TileTransform[] = [];
        for (const section of sector.sections) {
            const tileLayout: TileTransform[] = sectorPopulator.populateSection(section);
            sectorTiles.push(...tileLayout);
        }

        this.eventBus.emitSectorOrderingEnd(sector);
        return sectorTiles;
    }
}