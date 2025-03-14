
export const BackendAddress: string = 'https://localhost:7113';
export const address: string = 'https://localhost:7113/api';

export function getPolygonTriangulationMeshApiAddress(): string {
    return `${address}/Mosaic/PolygonTriangulationMesh`;
}

export function getMosaicTriangulationMeshApiAddress(): string {
    return `${address}/Mosaic/MosaicTriangulationMesh`;
}