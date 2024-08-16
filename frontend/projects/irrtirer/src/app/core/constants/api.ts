export const address: string = 'https://localhost:7113/api';

export function getPolygonTriangulationMeshApiAddres(): string {
    return `${address}/Mosaic/PolygonTriangulationMesh`;
}

export function getMosaicTriangulationMeshApiAddres(): string {
    return `${address}/Mosaic/MosaicTriangulationMesh`;
}