import { HashMap } from '../../../../core/models/hash-map';
import { SectionModel } from '../../sectors/section.model';

export class SingleTileLayoutRate {
    public readonly sectionsOcupance: HashMap<SectionModel, number> = new HashMap<SectionModel, number>();

    public sectorOccupance: number = 0;

    public differenceForTile: number;
    public countForTile: number;

    /*
    public object Clone()
    {
        return new SingleTileLayoutRate()
        { 
            SectionsOcupance = SectionsOcupance,
            SectorOccupance = SectorOccupance,
            DifferenceForTile = DifferenceForTile,
            CountForTile = CountForTile
        };
    }
    */
}
