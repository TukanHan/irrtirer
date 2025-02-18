import { Vector } from '../app/core/models/math/vector.model';
import { SectorSchema } from '../app/core/models/mosaic-project.model';

export const faceSector: SectorSchema = {
    id: '28de0a80-5b2d-4dba-83cc-052686428fce',
    name: 'Twarz',
    color: "#f2af3d",
    vertices: [
        new Vector(-12.575004609623136, -52.52902802526164),
        new Vector(-6.445132247241247, -54.592549414578315),
        new Vector(-0.9828697461088751, -54.4104739978739),
        new Vector(7.028448588885276, -50.76896566378565),
        new Vector(8.606435533656843, -44.21425066242681),
        new Vector(9.759579839451455, -30.9227452430047),
        new Vector(8.424360116952428, -25.157023714031638),
        new Vector(4.054550116046528, -21.69759079664781),
        new Vector(-4.320919052356437, -18.6023087126728),
        new Vector(-7.962427386444688, -22.00104982448849),
        new Vector(-12.757080026327543, -26.917086075507633),
        new Vector(-14.45645058223539, -34.68563718822922),
        new Vector(-14.213683359962843, -41.36173580072435),
        new Vector(-14.517142387803531, -44.578401495835635),
    ],
    properties: {
        sectionMaxArea: 3,
        sectionMinAngle: 35,
        minTileRadius: 0.25,
        maxTileRadius: 1,
        tilesMargin: 0.1,
        evaluationParams: {
            singleSectionPopulation: 2,
            overlappingAreaOutsideSector: -2,
            additionalPopulationOfNeighboringSectors: 4,
            overlappingNotPopulatedSections: -1,
            tileColorMismatch: -2,
        },
        populationParams: {
            initialPopulationSize: 100,
            countOfTriesToInsertTile: 30,
            countOfRandomingTrianglePosition: 30,
            countOfColorMatchingAttempts: 40,
            iterationsCount: 100,
            populationSize: 10,
        },
    },
};
