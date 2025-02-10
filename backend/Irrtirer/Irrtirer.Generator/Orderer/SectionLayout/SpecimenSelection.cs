using System;
using System.Collections.Generic;

namespace Irrtirer.Generator.Orderer.SectionLayout
{
    internal class SpecimenSelection
    {
        private readonly Random random;

        public SpecimenSelection(Random random)
        {
            this.random = random;
        }

        public PossibleLayout TurnamentSelection(PossibleLayout[] population, int k)
        {
            k = Math.Min(k, population.Length);

            HashSet<int> randomedIndexes = new HashSet<int>();

            int randomedIndex = random.Next(0, population.Length);
            PossibleLayout bestSpecimen = population[randomedIndex];
            randomedIndexes.Add(randomedIndex);

            while (k > 1)
            {
                randomedIndex = random.Next(0, population.Length);
                if (!randomedIndexes.Contains(randomedIndex))
                {
                    --k;
                    PossibleLayout selctedSpecimen = population[randomedIndex];
                    randomedIndexes.Add(randomedIndex);

                    if (selctedSpecimen.Rate > bestSpecimen.Rate)
                    {
                        bestSpecimen = selctedSpecimen;
                    }
                }
            }

            return bestSpecimen;
        }

        public PossibleLayout SelectBestInPopulation(PossibleLayout[] population)
        {
            PossibleLayout bestSpecimen = population[0];
            for (int i = 1; i < population.Length; ++i)
            {
                if (population[i].Rate > bestSpecimen.Rate)
                {
                    bestSpecimen = population[i];
                }
            }

            return bestSpecimen;
        }
    }
}
