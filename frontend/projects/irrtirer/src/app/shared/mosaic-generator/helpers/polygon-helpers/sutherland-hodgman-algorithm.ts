import { Vector } from '../../../../core/models/vector.model';

class Plane {
    public position: Vector;
    public normal: Vector;

    public constructor(position: Vector, normal: Vector) {
        this.position = position;
        this.normal = normal;
    }

    public distanceFromPointToPlane(pointPos: Vector): number {
        return Vector.dot(this.normal, pointPos.sub(this.position));
    }

    public getRayPlaneIntersectionCoordinate(rayStart: Vector, rayDir: Vector): Vector {
        const denominator: number = Vector.dot(this.normal.negation(), rayDir);
        const vecBetween: Vector = this.position.sub(rayStart);
        const t: number = Vector.dot(vecBetween, this.normal.negation()) / denominator;
        return rayStart.add(rayDir.multiply(t));
    }
}

export class SutherlandHodgmanAlgorithm {
    /**
     * Clip Polygon
     * @param shapeVectors Assumes the polygons are oriented counter clockwise, poly_1 is the polygon we want to cut
     * @param maskVectors Assumes the polygon we want to remove from the other polygon is convex, so poly_2 has to be convex
     * @returns Intersection of the polygons
     */
    public static sutherlandHodgmanPolygon(shapeVectors: Vector[], maskVectors: Vector[]): Vector[] {
        //Calculate the clipping planes
        const clippingPlanes: Plane[] = new Array(maskVectors.length);

        for (let i = 0; i < maskVectors.length; i++) {
            const v1: Vector = maskVectors[i];
            const v2: Vector = maskVectors[(i + 1) % maskVectors.length];

            //Doesnt have to be center but easier to debug
            const planePos: Vector = v1.add(v2).multiply(0.5);

            const planeDir: Vector = v2.sub(v1);

            //Should point inwards
            const planeNormal: Vector = new Vector(-planeDir.y, planeDir.x).normalized();

            clippingPlanes[i] = new Plane(planePos, planeNormal);
        }

        return this.clipPolygon(shapeVectors, clippingPlanes);
    }

    //Sometimes its more efficient to calculate the planes once before we call the method
    //if we want to cut several polygons with the same planes
    private static clipPolygon(shapeVectors: Vector[], clippingPlanes: Plane[]): Vector[] {
        //Clone the vertices because we will remove vertices from this list
        const clippedShapeVectors: Vector[] = [...shapeVectors];

        //Save the new vertices temporarily in this list before transfering them to vertices
        const tempClipedShapeVectors: Vector[] = [];

        //Clip the polygon
        for (const plane of clippingPlanes) {
            for (let i = 0; i < clippedShapeVectors.length; i++) {
                const v1: Vector = clippedShapeVectors[i];
                const v2: Vector = clippedShapeVectors[(i + 1) % clippedShapeVectors.length];

                //Calculate the distance to the plane from each vertex
                //This is how we will know if they are inside or outside
                //If they are inside, the distance is positive, which is why the planes normals have to be oriented to the inside

                const dist_to_v1: number = plane.distanceFromPointToPlane(v1);
                const dist_to_v2: number = plane.distanceFromPointToPlane(v2);

                //Case 1. Both are outside (= to the right), do nothing
                //Case 2. Both are inside (= to the left), save v2
                if (dist_to_v1 > 0 && dist_to_v2 > 0) {
                    tempClipedShapeVectors.push(v2);
                }
                //Case 3. Outside -> Inside, save intersection point and v2
                else if (dist_to_v1 < 0 && dist_to_v2 > 0) {
                    const rayDir: Vector = v2.sub(v1).normalized();

                    const intersectionPoint: Vector = plane.getRayPlaneIntersectionCoordinate(v1, rayDir);

                    tempClipedShapeVectors.push(intersectionPoint);

                    tempClipedShapeVectors.push(v2);
                }
                //Case 4. Inside -> Outside, save intersection point
                else if (dist_to_v1 > 0 && dist_to_v2 < 0) {
                    const rayDir: Vector = v2.sub(v1).normalized();

                    const intersectionPoint: Vector = plane.getRayPlaneIntersectionCoordinate(v1, rayDir);

                    tempClipedShapeVectors.push(intersectionPoint);
                }
            }

            clippedShapeVectors.length = 0;
            clippedShapeVectors.push(...tempClipedShapeVectors);

            tempClipedShapeVectors.length = 0;
        }

        return clippedShapeVectors;
    }
}
