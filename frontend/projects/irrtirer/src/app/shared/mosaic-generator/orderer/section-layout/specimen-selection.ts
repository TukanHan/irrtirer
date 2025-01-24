import { RandomHelper } from '../../../../core/helpers/random-helper';
import { PossibleLayout } from './possible-layout';

export class SpecimenSelection {
    public turnamentSelection(population: PossibleLayout[], k: number): PossibleLayout {
        k = Math.min(k, population.length);

        const randomedIndexes: Set<number> = new Set<number>();

        let randomedIndex: number = RandomHelper.nextInt(0, population.length-1);
        let bestSpecimen: PossibleLayout = population[randomedIndex];
        randomedIndexes.add(randomedIndex);

        while (k > 1) {
            randomedIndex = RandomHelper.nextInt(0, population.length-1);
            if (!randomedIndexes.has(randomedIndex)) {
                --k;
                const selctedSpecimen: PossibleLayout = population[randomedIndex];
                randomedIndexes.add(randomedIndex);

                if (selctedSpecimen.rate > bestSpecimen.rate) {
                    bestSpecimen = selctedSpecimen;
                }
            }
        }

        return bestSpecimen;
    }

    public selectBestInPopulation(population: PossibleLayout[]): PossibleLayout {
        let bestSpecimen: PossibleLayout = population[0];
        for (let i = 1; i < population.length; ++i) {
            if (population[i].rate > bestSpecimen.rate) {
                bestSpecimen = population[i];
            }
        }

        return bestSpecimen;
    }
}
