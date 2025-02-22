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

        public PossibleLayout TournamentSelection(PossibleLayout[] population, int k)
        {
            k = Math.Min(k, population.Length);

            HashSet<int> drawnIndexes = new HashSet<int>();

            int drawnIndex = random.Next(0, population.Length);
            PossibleLayout bestSpecimen = population[drawnIndex];
            drawnIndexes.Add(drawnIndex);

            while (k > 1)
            {
                drawnIndex = random.Next(0, population.Length);
                if (!drawnIndexes.Contains(drawnIndex))
                {
                    --k;
                    PossibleLayout selectedSpecimen = population[drawnIndex];
                    drawnIndexes.Add(drawnIndex);

                    if (selectedSpecimen.Rate > bestSpecimen.Rate)
                    {
                        bestSpecimen = selectedSpecimen;
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
