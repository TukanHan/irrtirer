import { Vector } from '../../../core/models/vector.model';
import { TileTransform } from '../models/tile-transform.model';
import { EvaluationParams } from './generation-params/evaluation-params.interface';
import { PopulationParams } from './generation-params/population-params.interface';
import { SectionModel } from './section.model';

export class SectorModel {
    public readonly id: string;

    public tileMinRadius: number;
    public tileMaxRadius: number;
    public tileMargin: number;

    public evaluationParams: EvaluationParams;
    public populationParams: PopulationParams;

    public contour: Vector[];

    public sections: SectionModel[] = [];

    constructor(id: string) {
        this.id = id;
    }

    public getSectorTiles(): TileTransform[] {
        return this.sections
            .filter(section => section.wasGenerated)
            .flatMap(section => section.directTiles);
    }

    public static restore(obj: SectorModel): void {
        Object.setPrototypeOf(obj, SectorModel.prototype);
        for(const section of obj.sections) {
            SectionModel.restore(section, obj);
        }
    }
}
