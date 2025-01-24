import { BluredImageObject } from '../color-compatibility/blured-image-object.model';
import { ImageObject } from '../color-compatibility/image-object.inteface';
import { EventBus } from '../events/event-bus';
import { Tile } from '../models/tile';
import { TileTransform } from '../models/tile-transform.model';
import { IntersectionRecord } from '../sectors/intersections/intersection-record';
import { SectionModel } from '../sectors/section.model';
import { SectorModel } from '../sectors/sector.model';
import { SectorTileTray } from '../tray/section-tile-tray';
import { PossibleLayout } from './section-layout/possible-layout';
import { SectionPopulator } from './section-populator';

export class SectorPopulator {
    private readonly pixelSourceForSector: BluredImageObject;

    public constructor(
        imageObject: ImageObject,
        sector: SectorModel,
        private sectorFilteredTileSource: SectorTileTray,
        private eventBus: EventBus
    ) {
        this.sectorFilteredTileSource = sectorFilteredTileSource;
        this.pixelSourceForSector = this.getPixelSourceForSector(sector, imageObject);
    }

    public populateSection(section: SectionModel): TileTransform[] {
        const sectionPopulator: SectionPopulator = new SectionPopulator(this.pixelSourceForSector, section);

        const avalibleTiles: Tile[] = this.sectorFilteredTileSource.getAvalibleTilesForSector();
        const bestLayout: PossibleLayout = sectionPopulator.searchForBestSectionLayout(avalibleTiles);

        this.markBestSectionLayout(bestLayout);
        this.eventBus.emitSectionOrderingEnd(section);

        return bestLayout.getTilesLayout();
    }

    private markBestSectionLayout(layout: PossibleLayout): void {
        const generatedTiles: TileTransform[] = layout.getTilesLayout();
        layout.section.directTiles = generatedTiles;

        this.sectorFilteredTileSource.removeTiles(generatedTiles.map((tileTransform) => tileTransform.tile));

        for (const singleTileRate of layout.layoutTilesRates) {
            for (const sectionOccupance of singleTileRate[1].sectionsOcupance) {
                const section: SectionModel = sectionOccupance[0];
                const tileTransform: TileTransform = singleTileRate[0];
                const intersectionArea: number = sectionOccupance[1];
                section.intersections.addIntersection(new IntersectionRecord(tileTransform, intersectionArea));
            }
        }
    }

    private getPixelSourceForSector(sector: SectorModel, imageObject: ImageObject): BluredImageObject {
        const worldRadial: number = Math.max(sector.tileMaxRadius / 2, sector.tileMinRadius) / 2;
        return imageObject.getBluredImage(worldRadial, sector.contour);
    }
}
