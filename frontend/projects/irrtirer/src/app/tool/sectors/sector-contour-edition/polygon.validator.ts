import { Vector } from '../../../core/models/math/vector.model';
import { Line } from '../../../core/models/math/line.model';
import { PresenceInPoligonHelper } from '../../../core/helpers/polygon/presence-in-polygon-helper';
import { SchemaPath, validate } from '@angular/forms/signals';
import { Signal } from '@angular/core';

export function polygonValidator(field: SchemaPath<Vector[]>): void {
    validate(field, ({ value }) => polygonValidationFunc(value));
}

export function polygonValidationFunc(value: Signal<Vector[]>): { kind: string } | null {
    if (value().length < 3) {
        return { kind: 'tooFewVertices' };
    }

    if (arePolygonEdgesIntersecting(value())) {
        return { kind: 'edgesIntersect' };
    }

    return null;
}

function arePolygonEdgesIntersecting(vertices: Vector[]): boolean {
    const edges: Line[] = [];

    for (let i = 0; i < vertices.length; ++i) {
        edges.push(new Line(vertices[i], vertices.at(i - 1)!));
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
