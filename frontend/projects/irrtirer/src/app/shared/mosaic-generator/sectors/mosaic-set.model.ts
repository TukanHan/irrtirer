import { SectionModel } from './section.model';
import { SectorModel } from './sector.model';

export class MosaicSetModel {
    public sectors: SectorModel[];

    public static serialize(obj: MosaicSetModel): string {
        obj.sectors.forEach((sector: SectorModel) => {
            sector.sections.forEach((section: SectionModel) => {
                section.parent = null;
                section.neighboursIds = section.neighbours.map((neighbour: SectionModel) => neighbour.id);
                section.neighbours = undefined;
            });
        });

        return JSON.stringify(obj);
    }

    public static deserialize(text: string): MosaicSetModel {
        const obj: MosaicSetModel = JSON.parse(text);

        const allSections = new Map(obj.sectors.flatMap((sector: SectorModel) => sector.sections).map((obj) => [obj.id, obj]));

        Object.setPrototypeOf(obj, MosaicSetModel.prototype);
        for (const sector of obj.sectors) {
            SectorModel.restore(sector);
            for(const section of sector.sections) {
                section.neighbours = section.neighboursIds.map((id: number) => allSections.get(id));
            }
        }

        return obj;
    }
}
