import { PolygonHelper } from '../../../core/helpers/polygon/polygon-helper';
import { Vector } from '../../../core/models/vector.model';
import { SeparatingAxisTheorem } from '../helpers/polygon-helpers/separating-axis-theorem';
import { SutherlandHodgmanAlgorithm } from '../helpers/polygon-helpers/sutherland-hodgman-algorithm';

export abstract class GeometryObject {
    public abstract getWorldVertices(): Vector[];
    public abstract getCentroid(): Vector;

    public abstract outerRadius: number;
    public abstract innerRadius: number;

    public isColliding(otherObj: GeometryObject): boolean {
        const distance: number = Vector.distance(otherObj.getCentroid(), this.getCentroid());
        if (distance < otherObj.innerRadius + this.innerRadius) {
            return true;
        } else if (distance < otherObj.outerRadius + this.outerRadius) {
            if (SeparatingAxisTheorem.testIfPolygonCollide(this.getWorldVertices(), otherObj.getWorldVertices())) {
                return true;
            }
        }

        return false;
    }

    public isMaintainingMinimalDistance(otherObj: GeometryObject, minimalDistance: number): boolean {
        const distance: number = Vector.distance(otherObj.getCentroid(), this.getCentroid());
        if (distance < otherObj.innerRadius + this.innerRadius + minimalDistance) {
            return false;
        } else if (distance <= otherObj.outerRadius + this.outerRadius + minimalDistance) {
            if (SeparatingAxisTheorem.getMinDistance(this.getWorldVertices(), otherObj.getWorldVertices()) < minimalDistance) {
                return false;
            }
        }

        return true;
    }

    public getIntersectionArea(otherObj: GeometryObject): number {
        if (Vector.distance(otherObj.getCentroid(), this.getCentroid()) < otherObj.outerRadius + this.outerRadius) {
            const intersectionPolygon: Vector[] = SutherlandHodgmanAlgorithm.sutherlandHodgmanPolygon(
                this.getWorldVertices(),
                otherObj.getWorldVertices()
            );
            if (intersectionPolygon.length > 0) {
                return PolygonHelper.calculatePolygonArea(intersectionPolygon);
            }
        }

        return 0;
    }
}
