import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Vector } from '../../../core/models/math/vector.model';
import { Line } from '../../../core/models/math/line.model';
import { PresenceInPoligonHelper } from '../../../core/helpers/polygon/presence-in-polygon-helper';

export function polygonValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const vertices: Vector[] = control.value;
        
        if (vertices.length < 3) {
            return { tooFewVertices: true };
        }

        if (arePolygonEdgesIntersecting(vertices)) {
            return { edgesIntersect: true };
        }

        return null;
    };
}

function arePolygonEdgesIntersecting(vertices: Vector[]): boolean {
    const edges: Line[] = [];

    for (let i = 0; i < vertices.length; ++i) {
        edges.push(new Line(vertices.at(i), vertices.at(i - 1)));
    }

    for (let i = 0; i < vertices.length; ++i) {
        for (let j = 0; j < vertices.length; ++j) {
            if (i === j || (i + 1) % vertices.length === j || (j + 1) % vertices.length === i) {
                continue;
            }

            if (PresenceInPoligonHelper.areLineIntersecting(edges[i], edges[j])) {
                return true;
            }
        }
    }

    return false;
}
