import { Vector } from '../../../../core/models/vector.model';

export class SeparatingAxisTheorem {
    /**
     * Calculate the projection of a polygon on an axis
     * @returns it as a [min, max] interval
     */
    private static projectPolygon(axis: Vector, vertices: Vector[]): { min: number; max: number } {
        // To project a point on an axis use the dot product
        let dotProduct: number = Vector.dot(axis, vertices[0]);
        let min: number = dotProduct,
            max: number = dotProduct;
        for (let i = 1; i < vertices.length; ++i) {
            dotProduct = Vector.dot(vertices[i], axis);
            if (dotProduct < min) {
                min = dotProduct;
            } else if (dotProduct > max) {
                max = dotProduct;
            }
        }

        return { min, max };
    }

    // Calculate the distance between [minA, maxA] and [minB, maxB]
    // The distance will be negative if the intervals overlap
    public static intervalDistance(minA: number, maxA: number, minB: number, maxB: number): number {
        if (minA < minB) {
            return minB - maxA;
        } else {
            return minA - maxB;
        }
    }

    // Check if polygon A is going to collide with polygon B.
    // The last parameter is the *relative* velocity
    // of the polygons (i.e. velocityA - velocityB)
    public static testIfPolygonCollide(verticesA: Vector[], verticesB: Vector[]): boolean {
        const edgesA: Vector[] = this.prepareEdges(verticesA);
        const edgesB: Vector[] = this.prepareEdges(verticesB);

        // Loop through all the edges of both polygons
        for (let edgeIndex = 0, n = edgesA.length + edgesB.length; edgeIndex < n; ++edgeIndex) {
            const edge: Vector = edgeIndex < edgesA.length ? edgesA[edgeIndex] : edgesB[edgeIndex - edgesA.length];

            // Find the axis perpendicular to the current edge
            const axis: Vector = new Vector(-edge.y, edge.x).normalized();

            // Find the projection of the polygon on the current axis
            const { min: minA, max: maxA } = this.projectPolygon(axis, verticesA);
            const { min: minB, max: maxB } = this.projectPolygon(axis, verticesB);

            // Check if the polygon projections are currentlty intersecting
            if (this.intervalDistance(minA, maxA, minB, maxB) > 0) {
                return false;
            }
        }

        return true;
    }

    public static getMinDistance(verticesA: Vector[], verticesB: Vector[]): number {
        const edgesA: Vector[] = this.prepareEdges(verticesA);
        const edgesB: Vector[] = this.prepareEdges(verticesB);
        let maxDistance: number = Number.MIN_VALUE;

        // Loop through all the edges of both polygons
        for (let edgeIndex = 0, n = edgesA.length + edgesB.length; edgeIndex < n; ++edgeIndex) {
            const edge: Vector = edgeIndex < edgesA.length ? edgesA[edgeIndex] : edgesB[edgeIndex - edgesA.length];

            // Find the axis perpendicular to the current edge
            const axis: Vector = new Vector(-edge.y, edge.x).normalized();

            // Find the projection of the polygon on the current axis
            const { min: minA, max: maxA } = this.projectPolygon(axis, verticesA);
            const { min: minB, max: maxB } = this.projectPolygon(axis, verticesB);

            // Check if the polygon projections are currentlty intersecting
            const distance: number = this.intervalDistance(minA, maxA, minB, maxB);

            if (maxDistance < distance) {
                maxDistance = distance;
            }
        }

        return maxDistance;
    }

    private static prepareEdges(vertices: Vector[]): Vector[] {
        const edges: Vector[] = [];
        for (let i = 0; i < vertices.length; ++i) {
            const nextVertex: Vector = vertices[(i + 1) % vertices.length];
            edges.push(nextVertex.sub(vertices[i]));
        }

        return edges;
    }
}