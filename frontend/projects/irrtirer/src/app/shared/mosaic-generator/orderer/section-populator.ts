import { BluredImageObject } from '../color-compatibility/blured-image-object.model';
import { SeparatingAxisTheorem } from '../helpers/polygon-helpers/separating-axis-theorem';
import { Tile } from '../models/tile';
import { TileTransform } from '../models/tile-transform.model';
import { PopulationParams } from '../sectors/generation-params/population-params.interface';
import { SectionModel } from '../sectors/section.model';
import { PossibleLayout } from './section-layout/possible-layout';
import { SectionLayoutPreparer } from './section-layout/section-layout-preparer';
import { SpecimenSelection } from './section-layout/specimen-selection';

export class SectionPopulator {
    private readonly populationParams: PopulationParams;
    private readonly specimenSelection: SpecimenSelection;
    private readonly sectionLayoutPreparer: SectionLayoutPreparer;

    private readonly K: number;

    constructor(pixelSource: BluredImageObject, section: SectionModel) {
        this.populationParams = section.parent.populationParams;
        this.K = Math.max(2, this.populationParams.populationSize / 4);
        this.specimenSelection = new SpecimenSelection();
        this.sectionLayoutPreparer = new SectionLayoutPreparer(pixelSource, section, this.getSectionNeighbourTiles(section));
    }

    public searchForBestSectionLayout(avalibleTiles: Tile[]): PossibleLayout {
        const initialPopulation: PossibleLayout[] = this.prepareRandomPopulation(avalibleTiles);
        const population: PossibleLayout[] = new Array(this.populationParams.populationSize);
        const tempArray: PossibleLayout[] = new Array(this.populationParams.populationSize);

        this.selectBestPopulation(initialPopulation, population, this.K);
        for (let i = 0; i < this.populationParams.iterationsCount; ++i) {
            //this.mutatePopulation(population, tempArray);
            //this.selectBestPopulation(tempArray, population, this.K);
        }

        return this.specimenSelection.selectBestInPopulation(population);
    }

    private mutatePopulation(oldPopulation: PossibleLayout[], newPopulation: PossibleLayout[]): void {
        throw new Error();
    }

    private prepareRandomPopulation(avalibleTiles: Tile[]): PossibleLayout[] {
        const initialPopulation: PossibleLayout[] = new Array(this.populationParams.initialPopulationSize);
        //tu byli paralele
        for (let i = 0; i < this.populationParams.initialPopulationSize; ++i) {
            initialPopulation[i] = this.sectionLayoutPreparer.createInitialLayout(avalibleTiles);
        }

        return initialPopulation;
    }

    private selectBestPopulation(oldPopulation: PossibleLayout[], newPopulation: PossibleLayout[], k: number): void {
        newPopulation[0] = this.specimenSelection.selectBestInPopulation(oldPopulation);
        for (let i = 1; i < newPopulation.length; i++) {
            newPopulation[i] = this.specimenSelection.turnamentSelection(oldPopulation, k);
        }
    }

    private getSectionNeighbourTiles(section: SectionModel): TileTransform[] {
        return section.neighbours
            .filter((s) => s.wasGenerated)
            .flatMap((s) => s.directTiles)
            .filter((t) => SeparatingAxisTheorem.getMinDistance(t.getWorldVertices(), section.getWorldVertices()) <= section.parent.tileMaxRadius + section.parent.tileMargin);
    }
}
