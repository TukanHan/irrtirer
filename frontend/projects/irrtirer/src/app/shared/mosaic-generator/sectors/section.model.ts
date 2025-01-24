import hashIt from 'hash-it';
import { PolygonHelper } from '../../../core/helpers/polygon/polygon-helper';
import { Hashable } from '../../../core/models/hash-map';
import { Vector } from '../../../core/models/vector.model';
import { calculatePointToPolygonDistance } from '../helpers/polygon-helpers/point-to-polygon-distance-calculator';
import { GeometryObject } from '../models/geometry-object.model';
import { TileTransform } from '../models/tile-transform.model';
import { Triangle } from '../models/triangle.model';
import { Intersections } from './intersections/intersections';
import { SectorModel } from './sector.model';

export class SectionModel extends GeometryObject implements Hashable {
    public readonly id: number;

    public parent: SectorModel;

    public readonly triangle: Triangle;

    public neighbours: SectionModel[];

    public neighboursIds: number[];

    public directTiles: TileTransform[];

    public intersections: Intersections = new Intersections();

    public get wasGenerated(): boolean {
        return !!this.directTiles;
    }

    public override outerRadius: number;
    public override innerRadius: number;

    private readonly centroid: Vector;

    public constructor(triangle: Triangle, parent: SectorModel) {
        super();
        this.id = hashIt({contour: triangle.vertices, parentId: parent.id});
        this.parent = parent;
        this.triangle = triangle;
        this.centroid = PolygonHelper.calculatePolygonCentroid(triangle.vertices);

        this.innerRadius = calculatePointToPolygonDistance(this.centroid, triangle.vertices);
        this.outerRadius = Math.max(...triangle.vertices.map((vertex) => vertex.sub(this.centroid).magnitude()));
    }
    
    getHash(): number {
        return this.id;
    }

    public override getCentroid(): Vector {
        return this.centroid;
    }

    public override getWorldVertices(): Vector[] {
        return this.triangle.vertices;
    }

    public static restore(obj: SectionModel, parent: SectorModel): void {
        Object.setPrototypeOf(obj, SectionModel.prototype);
        Triangle.restore(obj.triangle);
        Vector.restore(obj.centroid);
        Intersections.restore(obj.intersections);
        obj.parent = parent;
    }
}