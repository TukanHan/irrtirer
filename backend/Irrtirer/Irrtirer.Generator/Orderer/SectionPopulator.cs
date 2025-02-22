using Irrtirer.Generator.ColorCompatibility;
using Irrtirer.Generator.Helpers;
using Irrtirer.Generator.Helpers.PolygonHelpers;
using Irrtirer.Generator.Models.GenerationParams;
using Irrtirer.Generator.MosaicStructure;
using Irrtirer.Generator.Orderer.SectionLayout;
using Irrtirer.Generator.Tiles;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Irrtirer.Generator.Orderer
{
    internal class SectionPopulator
    {
        private readonly ParallelOptions parallelOptions;
        private readonly PopulationParams populationParams;
        private readonly SpecimenSelection specimenSelection;
        private readonly SectionLayoutPreparer sectionLayoutPreparer;

        private readonly int K;

        private readonly ILogger logger;

        public SectionPopulator(
            ILogger logger,
            RandomFactory randomFactory,
            BlurredImageObject pixelSource,
            ParallelOptions parallelOptions,
            SectionModel section)
        {
            this.logger = logger;
            this.parallelOptions = parallelOptions;
            this.populationParams = section.Parent.PopulationParams;
            K = (int)MathF.Max(2, populationParams.PopulationSize / 4f);
            this.specimenSelection = new SpecimenSelection(randomFactory.GetRandomObject());
            this.sectionLayoutPreparer = new SectionLayoutPreparer(randomFactory, pixelSource, section, GetSectionNeighborsTiles(section));
        }

        public PossibleLayout SearchForBestSectionLayout(Tile[] availableTiles)
        {
            PossibleLayout[] initialPopulation = PrepareRandomPopulation(availableTiles);
            PossibleLayout[] population = new PossibleLayout[populationParams.PopulationSize];
            PossibleLayout[] tempArray = new PossibleLayout[populationParams.PopulationSize];

            SelectBestPopulation(initialPopulation, population, K);
            for (int i = 0; i < populationParams.IterationsCount; ++i)
            {
                MutatePopulation(population, tempArray);
                SelectBestPopulation(tempArray, population, K);
            }

            return specimenSelection.SelectBestInPopulation(population);
        }

        private void MutatePopulation(PossibleLayout[] oldPopulation, PossibleLayout[] newPopulation)
        {
            newPopulation[0] = oldPopulation[0].Clone() as PossibleLayout;
            Parallel.For(1, populationParams.PopulationSize, parallelOptions, (index) =>
            {
                try
                {
                    newPopulation[index] = sectionLayoutPreparer.ModifyLayout(oldPopulation[index].Clone() as PossibleLayout, 3);
                }
                catch (Exception ex)
                {
                    logger.LogError(ex.ToString());
                }
            });
        }

        private PossibleLayout[] PrepareRandomPopulation(Tile[] availableTiles)
        {
            PossibleLayout[] initialPopulation = new PossibleLayout[populationParams.InitialPopulationSize];
            Parallel.For(0, populationParams.InitialPopulationSize, parallelOptions, (index) =>
            {
                try
                {
                    initialPopulation[index] = sectionLayoutPreparer.CreateInitialLayout(availableTiles);
                }
                catch (Exception ex)
                {
                    logger.LogError(ex.ToString());
                }
            });

            return initialPopulation;
        }

        private void SelectBestPopulation(PossibleLayout[] oldPopulation, PossibleLayout[] newPopulation, int k)
        {
            newPopulation[0] = specimenSelection.SelectBestInPopulation(oldPopulation);
            for (int i = 1; i < newPopulation.Length; i++)
            {
                newPopulation[i] = specimenSelection.TournamentSelection(oldPopulation, k);
            }
        }

        private TileTransform[] GetSectionNeighborsTiles(SectionModel section)
        {
            return section.Neighbors
                .Where(s => s.WasGenerated)
                .SelectMany(s => s.DirectTiles)
                .Where(t => SeparatingAxisTheorem.GetMinDistance(t.GetWorldVertices(), section.GetWorldVertices()) <= section.Parent.TileMaxRadius + section.Parent.TileMargin)
                .ToArray();
        }
    }
}
