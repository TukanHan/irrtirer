import { HashMap } from '../../../../core/models/hash-map';
import { TileTransform } from '../../models/tile-transform.model';
import { SectionModel } from '../../sectors/section.model';
import { SingleTileLayoutRate } from './single-tile-layout-rate.model';

export class LayoutTilesRate extends HashMap<TileTransform, SingleTileLayoutRate> {
    public getSectionOccupance(section: SectionModel): number {
        let sectionOccupance: number = 0;
        for (const value of this.getValues()) {
            const ocupance: number = value.sectionsOcupance.get(section);
            sectionOccupance += ocupance ?? 0;
        }

        return sectionOccupance;
    }

    /*
    public object Clone()
    {
        LayoutTilesRate cloned = new LayoutTilesRate();

        foreach (var keyPair in this)
        {
            cloned[keyPair.Key] = keyPair.Value;
        }

        return cloned;
    }

    */
}
