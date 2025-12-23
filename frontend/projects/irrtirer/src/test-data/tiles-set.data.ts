import { Vector } from '../app/core/models/math/vector.model';
import { GeneratedTilesSet, TileModel } from '../app/core/models/mosaic-project.model';

export const tileMock: TileModel = {
    id: 'f7dbbcf0-6d32-4978-a933-f881c56786e3',
    color: '#80626E',
    vertices: [
        new Vector( 7.5, 15.33 ),
        new Vector(21.16, 5.11),
        new Vector(4.68, -11.07),
        new Vector(-20.71, -16.44),
        new Vector(-6.59, 12.71)
    ],
};

export const tilesSetMock: GeneratedTilesSet = {
    id: 'a1e5f4d3-1c4b-4e2b-9f4b-3e2f5d6c7b8a',
    name: '232',
    source: 'generated',
    minRadius: 1,
    maxRadius: 2,
    tiles: [
        tileMock,
        {
            id: '7b5cd244-8f9b-46b6-b7ce-54c7de4b45b8',
            color: '#636365',
            vertices: [
                new Vector(-2.25, 18.71),
                new Vector(22.68, 10.79),
                new Vector(7.88, -23.65),
                new Vector(-16.64, -10.85),
                new Vector(-20.76, 11.59)
            ],
        },
    ],
};
